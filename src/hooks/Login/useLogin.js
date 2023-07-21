import { useState } from "react";
import { urls } from "../../utilities/urls";
import { httpHelper } from "../../utilities/httpHelper";
import { login_user } from "../../services/login";

const initialRegister = {
  email: "",
  password: "",
};

const TOKEN = "TOKEN";
const USER_NAME = "USER_NAME";
const NAME = "NAME";
const ROLE = "ROLE";
const ID_USER = "ID_USER";
const SESSION = "SESSION";

const useLogin = () => {
  const [login, setLogin] = useState(initialRegister);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const [seePassword, setSeePassword] = useState(false);

  const handlerLogin = (e) => {
    setError({});
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const validateLogin = () => {
    if (login.email.length === 0) {
      return { error: true, message: "El campo 'email' es necesario" };
    }
    if (login.password.length === 0) {
      return { error: true, message: "El campo 'contraseña' es necesario" };
    }
    return { error: false };
  };

  const saveLoginLocalStore = (token, user) => {
    localStorage.setItem(TOKEN, JSON.stringify(token));
    localStorage.setItem(USER_NAME, JSON.stringify(user.username));
    localStorage.setItem(ID_USER, JSON.stringify(user._id));
    localStorage.setItem(NAME, JSON.stringify(user.name));
    localStorage.setItem(ROLE, JSON.stringify(user.role));
    localStorage.setItem(SESSION, true);
  };

  const sendLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    const res = validateLogin();
    if (res.error) {
      setLoading(false);
      setError(res);
      return false;
    }

    login_user(login)
      .then((res) => {
        if (res.error) {
          setLoading(false);
          setError(res);
        } else if (res.success) {
          saveLoginLocalStore(res.data.token, res.data.user[0]);
          setSuccess(true);
          setLoading(false);
          setError({});
          setTimeout(() => {
            setSuccess(false);
            window.location.href = "/";
          }, 2000);
        } else {
          setLoading(false);
          setError({ error: true, message: "Error Inesperado" });
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return {
    loading,
    error,
    success,
    login,
    handlerLogin,
    sendLogin,
    seePassword,
    setSeePassword,
  };
};

export default useLogin;
