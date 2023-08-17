import { useContext, useState } from "react";
import {
  deleteFriendRequest,
  responseFriendRequest,
} from "../../services/friend";
import { getToken } from "../../utilities/getToken";
import { getID } from "../../utilities/getId";
import AuthContext from "../../contexts/authContext";

export const useContacts = () => {
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState({});

  const token = getToken();
  const myId = getID();
  const { delete_friendReceives_from_array, delete_friendRequest_from_array } =
    useContext(AuthContext);

  const responseFriendReq = (response, idRequester) => {
    setLoading(true);
    responseFriendRequest(token, idRequester, myId, response).then((res) => {
      if (res.error) {
        setLoading(false);
        setError(res);
      } else if (res.success) {
        delete_friendReceives_from_array(res.accept, res.data.userRequester);
        setLoading(false);
        setSuccess({ success: true, message: "Respuesta enviada" });
      }
    });
  };

  const deleteFriendReq = (idReciever) => {
    setLoading(true);
    deleteFriendRequest(token, myId, idReciever).then((res) => {
      if (res.error) {
        setLoading(false);
        setError(res);
      } else if (res.success) {
        delete_friendRequest_from_array(idReciever);
        setLoading(false);
        setSuccess({ success: true, message: "Solicitud eliminada" });
      }
    });
  };

  return { error, loading, success, responseFriendReq, deleteFriendReq };
};
