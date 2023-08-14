import React from "react";
import { PrincipalLoader } from "../loaders/principalLoader";

export const Modal_friendRequest = ({
  error,
  setModalUserName,
  darkMode,
  handleUserName,
  username,
  sendFriendRequest,
  success,
  loading,
}) => {
  return (
    <div
      className={`bg-gradient-to-tr flex flex-col justify-center items-center ${
        darkMode
          ? "from-darkMode to-slate-900 text-lightMode"
          : "from-lightMode to-slate-200 text-darkMode"
      } p-10 rounded-md relative`}
    >
      {loading ? (
        <div className="absolute bg-black/50 w-full h-full flex justify-center items-center">
          <PrincipalLoader />
        </div>
      ) : null}
      {error?.error ? (
        <div className="absolute top-0">
          <p className="text-red-300 text-sm p-2 w-full">{error.message}</p>
        </div>
      ) : null}
      {success?.success ? (
        <div className="absolute top-0">
          <p className="text-green-300 text-sm p-2 w-full">{success.message}</p>
        </div>
      ) : null}
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-lg font-semibold w-full text-center">
          Nuevo contacto
        </h2>
        <h4 className="">Introduzca el username</h4>
        <input
          onChange={handleUserName}
          value={username}
          name="username"
          type="text"
          className="shadow-inner shadow-black/30 p-2 text-darkMode font-medium rounded-md my-2 focus:outline-none"
        />
      </div>
      <div className="flex justify-center py-2">
        <button
          onClick={sendFriendRequest}
          className="p-2 mx-2 bg-black/30 rounded-md shadow"
        >
          Aceptar
        </button>
        <button
          onClick={() => setModalUserName(false)}
          className="p-2 mx-2 bg-black/30 rounded-md shadow"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};
