import { useState } from "react";
import { getID } from "../utilities/getId";

const initialState = {
  name: "",
  description: "",
  creador: "",
  deudor: "",
  acreedor: "",
  deuda: "",
  fecha: "",
  pagada: {
    isDone: false,
    fecha: "",
  },
  pagos: [],
  comentario: "",
};

export const useCreateNewDebt = () => {
  const [openNewDebt, setOpenNewDebt] = useState(false);
  const [newDebt, setNewDebt] = useState(initialState);
  const [errorCreateDebt, setErrorCreateDebt] = useState({});
  const [successCreateDebt, setSuccessCreateDebt] = useState({});
  const [loadingCreateDebt, setLoadingCreateDebt] = useState(false);

  /* States de pagos parciales */
  const [pagoParcial, setPagoParcial] = useState("");
  const [commentPagoParcial, setCommentPagoParcial] = useState("");

  const idUser = getID();

  /* Handlers */
  const handlerInputNewDebt = (e) => {
    setErrorCreateDebt({});
    let { name, value } = e.target;
    setNewDebt({ ...newDebt, [name]: value });
  };

  const handlerIsPaid = (e) => {
    setErrorCreateDebt({});
    setCommentPagoParcial("");
    setPagoParcial(0);
    setNewDebt({ ...newDebt, pagada: { isDone: e.target.checked } });
  };

  const handlerPartialPaid = (e) => {
    setErrorCreateDebt({});
    setPagoParcial(e.target.value);
  };

  const handlerCommentPartialPaid = (e) => {
    setErrorCreateDebt({});
    setCommentPagoParcial(e.target.value);
  };

  const handlerDebtType = (e) => {
    setErrorCreateDebt({});
    if (e.target.value === "deudor") {
      setNewDebt({ ...newDebt, deudor: idUser, acreedor: "" });
    } else if (e.target.value === "acreedor") {
      setNewDebt({ ...newDebt, acreedor: idUser, deudor: "" });
    }
  };

  const handlerResetDebt = () => {
    setErrorCreateDebt({});
    setNewDebt(initialState);
    setPagoParcial("");
    setCommentPagoParcial("");
  };

  /* Functions */
  const openCloseNewDebt = (name) => {
    setNewDebt({ ...newDebt, name });
    setOpenNewDebt((prev) => !prev);
  };

  const validateNewDebt = () => {
    if (newDebt.description.length === 0)
      return { error: true, message: "El titulo no puede estar vacio" };
    if (newDebt.acreedor.length === 0)
      return { error: true, message: "Debe agregar el contacto de la deuda" };
    if (newDebt.deudor.length === 0)
      return { error: true, message: "Debe agregar el contacto de la deuda" };
    if (newDebt.deuda.length === 0 || newDebt.deuda === 0)
      return { error: true, message: "Debe agregar la cantidad de la deuda" };
    return { error: false };
  };

  const coumpoundNewDebt = () => {
    const date = new Date();
    setNewDebt({ ...newDebt, fecha: date, creador: idUser });
    if (pagoParcial && pagoParcial > 0) {
      const paid = {
        fecha: date,
        cantidad: pagoParcial,
        comentario: commentPagoParcial.length > 0 ? commentPagoParcial : "",
      };
      setNewDebt({ ...newDebt, pagos: [paid] });
    }
  };

  const SendNewDebt = () => {
    const validator = validateNewDebt();
    if (!validator.error) {
      console.log("siiii");
      coumpoundNewDebt();
      console.log(newDebt);
    } else setErrorCreateDebt(validator);
  };

  const funcHandlers = {
    handlerInputNewDebt,
    handlerIsPaid,
    handlerDebtType,
    handlerPartialPaid,
    handlerCommentPartialPaid,
    handlerResetDebt,
  };

  return {
    openCloseNewDebt,
    funcHandlers,
    openNewDebt,
    newDebt,
    pagoParcial,
    commentPagoParcial,
    SendNewDebt,
    errorCreateDebt,
  };
};
