import React from "react";
import { MdOutlineReportGmailerrorred } from "react-icons/md";

export const ModalNewPay = (props) => {
  const { closeModalNewPay, handleInputNewPay, newPay, sendNewPay, id, error } =
    props;
  return (
    <div className="w-full flex justify-center items-center h-full absolute bg-black/10">
      <div className="w-10/12 relative bg-gradient-to-t px-3 from-slate-800 to-darkMode rounded-md flex flex-col items-center">
        {/* Error */}
        {error.error ? (
          <p className="absolute text-lightMode -top-6 bg-red-400/80 p-2 rounded-md flex gap-1 items-center">
            <MdOutlineReportGmailerrorred className="text-xl" /> {error.message}
          </p>
        ) : null}
        <h3 className="text-center py-3">Nuevo pago</h3>
        <div className="flex flex-col gap-2 items-center py-2">
          <p>cantidad:</p>
          <input
            onChange={handleInputNewPay}
            className="rounded-md bg-white/5 py-1 shadow-inner shadow-black text-center"
            type="number"
            name="cantidad"
            value={newPay.cantidad}
          />
        </div>
        <div className="w-full flex flex-col items-center py-2">
          <p className="">comentario:</p>
          <textarea
            onChange={handleInputNewPay}
            className="overflow-auto resize-none w-full h-24 rounded-md shadow-inner shadow-black bg-white/5 p-1"
            name="comentario"
            value={newPay.comentario}
          />
        </div>
        {/* Buttons */}
        <div className="flex justify-center gap-2 py-2">
          <button
            onClick={() => sendNewPay(id)}
            className="py-1 px-2 bg-gradient-to-tr from-darkMode to-slate-700 rounded-md"
          >
            Aceptar
          </button>
          <button
            onClick={closeModalNewPay}
            className="py-1 px-2 bg-gradient-to-tr from-darkMode to-slate-700 rounded-md"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
