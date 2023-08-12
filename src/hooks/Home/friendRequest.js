import { useState } from "react";
import { frien_request } from "../../services/friend";

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
      const idRequester = window.localStorage.getItem("ID_USER");
      setLoading(true);
      frien_request(idRequester, username).then((res) => {
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
