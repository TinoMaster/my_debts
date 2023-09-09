import { FaDollarSign, FaTrash } from "react-icons/fa";
import { useCardDebt } from "../../hooks/View Collection/useCardDebt";
import { useNavigate } from "react-router-dom";
import { ModalPortal } from "../modals/modalPortal";
import { ModalViewCard } from "./ModalViewCard";
export const Card_Debt = ({
  debt,
  color,
  secondColor,
  deleteDebt,
  countCard,
  refresh_debts_afterPay,
  darkMode,
  isMyCollection,
}) => {
  const { description, deuda } = debt;
  const {
    partial_payment,
    modalViewCard,
    openModalViewCard,
    setModalViewCard,
  } = useCardDebt(debt);

  const navigate = useNavigate();
  const partialPayment = partial_payment(debt);

  return (
    <div className="p-1 text-sm flex flex-col w-full md:w-1/3">
      {/* Modal */}
      {modalViewCard ? (
        <ModalPortal>
          <ModalViewCard
            debt={debt}
            partialPayment={partialPayment}
            setModalViewCard={setModalViewCard}
            refresh_debts_afterPay={refresh_debts_afterPay}
            darkMode={darkMode}
            color={color}
            secondColor={secondColor}
            deleteDebt={deleteDebt}
            countCard={countCard}
            navigate={navigate}
            isMyCollection={isMyCollection}
          />
        </ModalPortal>
      ) : null}
      {/* Caja superior */}
      <div
        onClick={openModalViewCard}
        style={{ borderColor: color }}
        className={`p-3 relative bg-gradient-to-tr ${
          darkMode
            ? "from-white/5 to-slate-50/5 border"
            : "from-white/90 to-slate-50"
        } rounded-md shadow-md hover:bg-black/10 hover:cursor-pointer`}
      >
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
