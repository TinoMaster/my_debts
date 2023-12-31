import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useViewCollection = (debts, name, _id, user) => {
  const [modalNewDebt, setModalNewDebt] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (_id === "") {
      setModalNewDebt(true);
    }
  }, []);

  const isMyCollection = () => {
    if (_id === user?._id) return true;
    return false;
  };

  const openCloseNewDebt = () => {
    _id === "" ? navigate("/") : setModalNewDebt((prev) => !prev);
  };

  const collection_by_name = () => {
    return debts.filter(
      (debt) => debt.name === name && debt.creador?._id === _id
    );
  };

  return {
    collection_by_name,
    openCloseNewDebt,
    modalNewDebt,
    setModalNewDebt,
    isMyCollection,
  };
};
