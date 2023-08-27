import { httpHelper } from "../utilities/httpHelper";
import { urls } from "../utilities/urls";

export const getDebts = async (token = "", id = "") =>
  await httpHelper(token).get(`${urls.getMyDebts}/${id}`);

export const createNewDebts = async (token = "", newDebt = {}) => {
  const options = {
    body: newDebt,
    headers: { "content-type": "application/json" },
  };
  await httpHelper(token).post(`${urls.createNewDebt}`, options);
};

export const delete_debt = async (token = "", id = "") =>
  await httpHelper(token).del(`${urls.deleteOneDebt}/${id}`);

export const filterCollections = (debts, user) => {
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
          } else if (check.acreedor !== user._id && check.creador !== user._id)
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

export const balanceTotal = (debts, user) => {
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
