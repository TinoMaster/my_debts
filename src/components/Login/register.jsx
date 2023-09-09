import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaKey,
  FaLock,
  FaUser,
} from "react-icons/fa";
import { PiSealWarning } from "react-icons/pi";
import useRegister from "../../hooks/Login/useRegister";
import { PrincipalLoader } from "../loaders/principalLoader";
import { Logo } from "./Logo";

export const Register = () => {
  const {
    register,
    loading,
    error,
    success,
    handlerRegister,
    seePassword,
    setSeePassword,
    sendRegister,
  } = useRegister();
  return (
    <>
      {loading && (
        <div className="absolute flex justify-center items-center w-full h-full bg-black/40 z-10">
          <PrincipalLoader />
        </div>
      )}
      {error?.error && (
        <div className="absolute flex items-center gap-1 top-10 bg-red-400 z-10 py-2 px-4 rounded-md">
          <PiSealWarning className="text-xl" />{" "}
          <p className="font-thin">{error?.message}</p>
        </div>
      )}
      {success && (
        <div className="absolute flex items-center gap-1 top-10 right-4 bg-green-400/80 z-10 py-2 px-4 rounded-md">
          <PiSealWarning className="text-xl" />{" "}
          <p className="font-thin">Registro satisfactorio</p>
        </div>
      )}
      <h2 className="font-serif text-primaryLight text-3xl text-center font-extrabold">
        Registrarse
      </h2>

      <Logo />

      <form onSubmit={sendRegister} className="w-full flex flex-col">
        <label htmlFor="name-register" className="flex flex-col w-4/5 m-auto">
          <span className=" font-serif text-slate-500 ml-1">Nombre:</span>
          <div className="flex items-center">
            <FaUser className=" text-slate-500 absolute pl-1" />
            <input
              onChange={handlerRegister}
              id="name-register"
              type="text"
              name="name"
              value={register.name}
              placeholder="Escriba su nombre"
              className="inputAuth"
            />
          </div>
        </label>

        <label htmlFor="email-register" className="flex flex-col w-4/5 m-auto">
          <span className=" font-serif text-slate-500 ml-1">Correo:</span>
          <div className="flex items-center">
            <FaEnvelope className=" text-slate-500 absolute pl-1" />
            <input
              onChange={handlerRegister}
              id="email-register"
              type="email"
              name="email"
              value={register.email}
              placeholder="Escriba su Correo"
              className="inputAuth"
            />
          </div>
        </label>

        <label
          htmlFor="pasword-register"
          className="flex flex-col w-4/5 m-auto relative"
        >
          <span className=" font-serif text-slate-500 ml-1">Contraseña:</span>
          <div className="flex items-center">
            <FaLock className=" text-slate-500 absolute pl-1" />
            <input
              onChange={handlerRegister}
              id="pasword-register"
              type={!seePassword ? "password" : "text"}
              name="password"
              value={register.password}
              placeholder="Escriba su Contraseña"
              className="inputAuth"
            />
            {!seePassword ? (
              <FaEye
                onClick={() => setSeePassword((prevState) => !prevState)}
                className=" text-slate-500 absolute right-0 pr-1"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setSeePassword((prevState) => !prevState)}
                className=" text-slate-500 absolute right-0 pr-1"
              />
            )}
          </div>
        </label>

        <label
          htmlFor="repeat-password"
          className="flex flex-col w-4/5 m-auto relative"
        >
          <span className=" font-serif text-slate-500 ml-1">
            Confirmar Contraseña:
          </span>
          <div className="flex items-center">
            <FaKey className=" text-slate-500 absolute pl-1" />
            <input
              onChange={handlerRegister}
              id="repeat-password"
              type={!seePassword ? "password" : "text"}
              name="verifyPassword"
              /* value={register.verifyPassword} */
              placeholder="Confirme su Contraseña"
              className="inputAuth"
            />
          </div>
        </label>

        <div className=" w-4/5 m-auto flex justify-end">
          <Link
            to={"/"}
            className="text-sky-600 hover:cursor-pointer hover:text-sky-700 text-sm lg:text-base"
          >
            Entrar con mi cuenta?
          </Link>
        </div>

        <input
          value="Registrar"
          type="submit"
          className="my-5 p-2 w-2/3 m-auto bg-gradient-to-tr from-primary/80 to-slate-700 text-white rounded-lg shadow-md shadow-secondary/75 hover:cursor-pointer hover:bg-secondary"
        />
      </form>
    </>
  );
};
