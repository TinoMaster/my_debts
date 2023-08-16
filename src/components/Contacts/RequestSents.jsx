import React from "react";
import { MdOutlineCancel } from "react-icons/md";

export const RequestSents = ({ requestSents }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {/* //TODO:implementar la logica para poder borrar la peticion de amistad que el usuario realizo  */}
      <h3 className="text-center">Solicitudes enviadas</h3>
      {requestSents?.map((solicitud) => (
        <div
          key={solicitud.user._id}
          className="flex w-full justify-between p-2 bg-white/5 rounded-md shadow-md"
        >
          <p className="text-lg">{solicitud.user.name}</p>
          <div className="flex gap-2">
            <button>
              <MdOutlineCancel className="text-2xl text-red-400 hover:text-red-500 transition-colors" />{" "}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
