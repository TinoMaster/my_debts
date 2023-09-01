import { useState } from "react";

export const useCardDebt = () => {
  const [modalViewCard, setModalViewCard] = useState(false);

  const openModalViewCard = () => {
    setModalViewCard(true);
  };

  const partial_payment = (debt) => {
    if (!debt.pagada.isDone && debt.pagos.length === 0) {
      return 0;
    } else if (debt.pagada.isDone) {
      return debt.deuda;
    } else if (debt.pagos.length > 0) {
      return debt.pagos.reduce((res, ele) => (res += ele.cantidad), 0);
    }
  };

  return {
    partial_payment,
    modalViewCard,
    openModalViewCard,
    setModalViewCard,
  };
};
