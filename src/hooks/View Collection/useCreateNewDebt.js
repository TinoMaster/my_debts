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

  return { openCloseNewDebt, openNewDebt, handlerInputNewDebt, newDebt };
};
