import React from "react";

export const ModalViewCard = ({ debt, partialPayment }) => {
  return (
    <div className="w-[90%] max-w-[400px] h-[85%] top-5 relative bg-gradient-to-br from-darkMode to-slate-900 rounded-md text-white">
      {/* Card */}
      <div className="w-full flex flex-wrap items-start py-2 px-6 text-sm">
        {/* title */}
        <h2 className="w-full text-center py-2 font-roboto font-semibold text-lg">
          {debt.description}
        </h2>
        {/* Deuda total */}
        <div className="flex w-full gap-2 font-roboto justify-between">
          <p>Total:</p>
          <p>{debt.deuda}</p>
        </div>
        <div className="flex w-full gap-2 font-roboto justify-between">
          <p>Pagado:</p>
          <p>{partialPayment}</p>
        </div>
        <div className="flex w-full gap-2 font-roboto justify-between">
          <p>Resto:</p>
          <p>{debt.deuda - partialPayment}</p>
        </div>
      </div>
    </div>
  );
};
