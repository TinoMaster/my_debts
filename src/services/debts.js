import { httpHelper } from "../utilities/httpHelper";
import { urls } from "../utilities/urls";

export const getDebts = async (token = "", id = "") =>
  await httpHelper(token).get(`${urls.getMyDebts}/${id}`);

export const createNewDebts = async (token = "", newDebt = {}) => {
  const options = {
    body: newDebt,
    headers: { "content-type": "application/json" },
  };
  return await httpHelper(token).post(`${urls.createNewDebt}`, options);
};

export const addNewPayToDebt = async (token = "", id = "", data = {}) => {
  const options = {
    body: data,
    headers: { "content-type": "application/json" },
  };
  return await httpHelper(token).put(`${urls.addNewPay}/${id}`, options);
};

export const delete_debt = async (token = "", id = "") =>
  await httpHelper(token).del(`${urls.deleteOneDebt}/${id}`);

export const filterCollections = (debts, user) => {
  const collections = debts?.reduce((result, value) => {
    const check = {
      name: value.name,
      deuda:
        value.deuda - value.pagos?.reduce((res, el) => res + el.cantidad, 0),
      creador: value.creador,
      deudor: value.deudor,
      acreedor: value.acreedor,
    };
    if (result.length === 0) result.push(check);
    else if (
      result.some(
        (el) => el.name === check.name && check.creador._id === el.creador._id
      )
    )
      for (const obj of result) {
        if (obj.name === check.name && obj.creador._id === check.creador._id) {
          if (check.acreedor._id === user._id) {
            obj.deuda += check.deuda;
          } else if (check.acreedor._id !== user._id) {
            obj.deuda -= check.deuda;
          }
        }
      }
    else {
      if (check.acreedor._id === user._id) {
        check.deuda = check.deuda;
      } else if (check.acreedor._id !== user._id) {
        check.deuda = -check.deuda;
      }
      result.push(check);
    }

    return result;
  }, []);

  const newCollection = collections.reduce((res, value) => {
    const contact =
      value.creador._id === user._id ? value.deudor : value.creador;
    const newCollection = {
      name: value.name,
      deuda: value.deuda,
      creador: value.creador,
      contact,
    };
    res.push(newCollection);
    return res;
  }, []);
  return newCollection;
};

export const balanceTotal = (debts = [], user) => {
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
