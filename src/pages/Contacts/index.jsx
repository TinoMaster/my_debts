import React, { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";

const contacts = [
  {
    name: "Oscar",
  },
  {
    name: "Javier",
  },
  {
    name: "Marcos",
  },
];

export const Contacts = () => {
  const { myContacts } = useContext(AuthContext);

  console.log(myContacts?.contactRequestsReceived?.length);

  return (
    <div className="flex w-full justify-center items-center">
      {myContacts?.contactRequestsReceived?.length === 0 &&
      myContacts?.contactRequestsSent?.length === 0 ? (
        <div>No tiene solicitudes de contacto</div>
      ) : (
        <div className="w-full flex flex-col gap-5 justify-center">
          {myContacts?.contactRequestsReceived?.length === 0 ? (
            <div className="flex flex-col gap-2 w-full">
              <h3 className="text-center">Solicitudes recibidas</h3>
              {myContacts?.contactRequestsReceived?.map((solicitud) => (
                <div className="flex w-full justify-between p-2 bg-white/5 rounded-md shadow-md">
                  <p className="text-lg">{solicitud.name}</p>
                  <div className="flex gap-2">
                    <button>
                      <AiOutlineCheckCircle className="text-2xl text-green-400 hover:text-green-500 transition-colors" />{" "}
                    </button>
                    <button>
                      <MdOutlineCancel className="text-2xl text-red-400 hover:text-red-500 transition-colors" />{" "}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
          {myContacts?.contactRequestsReceived?.length === 0 ? (
            <div className="flex flex-col gap-2 w-full">
              <h3 className="text-center">Solicitudes enviadas</h3>
              {myContacts?.contactRequestsReceived?.map((solicitud) => (
                <div className="flex w-full justify-between p-2 bg-white/5 rounded-md shadow-md">
                  <p className="text-lg">{solicitud.name}</p>
                  <div className="flex gap-2">
                    <button>
                      <MdOutlineCancel className="text-2xl text-red-400 hover:text-red-500 transition-colors" />{" "}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};
