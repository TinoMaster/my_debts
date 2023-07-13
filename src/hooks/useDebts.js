import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/authContext";
import { httpHelper } from "../utilities/httpHelper";
import { urls } from "../utilities/urls";

export const useDebts = () => {
  const [debts, setDebts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    httpHelper(user.token)
      .get(`${urls.getMyDebts}/${user._id}`)
      .then((res) => {
        if (res.error) {
          setLoading(false);
          setError(res);
        } else {
          setLoading(false);
          setError({});
          setDebts(res.data);
        }
      });
  }, []);

  const filter_collections = () => {
    const collections = debts?.reduce((result, value) => {
      const check = {
        name: value.name,
        deuda: value.deuda,
      };

      if (result.length === 0) result.push(check);

      if (result.some((el) => el.name === check.name)) {
        result.forEach((el) =>
          el.name === check.name ? (el.deuda += check.deuda) : null
        );
      } else result.push(check);

      return result;
    }, []);

    return collections;
  };

  return { filter_collections, loading, debts, error };
};
