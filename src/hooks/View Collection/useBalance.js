import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

export const useBalance = () => {
  const { user } = useContext(AuthContext);

  const balanceCollection = (collection) => {
    const balance = collection.reduce(
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
  
  return { balanceCollection };
};
