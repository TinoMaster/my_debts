import { useState } from "react";

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
  comentario: [],
};

export const useCreateNewDebt = () => {
  const [openNewDebt, setOpenNewDebt] = useState(false);
  const [newDebt, setNewDebt] = useState(initialState);

  const openCloseNewDebt = () => {
    setOpenNewDebt((prev) => !prev);
  };

  const handlerInputNewDebt = (e) => {
    let { name, value } = e.target;
    setNewDebt({ ...newDebt, [name]: value });
  };

  const handlerIsPaid = (e) => {
    setNewDebt({ ...newDebt, pagada: { isDone: e.target.checked } });
  };

  const handlerDebtType = (e, user) => {
    if (e.target.value === "deudor") {
      setNewDebt({ ...newDebt, deudor: user._id, acreedor: "" });
    } else if (e.target.value === "acreedor") {
      setNewDebt({ ...newDebt, acreedor: user._id, deudor: "" });
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
