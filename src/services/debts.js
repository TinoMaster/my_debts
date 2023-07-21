import { httpHelper } from "../utilities/httpHelper";
import { urls } from "../utilities/urls";

export const getDebts = async (token = "", id = "") =>
  await httpHelper(token).get(`${urls.getMyDebts}/${id}`);

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
