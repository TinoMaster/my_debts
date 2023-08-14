import React from "react";
import { cutName } from "../../utilities/cutName";
import { friendRequest } from "../../hooks/Home/friendRequest";
import { ModalPortal } from "../modals/modalPortal";
import { Modal_friendRequest } from "./Modal_friendRequest";

export const Friends = ({ users = [], darkMode }) => {
  const {
    error,
    loading,
    handleUserName,
    modalUserName,
    setModalUserName,
    success,
    username,
    sendFriendRequest,
  } = friendRequest();
  return (
    <div className="flex flex-wrap gap-3">
      {/* Modal */}
      {modalUserName ? (
        <ModalPortal>
          <Modal_friendRequest
            error={error}
            setModalUserName={setModalUserName}
            darkMode={darkMode}
            handleUserName={handleUserName}
            username={username}
            sendFriendRequest={sendFriendRequest}
            success={success}
            loading={loading}
          />
        </ModalPortal>
      ) : null}
      {/* Component */}
      <h3 className="w-full">Contactos</h3>
      <div className="min-w-11/12 overflow-auto flex rounded-md scroll-auto scroll-pe-0 snap-mandatory">
        <div className="flex gap-3">
          {users.map((user) => (
            <div
              key={user.friend._id}
              className="w-14 h-14 bg-white/10 shadow-md rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-primary/30 transition-colors"
            >
              <h3>{cutName(user.friend.name)}</h3>
            </div>
          ))}
        </div>
      </div>
      {/* Crear nuevo user */}
      <div className="flex">
        <div
          onClick={() => setModalUserName(true)}
          className="w-14 h-14 relative bg-gradient-to-tr from-slate-900/40 to-primary/40 shadow-lg shadow-primary/30 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-primary/50 hover:shadow-primary/40 transition-colors"
        >
          <h3 className="text-2xl">+</h3>
          <p className="absolute text-xs bottom-0">Nuevo</p>
        </div>
      </div>
    </div>
  );
};
