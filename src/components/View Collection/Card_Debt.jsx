import { FaDollarSign } from "react-icons/fa";
import { useCardDebt } from "../../hooks/View Collection/useCardDebt";
export const Card_Debt = ({ debt }) => {
  const { description, deuda } = debt;
  const { partialPayment } = useCardDebt(debt);
  return (
    <div className="px-2 py-4 relative bg-white/10 flex flex-wrap w-full md:w-1/4 rounded-md shadow-md">
      <h2 className="w-full pb-1 text-center font-serif text-lg">
        {description}
      </h2>
      {/* Fecha absolute */}
      <h3 className="absolute right-0 -top-3 bg-white/5 p-1 text-xs rounded-md shadow-md">
        {debt.fecha}
      </h3>
      <div className="w-full">
        <p className="flex justify-between text-secondary font-semibold">
          Deuda Inicial:{" "}
          <span className="flex items-center gap-1">
            <FaDollarSign /> {deuda}
          </span>
        </p>
        <p className="flex justify-between">
          Pagado:{" "}
          <span className="flex items-center gap-1">
            {/* <FaDollarSign /> */}
            {partialPayment !== 0 ? `-  ${partialPayment}` : partialPayment}
          </span>
        </p>
        <p className="flex justify-between">
          Resto:{" "}
          <span className="flex items-center gap-1">
            <FaDollarSign />
            {partialPayment !== 0 ? deuda - partialPayment : 0}
          </span>
        </p>
      </div>
    </div>
  );
};
