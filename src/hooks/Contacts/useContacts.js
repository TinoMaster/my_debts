import { useState } from "react";
import { responseFriendRequest } from "../../services/friend";
import { getToken } from "../../utilities/getToken";
import { getID } from "../../utilities/getId";

export const useContacts = () => {
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState({});

  const token = getToken();
  const idReciever = getID();

  const responseFriendReq = (response, idRequester) => {
    setLoading(true);
    responseFriendRequest(token, idRequester, idReciever, response).then(
      (res) => {
        if (res.error) {
          setLoading(false);
          setError(res);
        } else if (res.success) {
          setLoading(false);
          setSuccess({ success: true, message: "Amistad aceptada" });
        }
      }
    );
  };

  return { error, loading, success, responseFriendReq };
};
