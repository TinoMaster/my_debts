import { useEffect, useState } from "react";
import { my_debts } from "../services/debts/debts";

export const useDebts = () => {
  const [debts, setDebts] = useState([]);
  const [loading, setLoading] = useState(false);
  /* const [error, setError] = useState({}); */

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setDebts(my_debts());
      setLoading(false);
    }, 500);
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

  return { filter_collections, loading, debts };
};
