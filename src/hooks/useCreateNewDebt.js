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

  /* States de pagos parciales */
  const [pagoParcial, setPagoParcial] = useState(0);
  const [commentPagoParcial, setCommentPagoParcial] = useState("");

  const idUser = getID();

  /* Handlers */
  const handlerInputNewDebt = (e) => {
    let { name, value } = e.target;
    setNewDebt({ ...newDebt, [name]: value });
  };

  const handlerIsPaid = (e) => {
    setCommentPagoParcial("");
    setPagoParcial(0);
    setNewDebt({ ...newDebt, pagada: { isDone: e.target.checked } });
  };

  const handlerPartialPaid = (e) => {
    setPagoParcial(e.target.value);
  };

  const handlerCommentPartialPaid = (e) => {
    setCommentPagoParcial(e.target.value);
  };

  const handlerDebtType = (e) => {
    if (e.target.value === "deudor") {
      setNewDebt({ ...newDebt, deudor: idUser, acreedor: "" });
    } else if (e.target.value === "acreedor") {
      setNewDebt({ ...newDebt, acreedor: idUser, deudor: "" });
    }
  };

  /* Functions */
  const openCloseNewDebt = (name) => {
    setNewDebt({ ...newDebt, name });
    setOpenNewDebt((prev) => !prev);
  };

  const funcHandlers = {
    handlerInputNewDebt,
    handlerIsPaid,
    handlerDebtType,
    handlerPartialPaid,
    handlerCommentPartialPaid,
  };

  return {
    openCloseNewDebt,
    funcHandlers,
    openNewDebt,
    newDebt,
    pagoParcial,
    commentPagoParcial,
  };
};
