import { useState } from "react";

export const useModalViewCard = () => {
  const [modalNewPay, setModalNewPay] = useState(false);

  const openModalNewPay = () => {
    setModalNewPay(true);
  };
  const closeModalNewPay = () => {
    setModalNewPay(false);
  };
  return { modalNewPay, openModalNewPay, closeModalNewPay };
};
