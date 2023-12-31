import { FaDollarSign } from "react-icons/fa";
import { FcDebt, FcMoneyTransfer } from "react-icons/fc";
import { LiaBalanceScaleSolid } from "react-icons/lia";
export const Balance_Deudas = ({ ballance, darkMode }) => {
  return (
    <div className="w-full flex flex-col rounded-md">
      <h4 className="text-sm text-slate-400 pl-2">Balance</h4>

      <div className="py-1">
        <div
          className={`py-4 px-2 ${
            darkMode ? "bg-white/5 border border-primary/40" : "bg-white/90"
          } shadow-md rounded-md flex justify-between`}
        >
          <h4 className="flex items-center gap-2 px-2">
            <FcMoneyTransfer className="text-xl" /> Me Deben
          </h4>
          <p className="text-sm text-secondary flex items-center mr-2">
            <FaDollarSign /> {ballance[0]}
          </p>
        </div>

        <div
          className={`my-2 shadow-md py-4 px-2 rounded-md flex justify-between ${
            darkMode ? "bg-white/5 border border-primary/40" : "bg-white/90"
          }`}
        >
          <h4 className="flex items-center gap-2 px-2">
            <FcDebt className="text-xl" /> Debo
          </h4>
          <p className="text-sm text-red-400/80 flex items-center mr-2">
            <FaDollarSign /> {ballance[1]}
          </p>
        </div>
        <div
          className={`my-2 shadow-md py-4 px-2 rounded-md flex justify-between ${
            darkMode ? "bg-white/5 border border-primary/40" : "bg-white/90"
          } `}
        >
          <h4 className="flex items-center gap-2 px-2">
            <LiaBalanceScaleSolid className="text-xl" /> Balance
          </h4>
          <p className="text-sm text-third flex items-center mr-2">
            <FaDollarSign /> {ballance[2]}
          </p>
        </div>
      </div>
    </div>
  );
};
