import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import { DebtType } from "./DebtType";
import { DebtorOrCreditor } from "./DebtorOrCreditor";

export const Modal_Create_Debt = ({
  darkMode,
  openCloseNewDebt,
  newDebt,
  funcHandlers,
}) => {
  const { handlerInputNewDebt, handlerIsPaid, handlerDebtType } = funcHandlers;
  const { user } = useContext(AuthContext);
  return (
    <div
      className={`bg-gradient-to-tr text-white ${
        darkMode
          ? "from-darkMode to-slate-900 text-lightMode"
          : "from-lightMode to-slate-200 text-darkMode"
      }w-full mx-2 px-10 py-4 rounded-md max-w-[400px]`}
    >
      {/* Encabezado */}
      <h2 className="text-lg font-semibold w-full text-center">Nueva Deuda</h2>
      {/*Caja Elegir tipo de deuda */}
      <DebtType handlerDebtType={handlerDebtType} user={user} />
      {/* Caja inferior */}
      <div className="w-full flex flex-wrap justify-between gap-4">
        {/* Subtitulo */}
        <div className="w-full flex flex-wrap">
          <h4 className="w-full text-center font-serif">Titulo:</h4>
          <input
            value={newDebt.description}
            onChange={handlerInputNewDebt}
            name="description"
            type="text"
            className="w-full p-1 shadow-inner shadow-black/30 text-darkMode font-medium rounded-md focus:outline-none"
          />
        </div>
        {/* Cantidad */}
        <div className="w-1/3 flex flex-wrap">
          <h4 className="w-full text-center font-serif">Cantidad</h4>
          <input
            value={newDebt.deuda}
            onChange={handlerInputNewDebt}
            name="deuda"
            type="number"
            className="w-full p-1 shadow-inner shadow-black/30 text-darkMode font-medium rounded-md focus:outline-none"
          />
        </div>
        {/* Pagada */}
        <div className="w-1/5 flex flex-wrap justify-center">
          <h4 className="w-full text-center font-serif">Pagada</h4>
          <input type="checkbox" onChange={handlerIsPaid} />
        </div>
        {/* Pago Parcial */}
        <div className="w-1/3 flex flex-wrap">
          <h4 className="w-full text-center font-serif">Pago Parcial</h4>
          <input
            type="number"
            disabled={newDebt.pagada.isDone ? true : false}
            className="w-full p-1 shadow-inner shadow-black/30 text-darkMode font-medium rounded-md focus:outline-none"
          />
        </div>
        {/* Deudores/acreedores */}
        <DebtorOrCreditor />
        {/* Comentarios */}
        <div className="w-full flex flex-wrap">
          <h4 className="w-full text-center font-serif">Comentario</h4>
          <textarea
            name="comentario"
            className="w-full p-1 shadow-inner shadow-black/30 text-darkMode font-medium rounded-md focus:outline-none"
          />
        </div>
      </div>
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
