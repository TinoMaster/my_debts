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

 /*  console.log(newDebt); */

  const idUser = getID();

  const openCloseNewDebt = (name) => {
    setNewDebt({ ...newDebt, name });
    setOpenNewDebt((prev) => !prev);
  };

  const handlerInputNewDebt = (e) => {
    let { name, value } = e.target;
    setNewDebt({ ...newDebt, [name]: value });
  };

  const handlerIsPaid = (e) => {
    setNewDebt({ ...newDebt, pagada: { isDone: e.target.checked } });
  };

  const handlerDebtType = (e) => {
    if (e.target.value === "deudor") {
      setNewDebt({ ...newDebt, deudor: idUser, acreedor: "" });
    } else if (e.target.value === "acreedor") {
      setNewDebt({ ...newDebt, acreedor: idUser, deudor: "" });
    }
  };


  const funcHandlers = {
    handlerInputNewDebt,
    handlerIsPaid,
    handlerDebtType,
  };

  return {
    openCloseNewDebt,
    funcHandlers,
    openNewDebt,
    newDebt,
  };
};
