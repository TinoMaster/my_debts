import React from "react";

export const DebtType = ({
  handlerDebtType,
  refTypeDebt1,
  refTypeDebt2,
  darkMode,
  contact,
}) => {
  console.log(contact);
  return (
    <div className="flex flex-wrap justify-between gap-2 w-full pb-4">
      <h3 className="w-full pb- pl-2 font-bold">Escoge el tipo de deuda</h3>
      <input
        onChange={(e) => handlerDebtType(e, contact)}
        ref={refTypeDebt1}
        type="radio"
        name="debtTipe"
        id="deudor"
        value="deudor"
        className="input-DebtType hidden"
      />
      <label
        htmlFor="deudor"
        className={`p-2 ${
          darkMode ? "bg-white/10" : "bg-black/20"
        } w-5/12 text-center shadow-md rounded-md text-sm hover:bg-black/30 hover:cursor-pointer transition-colors`}
      >
        Deudor
      </label>
      <input
        onChange={(e) => handlerDebtType(e, contact)}
        ref={refTypeDebt2}
        type="radio"
        name="debtTipe"
        id="acreedor"
        value="acreedor"
        className="input-DebtType hidden"
      />
      <label
        htmlFor="acreedor"
        className={`p-2 ${
          darkMode ? "bg-white/10" : "bg-black/20"
        } w-5/12 text-center shadow-md rounded-md text-sm hover:bg-black/30 hover:cursor-pointer transition-colors`}
      >
        Acreedor
      </label>
    </div>
  );
};
