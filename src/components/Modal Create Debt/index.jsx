import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import { DebtType } from "./DebtType";
import { OtherCamps } from "./OtherCamps";

export const Modal_Create_Debt = ({
  darkMode,
  openCloseNewDebt,
  newDebt,
  funcHandlers,
  pagoParcial,
  commentPagoParcial,
  SendNewDebt,
  errorCreateDebt,
}) => {
  const {
    handlerInputNewDebt,
    handlerIsPaid,
    handlerDebtType,
    handlerPartialPaid,
    handlerCommentPartialPaid,
    handlerResetDebt,
  } = funcHandlers;
  const { myContacts } = useContext(AuthContext);
  return (
    <div
      className={`flex flex-col items-center relative bg-gradient-to-tr ${
        darkMode ? "from-darkMode to-slate-900" : "from-lightMode to-slate-200"
      } ${
        darkMode ? "text-lightMode" : "text-darkMode"
      } w-full mx-2 px-10 py-4 rounded-md max-w-[400px]`}
    >
      {/* Error */}
      {errorCreateDebt.error ? (
        <div className="absolute -top-2 text-sm py-1 px-3 bg-red-400 rounded-md">
          <p>{errorCreateDebt.message}</p>
        </div>
      ) : null}

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
        handlerPartialPaid={handlerPartialPaid}
        pagoParcial={pagoParcial}
        handlerCommentPartialPaid={handlerCommentPartialPaid}
        commentPagoParcial={commentPagoParcial}
      />
      <div className="flex justify-center py-2 mt-5">
        <button
          onClick={SendNewDebt}
          className="p-2 mx-2 bg-black/30 rounded-md shadow"
        >
          Aceptar
        </button>
        <button
          onClick={handlerResetDebt}
          className="p-2 mx-2 bg-black/30 rounded-md shadow"
        >
          Resetear
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
