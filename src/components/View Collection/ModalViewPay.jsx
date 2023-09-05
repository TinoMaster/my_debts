import React from "react";
import { formaterData } from "../../utilities/formaterData";
import { BsCalendar3 } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";

export const ModalViewPay = ({ paid, closeModalViewPay }) => {
  return (
    <div className="absolute w-full h-full flex justify-center items-center">
      <div className="w-80 bg-gradient-to-tr from-slate-600 to-darkMode text-white flex p-2 flex-col rounded-md shadow-lg shadow-black/50">
        <div className="flex justify-between p-2">
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 items-center">
              <BsCalendar3 className="text-2xl text-primary" />{" "}
              <p className="text-xl text-primary">Fecha</p>
            </div>
            <p className="items-center text-center py-1 bg-white/5 shadow-md px-2 rounded shadow-black/20 font-roboto text-xs">
              {formaterData(paid?.fecha)}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center">
              <FaDollarSign className="text-2xl text-primary" />{" "}
              <p className="text-xl text-primary">Pago</p>
            </div>
            <p className="items-center text-center py-1 bg-white/5 shadow-md px-2 rounded shadow-black/20 font-roboto text-xs">
              {paid?.cantidad}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center p-2">
          <p className="font-roboto text-xl text-primary">Comentario:</p>
          <div className="w-full flex justify-center p-1 min-h-[80px] shadow-inner shadow-black/20 rounded-md">
            <p className="text-sm font-roboto">{`"${paid?.comentario}"`}</p>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex justify-center gap-2 py-2">
          <button
            onClick={closeModalViewPay}
            className="px-2 py-1 shadow-md rounded-md bg-primary/50"
          >
            Cerrar
          </button>
          <button className="px-2 py-1 shadow-md rounded-md bg-red-500/50">Eliminar</button>
        </div>
      </div>
    </div>
  );
};
