import { useState } from "react";
import { register_user } from "../../services/auth";

const initialRegister = {
  name: "",
  email: "",
  password: "",
  verifyPassword: "",
};

const useRegister = () => {
  const [register, setRegister] = useState(initialRegister);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const [seePassword, setSeePassword] = useState(false);

  const handlerRegister = (e) => {
    setError({});
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const validateRegister = () => {
    if (register.name.length === 0) {
      return { error: true, message: "El campo 'nombre' es necesario" };
    }
    if (register.name.length > 0 && register.name.length <= 2) {
      return {
        error: true,
        message: "El campo nombre debe tener mas de dos caracteres",
      };
    }
    if (register.email.length === 0) {
      return { error: true, message: "El campo 'email' es necesario" };
    }
    if (register.password.length === 0) {
      return { error: true, message: "El campo 'contraseña' es necesario" };
    }
    if (register.verifyPassword !== register.password) {
      return { error: true, message: "Las contraseñas no coinciden" };
    }
    return { error: false };
  };

  const sendRegister = (e) => {
    e.preventDefault();
    setLoading(true);
    const res = validateRegister();
    if (res.error) {
      setLoading(false);
      setError(res);
      return false;
    }

    const date = new Date();
    const dataToSend = {
      ...register,
      role: "user",
      active: true,
      username: `${register.name}${date.getTime()}`,
    };

    register_user(dataToSend).then((res) => {
      if (res.error) {
        setLoading(false);
        setError(res);
      } else {
        setSuccess(true);
        setLoading(false);
        setError({});
        setTimeout(() => {
          setSuccess(false);
          window.location.href = "/";
        }, 2000);
      }
    });
  };

  return {
    register,
    error,
    loading,
    success,
    handlerRegister,
    seePassword,
    setSeePassword,
    sendRegister,
  };
};

export default useRegister;
