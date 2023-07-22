import React from "react";

export const DebtorOrCreditor = () => {
  return (
    <div className="w-full flex flex-wrap">
      <h4 className="w-full text-center font-serif">
        {/*  {tipoDeuda === "deudor" ? "Acreedores" : "Deudores"} */}
      </h4>
      <select
        name=""
        id=""
        className="w-full text-center rounded-md bg-black/20"
      >
        <option value="" className="bg-primary hover:bg-black"></option>
      </select>
      <h4 className="font-serif">Otro:</h4>
      <input
        type="text"
        /* disabled={tipoDeuda === "" ? true : false} */
        className="w-full p-1 shadow-inner shadow-black/30 text-darkMode font-medium rounded-md focus:outline-none"
      />
    </div>
  );
};
