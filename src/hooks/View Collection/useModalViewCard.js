import { useState } from "react";
import { addNewPayToDebt } from "../../services/debts";
import { getToken } from "../../utilities/getToken";

const date = new Date();
const initialPay = {
  cantidad: "",
  fecha: date,
  comentario: "",
};

export const useModalViewCard = (add_NewPay_ToDebtArray) => {
  const [modalNewPay, setModalNewPay] = useState(false);
  const [newPay, setNewPay] = useState(initialPay);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);

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
          add_NewPay_ToDebtArray(res.data, res.newPaid);
          setLoading(false);
          setSuccess(true);
          closeModalNewPay();
          setTimeout(() => setSuccess(false), 3000);
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
  };
};
