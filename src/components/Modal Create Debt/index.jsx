import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import { DebtType } from "./DebtType";
import { OtherCamps } from "./OtherCamps";

export const Modal_Create_Debt = ({
  darkMode,
  openCloseNewDebt,
  newDebt,
  funcHandlers,
}) => {
  const { handlerInputNewDebt, handlerIsPaid, handlerDebtType } = funcHandlers;
  const { myContacts } = useContext(AuthContext);
  return (
    <div
      className={`bg-gradient-to-tr ${
        darkMode ? "from-darkMode to-slate-900" : "from-lightMode to-slate-200"
      } ${
        darkMode ? "text-lightMode" : "text-darkMode"
      } w-full mx-2 px-10 py-4 rounded-md max-w-[400px]`}
    >
      {/* Encabezado */}
      <h2 className="text-lg font-semibold w-full text-center">Nueva Deuda</h2>
      {/*Caja Elegir tipo de deuda */}
      <DebtType handlerDebtType={handlerDebtType} />
      {/* Caja inferior */}
      <OtherCamps
        newDebt={newDebt}
        handlerInputNewDebt={handlerInputNewDebt}
        handlerIsPaid={handlerIsPaid}
        friends={myContacts.contacts}
        darkMode={darkMode}
      />
      <div className="flex justify-center py-2 mt-5">
        <button className="p-2 mx-2 bg-black/30 rounded-md shadow">
          Aceptar
        </button>
        <button
          onClick={openCloseNewDebt}
          className="p-2 mx-2 bg-black/30 rounded-md shadow"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};
