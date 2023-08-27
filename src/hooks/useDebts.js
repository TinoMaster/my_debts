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
  const { user } = useContext(AuthContext);

  const error_getDebts = (res) => {
    setLoading(false);
    setError(res);
  };

  const addNewDebtToArray = (debt) => {
    console.log(debt);
    setDebts([...debts, debt]);
  };

  /*  const delete_debt_from_debts = (id) => {
    let newDebts = debts.filter((item) => item._id !== id);
    setDebts(newDebts);
  };

  const deleteDebt = (e, id) => {
    e.stopPropagation();
    delete_debt(user.token, id).then((res) => {
      if (res.error) {
        setError(res);
      } else if (res.success) {
        delete_debt_from_debts(id);
      }
    });
  }; */

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
          console.log(res);
          success_getDebts(res);
        }
      });
    }
  }, []);

  return { collections, ballance, loading, debts, error, addNewDebtToArray };
};
