import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/authContext";
import { getDebts, filterCollections } from "../services/debts";

export const useDebts = () => {
  const [debts, setDebts] = useState([]);
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user._id.length > 0) {
      setLoading(true);
      getDebts(user.token, user._id).then((res) => {
        if (res.error) {
          setLoading(false);
          setError(response);
        } else {
          setLoading(false);
          setError({});
          setDebts(res.data);
          setCollections(filterCollections(res.data, user));
        }
      });
    }
  }, []);

  const balanceTotal = () => {
    const balance = debts.reduce(
      (result, debt) => {
        const deuda =
          debt.deuda - debt.pagos?.reduce((res, el) => res + el.cantidad, 0);
        if (debt.acreedor._id === user._id) {
          result[0] += deuda;
        } else if (debt.deudor._id === user._id) {
          result[1] += deuda;
        }
        return result;
      },
      [0, 0]
    );
    balance[2] = balance[0] - balance[1];
    return balance;
  };

  return { collections, balanceTotal, loading, debts, error };
};
