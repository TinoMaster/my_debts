import React, { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import { RequestSents } from "../../components/Contacts/RequestSents";
import { RequestRecieves } from "../../components/Contacts/RequestRecieves";
import { useContacts } from "../../hooks/Contacts/useContacts";

export const Contacts = () => {
  const { myContacts } = useContext(AuthContext);
  const { error, loading, success, responseFriendReq, deleteFriendReq } =
    useContacts();

  return (
    <div className="flex w-full justify-center items-center">
      {myContacts?.contactRequestsReceived?.length === 0 &&
      myContacts?.contactRequestsSent?.length === 0 ? (
        <div>No tienes notificaciones disponibles</div>
      ) : (
        <div className="w-full flex flex-col gap-5 justify-center">
          {myContacts?.contactRequestsReceived?.length > 0 ? (
            <RequestRecieves
              requestRecieves={myContacts.contactRequestsReceived}
              responseFriendReq={responseFriendReq}
            />
          ) : null}
          {myContacts?.contactRequestsSent?.length > 0 ? (
            <RequestSents
              requestSents={myContacts.contactRequestsSent}
              deleteFriendReq={deleteFriendReq}
            />
          ) : null}
        </div>
      )}
    </div>
  );
};
