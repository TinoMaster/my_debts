import { useContext, useState } from "react";
import { responseFriendRequest } from "../../services/friend";
import { getToken } from "../../utilities/getToken";
import { getID } from "../../utilities/getId";
import AuthContext from "../../contexts/authContext";

export const useContacts = () => {
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState({});

  const token = getToken();
  const idReciever = getID();
  const { delete_friendReceives_from_array } = useContext(AuthContext);

  const responseFriendReq = (response, idRequester) => {
    setLoading(true);
    responseFriendRequest(token, idRequester, idReciever, response).then(
      (res) => {
        if (res.error) {
          setLoading(false);
          setError(res);
        } else if (res.success) {
          delete_friendReceives_from_array(res.accept, res.data.userRequester);
          setLoading(false);
          setSuccess({ success: true, message: "Respuesta enviada" });
        }
      }
    );
  };

  return { error, loading, success, responseFriendReq };
};
