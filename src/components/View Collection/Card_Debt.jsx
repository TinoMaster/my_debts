import { FaDollarSign } from "react-icons/fa";
import { useCardDebt } from "../../hooks/View Collection/useCardDebt";
export const Card_Debt = ({ debt, color, secondColor }) => {
  const { description, deuda } = debt;
  const { partialPayment } = useCardDebt(debt);

  return (
    <div className="p-1 relative text-sm flex flex-col w-full md:w-1/3 ">
      {/* Caja superior */}
      <div className="p-3 bg-gradient-to-tr from-white/5 to-secondary/10 rounded-md shadow-md">
        <div className="flex justify-between items-baseline">
          <h2 className="pb-1 text-center font-semibold">{description}</h2>
          <h3 className="text-xs p-1 bg-white/5 rounded-md shadow">
            {debt.fecha}
          </h3>
        </div>
        <div className="flex flex-col">
          <div className="w-full">
            <p
              style={{ color }}
              className="flex items-center justify-end font-semibold text-2xl pt-2"
            >
              <FaDollarSign /> {deuda}
            </p>
            <p className="flex justify-between">
              Pagado:{" "}
              <span
                style={{ color: secondColor }}
                className="flex items-center gap-1"
              >
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
      </div>
      {/* Caja inferior */}
    </div>
  );
};
