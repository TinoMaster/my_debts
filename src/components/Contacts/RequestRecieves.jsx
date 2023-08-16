import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";

export const RequestRecieves = ({
  requestRecieves = [],
  responseFriendReq,
}) => {
  const positive = true;
  const negative = false;
  return (
    <div className="flex flex-col gap-2 w-full">
      <h3 className="text-center">Solicitudes recibidas</h3> {/* "BUG: Hola" */}
      {requestRecieves?.map((solicitud) => (
        <div
          key={solicitud.user._id}
          className="flex w-full justify-between p-2 bg-white/5 rounded-md shadow-md"
        >
          <p className="text-lg">{solicitud.user.name}</p>
          <div className="flex gap-2">
            <button
              onClick={() => responseFriendReq(positive, solicitud.user._id)}
            >
              <AiOutlineCheckCircle className="text-2xl text-green-400 hover:text-green-500 transition-colors" />{" "}
            </button>
            <button
              onClick={() => responseFriendReq(negative, solicitud.user._id)}
            >
              <MdOutlineCancel className="text-2xl text-red-400 hover:text-red-500 transition-colors" />{" "}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
