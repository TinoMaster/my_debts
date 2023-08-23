import React from "react";

export const Modal_ErrorCreateCol = ({ setModalErrorCreateCol, darkMode }) => {
  return (
    <div
      className={`bg-gradient-to-tr ${
        darkMode ? "from-darkMode to-slate-900" : "from-lightMode to-slate-200"
      } ${
        darkMode ? "text-lightMode" : "text-darkMode"
      } w-full mx-2 px-2 py-4 rounded-md max-w-[400px] shadow-xl`}
    >
      {/* Encabezado */}
      <h2 className="w-full text-center">
        Debes tener al menos un contacto para crear una nueva coleccion
      </h2>

      <div className="flex justify-center py-2 mt-5">
        <button
          onClick={() => setModalErrorCreateCol(false)}
          className="p-2 bg-green-500/30 rounded-md shadow"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};
