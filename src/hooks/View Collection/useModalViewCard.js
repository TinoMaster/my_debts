import { useState } from "react";
import { addNewPayToDebt, deletePayToDebt } from "../../services/debts";
import { getToken } from "../../utilities/getToken";

const date = new Date();
const initialPay = {
  cantidad: "",
  fecha: date,
  comentario: "",
};

export const useModalViewCard = (refresh_debts_afterPay) => {
  const [modalNewPay, setModalNewPay] = useState(false);
  const [newPay, setNewPay] = useState(initialPay);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const [modalViewPay, setModalViewPay] = useState(false);
  /* States of pays */
  const [payToView, setPayToView] = useState({});
  const [idDebt, setIdDebt] = useState("");

  const token = getToken();

  const handleInputNewPay = (e) => {
    setError({});
    const { name, value } = e.target;
    setNewPay({ ...newPay, [name]: value });
  };

  const openModalNewPay = () => {
    setModalNewPay(true);
  };
  const closeModalNewPay = () => {
    setError({});
    setNewPay(initialPay);
    setModalNewPay(false);
  };

  const openModalViewPay = (pay, id) => {
    setIdDebt(id);
    setPayToView(pay);
    setModalViewPay(true);
  };
  const closeModalViewPay = () => {
    setModalViewPay(false);
  };

  const validatePay = () => {
    if (newPay.cantidad === 0 || newPay.cantidad === "") {
      return { error: true, message: "Eliga una cantidad mayor a 0" };
    }
    if (newPay.comentario === "") {
      return { error: true, message: "Debe agregar un comentario" };
    }
    return { error: false };
  };

  const sendNewPay = (id) => {
    setLoading(true);
    const validate = validatePay();
    if (validate.error) {
      setLoading(false);
      setError(validate);
    } else {
      addNewPayToDebt(token, id, newPay).then((res) => {
        if (res.error) {
          setError(res);
          setLoading(false);
        } else if (res.success) {
          refresh_debts_afterPay();
          setLoading(false);
          setSuccess(true);
          closeModalNewPay();
          setTimeout(() => setSuccess(false), 3000);
        }
      });
    }
  };

  const deletePaid = (idPaid) => {
    const confirm = window.confirm("Seguro que desea eliminar el pago");
    if (confirm) {
      deletePayToDebt(token, idDebt, idPaid).then((res) => {
        if (res.error) {
          setError(res);
          setTimeout(() => {
            setError({});
          }, 3000);
        } else if (res.success) {
          setModalViewPay(false);
          refresh_debts_afterPay();
        }
      });
    }
  };

  return {
    modalNewPay,
    openModalNewPay,
    closeModalNewPay,
    handleInputNewPay,
    newPay,
    sendNewPay,
    error,
    success,
    loading,
    modalViewPay,
    openModalViewPay,
    closeModalViewPay,
    payToView,
    deletePaid,
  };
};
