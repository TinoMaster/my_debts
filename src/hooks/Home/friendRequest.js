import { useContext, useEffect, useState } from "react";
import { delete_friend, frien_request } from "../../services/friend";
import { getToken } from "../../utilities/getToken";
import { getID } from "../../utilities/getId";
import AuthContext from "../../contexts/authContext";
import { subscribeToEvent } from "../../services/socket.io";

export const friendRequest = () => {
  const [modalUserName, setModalUserName] = useState(false);
  const [error, setError] = useState({});
  const [success, setSuccess] = useState({});
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");

  const idRequester = getID();
  const token = getToken();
  const { delete_contact_from_array, add_friend_request_to_array, myContacts } =
    useContext(AuthContext);

  useEffect(() => {
    subscribeToEvent("friendRequest", (res) => console.log(res));

    /* return () => {
      subscribeToEvent("friendRequest", (res) => console.log(res));
    }; */
  }, []);

  const handleUserName = (e) => {
    setError({});
    setUsername(e.target.value);
  };

  const validate_username = () => {
    const isDuplicated = myContacts.contactRequestsSent.some(
      (el) => el.user.username === username
    );
    if (username.length < 13)
      return { error: true, message: "Username invalido" };
    if (isDuplicated) return { error: true, message: "Solicitud duplicada" };
    return { error: false };
  };

  const sendFriendRequest = () => {
    const validate = validate_username();
    if (!validate.error) {
      setLoading(true);
      frien_request(token, idRequester, username).then((res) => {
        if (res.error) {
          setLoading(false);
          setError(res);
        } else if (res.success) {
          setLoading(false);
          add_friend_request_to_array(res.data.userReciever);
          setSuccess({ success: true, message: "Solicitud enviada" });
          setTimeout(() => {
            setSuccess({});
            setModalUserName(false);
          }, 2000);
        }
      });
    } else setError(validate);
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
