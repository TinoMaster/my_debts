import React from "react";
import { MdOutlineReportGmailerrorred } from "react-icons/md";

export const ModalNewPay = (props) => {
  const {
    closeModalNewPay,
    handleInputNewPay,
    newPay,
    sendNewPay,
    id,
    error,
    darkMode,
  } = props;
  return (
    <div className="w-full flex justify-center items-center h-full absolute">
      <div
        className={`w-10/12 relative bg-gradient-to-t ${
          darkMode
            ? "from-slate-800 to-darkMode"
            : "from-slate-100 to-slate-200 text-slate-600"
        } p-4  rounded-md flex flex-col shadow-lg font-roboto shadow-black/40`}
      >
        {/* Error */}
        {error.error ? (
          <p className="absolute text-lightMode -top-6 bg-red-400/80 p-2 rounded-md flex gap-1 items-center">
            <MdOutlineReportGmailerrorred className="text-xl" /> {error.message}
          </p>
        ) : null}
        <h3 className="py-3 text-2xl font-bold">Nuevo pago</h3>
        <div className="">
          <p className="pl-1 font-bold">cantidad</p>
          <input
            onChange={handleInputNewPay}
            className={`w-full rounded-md p-2 shadow-inner ${
              darkMode ? "bg-white/10" : "bg-white"
            } shadow-black/30 focus:outline-none`}
            type="number"
            name="cantidad"
            value={newPay.cantidad}
          />
        </div>
        <div className="w-full py-2">
          <p className="pl-1 font-bold">comentario</p>
          <textarea
            onChange={handleInputNewPay}
            className="overflow-auto resize-none w-full h-24 rounded-md shadow-inner shadow-black/30 p-2 focus:outline-none"
            name="comentario"
            value={newPay.comentario}
          />
        </div>
        {/* Buttons */}
        <div className="flex justify-between gap-2 py-2 px-1">
          <button
            onClick={() => sendNewPay(id)}
            className={`w-1/2 p-2 bg-gradient-to-tr from-secondary to-secondary/50 text-white rounded-md shadow`}
          >
            Aceptar
          </button>
          <button
            onClick={closeModalNewPay}
            className={`w-1/2 p-2 bg-gradient-to-tr from-red-500 to-red-500/50 text-white  rounded-md shadow`}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
