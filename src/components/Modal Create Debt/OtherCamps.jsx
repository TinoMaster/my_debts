import React from "react";
import { DebtorOrCreditor } from "./DebtorOrCreditor";
import { BsFillCheckCircleFill } from "react-icons/bs";

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
  refContactInput,
  isNew,
  nameOfContact,
}) => {
  return (
    <div className="w-full flex flex-wrap justify-between gap-2">
      {/* Subtitulo */}
      <div className="w-full flex flex-wrap">
        <h4 className="w-full font-bold pl-2">Titulo</h4>
        <input
          value={newDebt.description}
          onChange={handlerInputNewDebt}
          name="description"
          type="text"
          className={`w-full p-2 shadow-inner shadow-black/30 ${
            darkMode ? "bg-white/5 border border-secondary/30" : "bg-white"
          } font-medium rounded-md focus:outline-none`}
        />
      </div>
      {/* Cantidad */}
      <div className="w-full flex flex-wrap">
        <h4 className="w-full pl-2 font-bold">Cantidad Total</h4>
        <input
          value={newDebt.deuda}
          onChange={handlerInputNewDebt}
          name="deuda"
          type="number"
          className={`w-full p-2 shadow-inner shadow-black/30 ${
            darkMode ? "bg-white/5 border border-secondary/30" : "bg-white"
          } font-medium rounded-md focus:outline-none`}
        />
      </div>
      {/* Pago Parcial */}
      <div className="w-9/12 flex flex-wrap">
        <h4 className="w-full pl-2 font-bold">Pago Parcial</h4>
        <input
          onChange={handlerPartialPaid}
          name="cantidad"
          type="number"
          disabled={newDebt.pagada.isDone ? true : false}
          value={pagoParcial}
          className={`w-full p-2 shadow-inner shadow-black/30 ${
            darkMode ? "bg-white/5 border border-secondary/30" : "bg-white"
          } font-medium rounded-md focus:outline-none`}
        />
      </div>
      {/* Pagada */}
      <div className="w-2/12 flex flex-wrap justify-center">
        <h4 className="w-full text-center font-bold">Pagada</h4>
        <input
          type="checkbox"
          id="paid"
          onChange={handlerIsPaid}
          className="input-checkboxPaid hidden"
        />
        <label htmlFor="paid" className="">
          <BsFillCheckCircleFill className="text-xl" />{" "}
        </label>
      </div>
      <div
        className={`w-full ${
          pagoParcial > 0 && !newDebt.pagada.isDone ? "" : "hidden"
        }`}
      >
        <h3 className="w-full text-xs pl-2 pb-1">
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
        refContactInput={refContactInput}
        isNew={isNew}
        nameOfContact={nameOfContact}
      />
      {/* Comentarios */}
      <div className="w-full flex flex-wrap">
        <h4 className="w-full pl-2 font-bold">Comentario</h4>
        <textarea
          onChange={handlerInputNewDebt}
          name="comentario"
          value={newDebt.comentario}
          className={`w-full h-14 resize-none p-1 shadow-inner shadow-black/30 ${
            darkMode ? "bg-white/5 border border-secondary/30" : "bg-white"
          } font-medium rounded-md focus:outline-none`}
        />
      </div>
    </div>
  );
};
