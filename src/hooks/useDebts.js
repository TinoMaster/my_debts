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
    if (user._id.length > 0) {
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
    }
  }, [user]);

  /* const filter_collections = () => {
    const collections = debts?.reduce((result, value) => {
      const check = {
        name: value.name,
        deuda:
          value.deuda -
          value.pagos?.reduce((res, el) => (res += el.cantidad), 0),
        creador: value.creador._id,
        deudor: value.deudor._id,
        acreedor: value.acreedor._id,
      };
      if (result.length === 0) result.push(check);

      if (
        result.some(
          (el) => el.name === check.name && check.creador === el.creador
        )
      )
        for (const obj of result) {
          if (obj.name === check.name && obj.creador === check.creador) {
            if (check.acreedor === user._id && check.creador === user._id) {
              obj.deuda += check.deuda;
            } else if (
              check.acreedor !== user._id &&
              check.creador === user._id
            ) {
              obj.deuda -= check.deuda;
            } else if (
              check.acreedor === user._id &&
              check.creador !== user._id
            ) {
              obj.deuda += check.deuda;
            } else if (
              check.acreedor !== user._id &&
              check.creador !== user._id
            )
              obj.deuda += check.deuda;
          } else {
            console.log(obj);
          }
        }
      else result.push(check);

      return result;
    }, []);
    console.log(collections);
    return collections;
  }; */
  const filter_collections = () => {
    const collections = debts?.reduce((result, value) => {
      const check = {
        name: value.name,
        deuda:
          value.deuda - value.pagos?.reduce((res, el) => res + el.cantidad, 0),
        creador: value.creador._id,
        deudor: value.deudor._id,
        acreedor: value.acreedor._id,
      };
      if (result.length === 0) result.push(check);
      else if (
        result.some(
          (el) => el.name === check.name && check.creador === el.creador
        )
      )
        for (const obj of result) {
          if (obj.name === check.name && obj.creador === check.creador) {
            if (check.acreedor === user._id && check.creador === user._id) {
              obj.deuda += check.deuda;
            } else if (
              check.acreedor !== user._id &&
              check.creador === user._id
            ) {
              obj.deuda -= check.deuda;
            } else if (
              check.acreedor === user._id &&
              check.creador !== user._id
            ) {
              obj.deuda -= check.deuda;
            } else if (
              check.acreedor !== user._id &&
              check.creador !== user._id
            )
              obj.deuda += check.deuda;
          }
        }
      else {
        result.push(check);
      }

      return result;
    }, []);
    return collections;
  };

  return { filter_collections, loading, debts, error };
};
