import React from "react";
import { cutName } from "../../utilities/cutName";
import { friendRequest } from "../../hooks/Home/friendRequest";
import { ModalPortal } from "../modals/modalPortal";
import { Modal_friendRequest } from "./Modal_friendRequest";
import { ContactsLoading } from "../loaders/contactsLoader";
import { FaUserPlus } from "react-icons/fa";

export const Friends = ({ users = [], darkMode, loadingAuth }) => {
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
    <div
      className={`flex flex-wrap items-center rounded-md bg-gradient-to-tr from-primary/70  ${
        darkMode ? "to-slate-700" : "to-slate-400/70"
      } shadow-md py-2`}
    >
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
      <h3 className="w-full text-sm text-lightMode pl-2">Contactos</h3>
      <div className="flex w-full  rounded-md px-2">
        {loadingAuth ? (
          <div className="mr-4">
            <ContactsLoading />
          </div>
        ) : (
          <div className="min-w-11/12 overflow-auto flex rounded-l-md scroll-auto scroll-pe-0 snap-mandatory bg-whit p-2">
            <div className="flex gap-3">
              {users.length > 0
                ? users.map((user) => (
                    <div
                      key={user.friend._id}
                      className={`w-12 h-12 bg-white/90 text-slate-600 shadow-md rounded-full flex justify-center items-center hover:cursor-pointer ${
                        darkMode
                          ? "hover:shadow-white/30"
                          : "hover:shadow-white/30"
                      }  transition-shadow`}
                    >
                      <h3>{cutName(user.friend?.name)}</h3>
                    </div>
                  ))
                : null}
            </div>
          </div>
        )}

        {/* Crear nuevo user */}
        <div className="flex rounded-r-md items-center">
          <div
            onClick={() => setModalUserName(true)}
            className="w-12 h-12 text-white relative shadow-md shadow-black/20 bg-gradient-to-tr from-primary to-slate-400 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-primary/50 hover:shadow-primary/40 transition-colors"
          >
            <h3 className="text-xl">
              <FaUserPlus />
            </h3>
            {/* <p className="absolute text-xs bottom-0">Nuevo</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
