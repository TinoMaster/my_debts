import { FaDollarSign } from "react-icons/fa";
import { useBalance } from "../../hooks/View Collection/useBalance";
import { FcDebt, FcMoneyTransfer } from "react-icons/fc";
import { LiaBalanceScaleSolid } from "react-icons/lia";

export const Balance = ({ collection, darkMode }) => {
  const { balanceCollection } = useBalance();
  const balance = balanceCollection(collection);
  return (
    <div
      className={`text-sm shadow-md rounded-md bg-gradient-to-tr ${
        darkMode
          ? "from-slate-100/5 to-white/5 border border-primary/50"
          : "from-slate-100 to-white"
      }`}
    >
      <div className="m-2 flex justify-between">
        <h4 className="font-semibold flex items-center gap-2 px-2">
          <FcMoneyTransfer className="text-xl" />
          Me Deben
        </h4>
        <p className="flex items-center mr-2">
          <FaDollarSign /> {balance[0]}
        </p>
      </div>
      {/* Dueño */}
      <div className="m-2 flex justify-between">
        <h4 className="font-semibold flex items-center gap-2 px-2">
          <FcDebt className="text-xl" />
          Debo
        </h4>
        <p className="flex items-center mr-2">
          <FaDollarSign /> {balance[1]}
        </p>
      </div>
      <div className="m-2 flex justify-between">
        <h4 className="font-semibold flex items-center gap-2 px-2">
          <LiaBalanceScaleSolid className="text-xl" />
          Balance
        </h4>
        <p className="flex items-center mr-2">
          <FaDollarSign /> {balance[2]}
        </p>
      </div>
    </div>
  );
};
