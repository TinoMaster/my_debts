import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useViewCollection = (debts, name, _id) => {
  const [modalNewDebt, setModalNewDebt] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (_id === "") {
      setModalNewDebt(true);
    }
  }, []);

  const openCloseNewDebt = () => {
    _id === "" ? navigate("/") : setModalNewDebt(!modalNewDebt);
  };

  const collection_by_name = () => {
    return debts.filter(
      (debt) => debt.name === name && debt.creador?._id === _id
    );
  };

  return { collection_by_name, openCloseNewDebt, modalNewDebt };
};
