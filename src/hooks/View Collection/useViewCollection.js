import { useState } from "react";

export const useViewCollection = (debts, name, _id) => {
  const [modalNewDebt, setModalNewDebt] = useState(false);
  

  const openCloseNewDebt = () => {
    setModalNewDebt((prev) => !prev);
  };

  const collection_by_name = () => {
    return debts.filter(
      (debt) => debt.name === name && debt.creador?._id === _id
    );
  };

  return { collection_by_name, openCloseNewDebt, modalNewDebt };
};
