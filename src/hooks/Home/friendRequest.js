import { useState } from "react";
import { frien_request } from "../../services/friend";
import { getToken } from "../../utilities/getToken";
import { getID } from "../../utilities/getId";

export const friendRequest = () => {
  const [modalUserName, setModalUserName] = useState(false);
  const [error, setError] = useState({});
  const [success, setSuccess] = useState({});
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");

  const handleUserName = (e) => {
    setError({});
    setUsername(e.target.value);
  };

  const validate_username = () => {
    if (username.length < 13) return false;
    return true;
  };

  const sendFriendRequest = () => {
    const validate = validate_username();
    if (validate) {
      const idRequester = getID();
      const token = getToken();
      setLoading(true);
      frien_request(token, idRequester, username).then((res) => {
        if (res.error) {
          setLoading(false);
          setError(res);
        } else if (res.success) {
          setLoading(false);
          setSuccess({ success: true, message: "Peticion enviada" });
          setTimeout(() => {
            setSuccess({});
            setModalUserName(false);
          }, 1000);
        }
      });
    } else setError({ error: true, message: "username incorrecto" });
  };

  return {
    success,
    error,
    loading,
    modalUserName,
    handleUserName,
    setModalUserName,
    username,
    sendFriendRequest,
  };
};
