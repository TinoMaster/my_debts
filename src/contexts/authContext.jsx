import { createContext, useEffect, useState } from "react";
import { httpHelper } from "../utilities/httpHelper";
import { urls } from "../utilities/urls";
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
const sessionStorage = localStorage.getItem(SESSION) || false;

export const AuthProvider = ({ children }) => {
  const [dataConnected, setDataConnected] = useState(false);
  const [session, setSession] = useState(sessionStorage);
  const [user, setUser] = useState(initialUser);
  const [myContacts, setMyContacts] = useState({});

  useEffect(() => {
    const token = getToken();
    if (token?.length === 0) {
      setDataConnected(true);
    } else {
      isLogin(token).then((res) => {
        if (res.error) {
          console.log(res);
          setDataConnected(true);
        } else if (res.success) {
          const id = getID();
          setDataConnected(true);
          setSession(true);
          my_contacts(token, id).then((res) => setMyContacts(res.data));
        }
      });
    }
  }, []);

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

  const data = { user, session, dataConnected, closeSession, myContacts };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContext;
