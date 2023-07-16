import { FaDollarSign } from "react-icons/fa";
import { useBalance } from "../../hooks/View Collection/useBalance";

export const Balance = ({ collection }) => {
  const { balanceCollection } = useBalance();
  const balance = balanceCollection(collection);
  return (
    <div className="text-sm shadow-md rounded-md bg-secondary/5">
      <div className="m-2 flex justify-between">
        <h4 className="">Me Deben</h4>
        <p className="flex items-center gap-1 mr-2">
          <FaDollarSign /> {balance[0]}
        </p>
      </div>
      {/* Dueño */}
      <div className="m-2 flex justify-between">
        <h4 className="">Debo</h4>
        <p className="flex items-center gap-1 mr-2">
          <FaDollarSign /> {balance[1]}
        </p>
      </div>
      <div className="m-2 flex justify-between">
        <h4 className="">Balance</h4>
        <p className="flex items-center gap-1 mr-2">
          <FaDollarSign /> {balance[2]}
        </p>
      </div>
    </div>
  );
};
