import { useContext, useState } from "react";
import { delete_friend, frien_request } from "../../services/friend";
import { getToken } from "../../utilities/getToken";
import { getID } from "../../utilities/getId";
import AuthContext from "../../contexts/authContext";

export const friendRequest = () => {
  const [modalUserName, setModalUserName] = useState(false);
  const [error, setError] = useState({});
  const [success, setSuccess] = useState({});
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");

  const idRequester = getID();
  const token = getToken();
  const { delete_contact_from_array, add_friend_request_to_array } =
    useContext(AuthContext);

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
      setLoading(true);
      frien_request(token, idRequester, username).then((res) => {
        if (res.error) {
          setLoading(false);
          setError(res);
        } else if (res.success) {
          setLoading(false);
          add_friend_request_to_array(res.data.userReciever);
          setSuccess({ success: true, message: "Peticion enviada" });
          setTimeout(() => {
            setSuccess({});
            setModalUserName(false);
          }, 1000);
        }
      });
    } else setError({ error: true, message: "username incorrecto" });
  };

  const deleteFriend = (idFriend) => {
    setLoading(true);
    delete_friend(token, idRequester, idFriend).then((res) => {
      if (res.error) {
        setLoading(false);
        setError(res);
      } else if (res.success) {
        setLoading(false);
        delete_contact_from_array(idFriend);
      }
    });
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
    deleteFriend,
  };
};
