import React from "react";

export const DebtType = ({ handlerDebtType }) => {
  return (
    <div className="flex flex-wrap justify-center p-2  my-5">
      <h3 className="w-full text-center pb-2">Escoge el tipo de deuda</h3>
      <input
        onChange={handlerDebtType}
        type="radio"
        name="debtTipe"
        id="deudor"
        value="deudor"
        className="hidden"
      />
      <label
        htmlFor="deudor"
        className="p-2 bg-black/20 w-20 text-center rounded-md text-sm mr-2 hover:bg-black/30 hover:cursor-pointer"
      >
        Deudor
      </label>
      <input
        onChange={handlerDebtType}
        type="radio"
        name="debtTipe"
        id="acreedor"
        value="acreedor"
        className="hidden"
      />
      <label
        htmlFor="acreedor"
        className="p-2 bg-black/20 w-20 text-center rounded-md text-sm ml-2 hover:bg-black/30 hover:cursor-pointer"
      >
        Acreedor
      </label>
    </div>
  );
};
