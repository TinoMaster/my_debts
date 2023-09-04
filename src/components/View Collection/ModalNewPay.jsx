import React from "react";

export const ModalNewPay = (props) => {
  const { closeModalNewPay } = props;
  return (
    <div className="w-full flex justify-center items-center h-full absolute bg-black/10">
      <div className="w-10/12 bg-gradient-to-t px-3 from-slate-800 to-darkMode rounded-md flex flex-col">
        <h3 className="text-center py-3">Nuevo pago</h3>
        <div className="flex flex-col gap-2 items-center py-2">
          <p>cantidad:</p>
          <input
            className="rounded-md bg-white/5 py-1 shadow-inner shadow-black text-center"
            type="number"
            name=""
            id=""
          />
        </div>
        <div className="w-full flex flex-col items-center py-2">
          <p className="">comentario:</p>
          <textarea
            className="overflow-auto w-full h-24 rounded-md shadow-inner shadow-black bg-white/5 p-1"
            name=""
            id=""
            cols="30"
            rows="10"
          />
        </div>
        {/* Buttons */}
        <div className="flex justify-center gap-2 py-2">
          <button className="py-1 px-2 bg-gradient-to-tr from-darkMode to-slate-700 rounded-md">
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
