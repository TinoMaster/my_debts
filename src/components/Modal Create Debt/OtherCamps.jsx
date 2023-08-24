import React from "react";
import { DebtorOrCreditor } from "./DebtorOrCreditor";

export const OtherCamps = ({
  newDebt,
  handlerInputNewDebt,
  handlerIsPaid,
  friends,
  darkMode,
  handlerPartialPaid,
  pagoParcial,
  handlerCommentPartialPaid,
  commentPagoParcial,
}) => {
  return (
    <div className="w-full flex flex-wrap justify-between gap-5">
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
          onChange={handlerPartialPaid}
          name="cantidad"
          type="number"
          disabled={newDebt.pagada.isDone ? true : false}
          value={pagoParcial}
          className="w-full p-1 shadow-inner shadow-black/30 text-darkMode font-medium rounded-md focus:outline-none"
        />
      </div>
      <div
        className={`w-full p-2 ${
          pagoParcial > 0 && !newDebt.pagada.isDone ? "" : "hidden"
        }`}
      >
        <h3 className="w-full text-xs text-center pb-1">
          Desea agregar un comentario del pago parcial
        </h3>
        <textarea
          onChange={handlerCommentPartialPaid}
          className="w-full rounded-md h-14 resize-none text-black"
          value={commentPagoParcial}
          name="comentario"
          id=""
          cols="10"
          rows="5"
        />
      </div>
      {/* Deudores/acreedores */}
      <DebtorOrCreditor
        friends={friends}
        newDebt={newDebt}
        darkMode={darkMode}
        handlerInputNewDebt={handlerInputNewDebt}
      />
      {/* Comentarios */}
      <div className="w-full flex flex-wrap">
        <h4 className="w-full text-center font-serif">Comentario</h4>
        <textarea
          onChange={handlerInputNewDebt}
          name="comentario"
          value={newDebt.comentario}
          className="w-full h-14 resize-none p-1 shadow-inner shadow-black/30 text-darkMode font-medium rounded-md focus:outline-none"
        />
      </div>
    </div>
  );
};
