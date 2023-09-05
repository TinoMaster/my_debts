import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/authContext";
import {
  getDebts,
  filterCollections,
  balanceTotal,
  delete_debt,
} from "../services/debts";

export const useDebts = () => {
  const [debts, setDebts] = useState([]);
  const [collections, setCollections] = useState([]);
  const [ballance, setBallance] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [emptyCollection, setEmptyCollection] = useState(0);
  const { user } = useContext(AuthContext);

  const error_getDebts = (res) => {
    setLoading(false);
    setError(res);
  };

  const addNewDebtToArray = (debt) => {
    setEmptyCollection((prev) => prev + 1);
    setDebts([...debts, debt]);
  };

  const delete_debt_from_debts = (id, collections, navigate) => {
    setEmptyCollection((prev) => prev + 1);
    let newDebts = debts.filter((item) => item._id !== id);
    setDebts(newDebts);
    if (collections === 1) {
      navigate("/");
    }
  };

  const deleteDebt = (e, id, collections, navigate) => {
    e.stopPropagation();
    delete_debt(user.token, id).then((res) => {
      if (res.error) {
        setError(res);
      } else if (res.success) {
        delete_debt_from_debts(id, collections, navigate);
      }
    });
  };

  /* //TODO: Fixed this */
  const add_NewPay_ToDebtArray = (newDebt, newPay) => {
    console.log(newPay);
    const index = debts.findIndex((el) => el._id === newDebt._id);
    const newDebts = [
      ...debts.filter((debt) => debt._id !== newDebt._id),
      { ...debts[index], pagos: [...debts[index].pagos, newPay] },
    ];
    setDebts(newDebts);
  };

  const success_getDebts = (res) => {
    setLoading(false);
    setError({});
    setDebts(res.data);
    setCollections(filterCollections(res.data, user));
    setBallance(balanceTotal(res.data, user));
  };

  useEffect(() => {
    if (user._id.length > 0) {
      setLoading(true);
      getDebts(user.token, user._id).then((res) => {
        if (res.error) {
          error_getDebts(res);
        } else {
          success_getDebts(res);
        }
      });
    }
  }, [emptyCollection]);

  return {
    collections,
    ballance,
    loading,
    debts,
    error,
    addNewDebtToArray,
    deleteDebt,
    add_NewPay_ToDebtArray,
  };
};
