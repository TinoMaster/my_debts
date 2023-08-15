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
  const { delete_friendRequest_from_array } = useContext(AuthContext);

  const responseFriendReq = (response, idRequester) => {
    setLoading(true);
    responseFriendRequest(token, idRequester, idReciever, response).then(
      (res) => {
        if (res.error) {
          setLoading(false);
          setError(res);
        } else if (res.success) {
          console.log(res);
          delete_friendRequest_from_array(idRequester);
          setLoading(false);
          setSuccess({ success: true, message: "Amistad aceptada" });
        }
      }
    );
  };

  return { error, loading, success, responseFriendReq };
};
