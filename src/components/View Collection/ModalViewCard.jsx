import React from "react";
import { formaterData } from "../../utilities/formaterData";

export const ModalViewCard = ({ debt, partialPayment, setModalViewCard }) => {
  console.log(debt);

  return (
    <div className="w-[90%] max-w-[400px] h-[85%] top-5 relative bg-gradient-to-br from-darkMode to-slate-900 rounded-md text-white">
      {/* Card */}
      <div className="w-full flex flex-wrap items-start">
        {/* title */}
        <h2 className="w-full text-center py-5 shadow rounded-t-md shadow-black/50 bg-gradient-to-tr from-darkMode to-slate-950 font-roboto font-semibold text-lg">
          {debt.description}
        </h2>
        {/* Deuda total y resto */}
        <div className="w-full p-2 shadow-md bg-gradient-to-tr from-white/5 to-white/10 m-2 rounded-md">
          <div className="flex w-full gap-2 justify-between">
            <p>Total:</p>
            <p>{debt.deuda}</p>
          </div>
          <div className="flex w-full gap-2 justify-between">
            <p>Pagado:</p>
            <p>{partialPayment}</p>
          </div>
          <div className="flex w-full gap-2 justify-between">
            <p>Resto:</p>
            <p>{debt.deuda - partialPayment}</p>
          </div>
        </div>
        {/* Description and information */}
        <h3 className="w-full text-center">Info</h3>
        <div className="w-full flex flex-wrap p-2 m-2 outline-1 outline-dashed outline-slate-700 rounded-md">
          {/* fecha */}
          <div className="w-1/2 flex gap-1 p-1 justify-center items-center">
            <p className="font-semibold">Fecha:</p>
            <p className="text-sm font-serif">{formaterData(debt.fecha)}</p>
          </div>
          {/* creada por */}
          <div className="w-1/2 flex gap-1 p-1 justify-center items-center">
            <p className="font-semibold">Creador:</p>
            <p className="font-serif">{debt.creador.name}</p>
          </div>
          {/* acreedor */}
          <div className="w-1/2 flex gap-1 p-1 justify-center items-center">
            <p className="font-semibold">Acreedor:</p>
            <p className="font-serif">{debt.acreedor.name}</p>
          </div>
          {/* deudor */}
          <div className="w-1/2 flex gap-1 p-1 justify-center items-center">
            <p className="font-semibold">Deudor:</p>
            <p className="font-serif">{debt.deudor.name}</p>
          </div>
          {/* comentario */}
          <div className="w-full flex flex-col gap-1 p-1 justify-center items-center">
            <p className="font-semibold">Comentario:</p>
            <p className="font-serif text-center shadow-inner shadow-black py-1">
              {debt.comentario}
            </p>
          </div>
        </div>
        {/* Pagos */}
        <h3 className="w-full text-center">Pagos:</h3>
        <div className="w-full flex flex-col p-2 m-2">
          {debt.pagos.map((el) => (
            <div key={el._id} className="flex justify-between p-2 rounded-md shadow bg-white/5 overflow-hidden">
              <div className="flex w-1/3 gap-1 items-center">
                <p>pago:</p>
                <p className="text-sm">{el.cantidad}</p>
              </div>
              <div className="flex w-1/3 gap-1 items-center">
                <p>fecha:</p>
                <p className="text-sm">{formaterData(el.fecha)}</p>
              </div>
              <div className="flex w-1/3 gap-1 items-center overflow-hidden">
                <p>coment:</p>
                <p className="text-sm">"Esto ..."</p>
              </div>
            </div>
          ))}
        </div>
        {/* Buttons */}
        <div className="w-full flex justify-center">
          <button
            className="p-2 rounded-md bg-red-400"
            onClick={() => setModalViewCard(false)}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
