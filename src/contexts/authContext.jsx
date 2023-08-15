import { createContext, useEffect, useState } from "react";
import { getToken } from "../utilities/getToken";
import { isLogin } from "../services/login";
import { my_contacts } from "../services/friend";
import { getID } from "../utilities/getId";

const AuthContext = createContext(null);

const TOKEN = "TOKEN";
const USER_NAME = "USER_NAME";
const NAME = "NAME";
const ROLE = "ROLE";
const ID_USER = "ID_USER";
const SESSION = "SESSION";

const initialUser = {
  name: JSON.parse(localStorage.getItem(NAME)) || "",
  username: JSON.parse(localStorage.getItem(USER_NAME)) || "",
  role: JSON.parse(localStorage.getItem(ROLE)) || "",
  _id: JSON.parse(localStorage.getItem(ID_USER)) || "",
  token: JSON.parse(localStorage.getItem(TOKEN)) || "",
};
const initialContacts = {
  contacts: [],
  contactRequestsRecieved: [],
  contactRequestsSent: [],
};
const sessionStorage = localStorage.getItem(SESSION) || false;

export const AuthProvider = ({ children }) => {
  const [dataConnected, setDataConnected] = useState(false);
  const [session, setSession] = useState(sessionStorage);
  const [user, setUser] = useState(initialUser);
  const [myContacts, setMyContacts] = useState(initialContacts);
  const [loadingAuth, setLoadingAuth] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (token?.length === 0) {
      setDataConnected(true);
    } else {
      setLoadingAuth(true);
      isLogin(token).then((res) => {
        if (res.error) {
          setLoadingAuth(false);
          setDataConnected(true);
        } else if (res.success) {
          setLoadingAuth(false);
          const id = getID();
          setDataConnected(true);
          setSession(true);
          my_contacts(token, id).then((res) => setMyContacts(res.data));
        }
      });
    }
  }, []);

  const delete_contact_from_array = (idFriend) => {
    const contactsUpdate = myContacts.contacts.filter(
      (friend) => friend.friend._id.toString() !== idFriend
    );
    setMyContacts({ ...myContacts, contacts: contactsUpdate });
  };
  const delete_friendRequest_from_array = (idFriend) => {
    console.log(idFriend, myContacts);
    const contactRequestsRecievedUpdate =
      myContacts.contactRequestsReceived.filter(
        (user) => user.user._id !== idFriend
      );
    setMyContacts({
      ...myContacts,
      contactRequestsReceived: contactRequestsRecievedUpdate,
    });
  };
  const add_friend_request_to_array = (user) => {
    const userUpdate = {
      _id: user._id,
      name: user.name,
      username: user.username,
    };
    setMyContacts({
      ...myContacts,
      contactRequestsSent: [
        ...myContacts.contactRequestsSent,
        { user: userUpdate },
      ],
    });
  };

  const closeSession = () => {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER_NAME);
    window.localStorage.removeItem(NAME);
    window.localStorage.removeItem(ROLE);
    window.localStorage.removeItem(ID_USER);
    window.localStorage.removeItem(SESSION);
    setUser(initialUser);
    window.location.href = "/";
  };

  const data = {
    user,
    session,
    dataConnected,
    closeSession,
    myContacts,
    delete_contact_from_array,
    add_friend_request_to_array,
    delete_friendRequest_from_array,
    loadingAuth,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContext;
