import React from "react";
import { formaterData } from "../../utilities/formaterData";
import { FaDollarSign } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { useModalViewCard } from "../../hooks/View Collection/useModalViewCard";
import { ModalNewPay } from "./ModalNewPay";
import { BsCalendar3, BsCheckAll } from "react-icons/bs";
import { ModalViewPay } from "./ModalViewPay";
import { ModalPortal } from "../modals/modalPortal";

export const ModalViewCard = ({
  debt,
  partialPayment,
  setModalViewCard,
  refresh_debts_afterPay,
}) => {
  const {
    modalNewPay,
    openModalNewPay,
    closeModalNewPay,
    handleInputNewPay,
    newPay,
    sendNewPay,
    error,
    success,
    loading,
    modalViewPay,
    openModalViewPay,
    closeModalViewPay,
    payToView,
    deletePaid,
  } = useModalViewCard(refresh_debts_afterPay);
  return (
    <div className="w-[90%] max-w-[400px] h-[85%] flex flex-col top-5 relative bg-gradient-to-br overflow-hidden px-2 py-5 from-slate-600 to-darkMode rounded-md text-white">
      {/* Success new pay */}
      {success ? (
        <p className="absolute right-1 p-2 bg-green-400/80 rounded-md flex gap-1 items-center transition-all">
          <BsCheckAll className="text-xl" />
          Pago agregado
        </p>
      ) : null}

      {/* Modal View Pay */}
      {modalViewPay ? (
        <ModalPortal>
          <ModalViewPay
            paid={payToView}
            closeModalViewPay={closeModalViewPay}
            deletePaid={deletePaid}
          />
        </ModalPortal>
      ) : null}

      {/* title */}
      <div className="flex flex-col px-2 py-1">
        <h2 className="w-full rounded-t-md font-roboto text-2xl font-semibold">
          {debt.description}
        </h2>
        <div className="flex text-sm gap-2 items-center">
          <p className="font-roboto">coleccion:</p>
          <p className="bg-white rounded-md text-darkMode px-1">{debt.name}</p>
        </div>
      </div>
      {/* Card */}
      <div className="h-full flex flex-col relative p-2 gap-2 bg-white/10 rounded-md shadow-inner shadow-black/50">
        {/* Deuda total y resto */}
        <div className="w-full p-2 shadow-md bg-gradient-to-tr from-white/5 to-white/10 rounded-md">
          <div className="flex w-full gap-2 justify-between">
            <p>Total:</p>
            <p className="flex items-center">
              <FaDollarSign className="text-xs" /> {debt.deuda}
            </p>
          </div>
          <div className="flex w-full gap-2 justify-between">
            <p>Pagado:</p>
            <p className="flex items-center">
              <FaDollarSign className="text-xs" />
              {partialPayment}
            </p>
          </div>
          <div className="flex w-full gap-2 justify-between">
            <p>Resto:</p>
            <p className="flex items-center">
              <FaDollarSign className="text-xs" />
              {debt.deuda - partialPayment}
            </p>
          </div>
        </div>
        {/* Description and information */}
        <h3 className="w-full text-center">Info</h3>
        <div className="w-full flex flex-wrap p-2 outline-1 outline-dashed outline-slate-700 rounded-md">
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
            <p className="font-serif text-center py-1 h-10 w-full shadow-inner shadow-black/20">
              {debt?.comentario}
            </p>
          </div>
        </div>
        {/* Pagos */}
        <h3 className="w-full text-center">Pagos:</h3>
        <div className="w-full h-full max-h-52 gap-1 flex flex-col p-2 overflow-auto shadow-inner shadow-black/50 rounded-md">
          {debt?.pagos.map((el) => (
            <div
              onClick={() => openModalViewPay(el, debt._id)}
              key={el?._id}
              className="flex justify-between p-3 rounded-md text-sm shadow-md bg-white/5 hover:shadow-primary hover:cursor-pointer transition-all hover:bg-primary/5"
            >
              <p className="text-sm flex gap-1 items-center">
                <BsCalendar3 className="shadow-md text-primary bg-lightMode" />{" "}
                {formaterData(el?.fecha)}
              </p>
              <p className="text-sm flex items-center">
                <FaDollarSign /> {el?.cantidad}
              </p>
            </div>
          ))}

          <button
            onClick={openModalNewPay}
            className="absolute bottom-20 right-4 bg-gradient-to-tr from-darkMode to-slate-700 p-2 rounded-full shadow-md shadow-black/30 hover:to-slate-600"
          >
            <AiOutlinePlus />
          </button>
        </div>
        {/* Buttons */}
        <div className="w-full flex justify-center py-2">
          <button
            className="p-2 rounded-md bg-gradient-to-tr from-darkMode to-slate-700 hover:to-slate-600 transition-colors"
            onClick={() => setModalViewCard(false)}
          >
            Cerrar
          </button>
        </div>
      </div>
      {/* Modal Crear pago */}
      {modalNewPay ? (
        <ModalNewPay
          closeModalNewPay={closeModalNewPay}
          handleInputNewPay={handleInputNewPay}
          newPay={newPay}
          sendNewPay={sendNewPay}
          id={debt._id}
          error={error}
          loading={loading}
        />
      ) : null}
    </div>
  );
};
