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
            : "from-slate-100 to-slate-200"
        } p-3  rounded-md flex flex-col items-center shadow-lg font-roboto shadow-black/40`}
      >
        {/* Error */}
        {error.error ? (
          <p className="absolute text-lightMode -top-6 bg-red-400/80 p-2 rounded-md flex gap-1 items-center">
            <MdOutlineReportGmailerrorred className="text-xl" /> {error.message}
          </p>
        ) : null}
        <h3 className="text-center py-3 text-xl font-bold">Nuevo pago</h3>
        <div className="flex flex-col gap-2 items-center py-2">
          <p>cantidad:</p>
          <input
            onChange={handleInputNewPay}
            className="rounded-md bg-white/5 py-1 shadow-inner shadow-black/30 text-center focus:outline-none"
            type="number"
            name="cantidad"
            value={newPay.cantidad}
          />
        </div>
        <div className="w-full flex flex-col items-center py-2">
          <p className="">comentario:</p>
          <textarea
            onChange={handleInputNewPay}
            className="overflow-auto resize-none w-full h-24 rounded-md shadow-inner shadow-black/30 bg-white/5 p-1 focus:outline-none"
            name="comentario"
            value={newPay.comentario}
          />
        </div>
        {/* Buttons */}
        <div className="flex justify-center gap-2 py-2">
          <button
            onClick={() => sendNewPay(id)}
            className={`py-1 px-2 bg-gradient-to-tr ${
              darkMode
                ? "from-darkMode to-slate-700"
                : "from-slate-200 to-slate-300"
            }  rounded-md shadow-md`}
          >
            Aceptar
          </button>
          <button
            onClick={closeModalNewPay}
            className={`py-1 px-2 bg-gradient-to-tr ${
              darkMode
                ? "from-darkMode to-slate-700"
                : "from-slate-200 to-slate-300"
            }  rounded-md shadow-md`}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
