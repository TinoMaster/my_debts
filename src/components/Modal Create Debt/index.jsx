import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import { DebtType } from "./DebtType";
import { OtherCamps } from "./OtherCamps";
import { useCreateNewDebt } from "../../hooks/useCreateNewDebt";
import { BiSolidNews } from "react-icons/bi";

export const Modal_Create_Debt = ({
  darkMode,
  openCloseNewDebt,
  setModalNewDebt,
  name,
  addNewDebtToArray,
  isNew,
  contact,
}) => {
  const { myContacts } = useContext(AuthContext);
  const {
    newDebt,
    funcHandlers,
    pagoParcial,
    commentPagoParcial,
    SendNewDebt,
    errorCreateDebt,
    refContactInput,
    refTypeDebt1,
    refTypeDebt2,
  } = useCreateNewDebt(
    name,
    addNewDebtToArray,
    isNew,
    contact,
    setModalNewDebt
  );
  const {
    handlerInputNewDebt,
    handlerIsPaid,
    handlerDebtType,
    handlerPartialPaid,
    handlerCommentPartialPaid,
    handlerResetDebt,
  } = funcHandlers;

  return (
    <div
      className={`flex flex-col items-center relative bg-gradient-to-tr ${
        darkMode
          ? "from-darkMode to-slate-800 text-slate-300"
          : "from-lightMode to-slate-200 text-slate-500"
      } ${
        darkMode ? "text-lightMode" : "text-darkMode"
      } w-full mx-2 px-5 py-4 rounded-md shadow-xl shadow-black/30 border border-secondary/30 max-w-[400px]`}
    >
      {/* Error */}
      {errorCreateDebt.error ? (
        <div className="absolute -top-2 text-sm py-1 px-3 bg-red-400 rounded-md">
          <p>{errorCreateDebt.message}</p>
        </div>
      ) : null}

      {/* Encabezado */}
      <h2 className="text-2xl font-bold w-full py-4 pl-2 flex items-center gap-2">
        Nueva Deuda
        <BiSolidNews className="text-2xl" />
      </h2>
      {/*Caja Elegir tipo de deuda */}
      <DebtType
        handlerDebtType={handlerDebtType}
        refTypeDebt1={refTypeDebt1}
        refTypeDebt2={refTypeDebt2}
        darkMode={darkMode}
        contact={contact}
      />
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
        refContactInput={refContactInput}
        isNew={isNew}
        nameOfContact={contact.name}
      />
      <div className="flex justify-center py-2 mt-5">
        <button
          onClick={() => SendNewDebt(openCloseNewDebt)}
          className="p-2 mx-2 bg-secondary/60 text-white rounded-md shadow"
        >
          Aceptar
        </button>
        <button
          onClick={handlerResetDebt}
          className="p-2 mx-2 bg-yellow-600/60 text-white rounded-md shadow"
        >
          Resetear
        </button>
        <button
          onClick={openCloseNewDebt}
          className="p-2 mx-2 bg-red-500/60 text-white rounded-md shadow"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};
