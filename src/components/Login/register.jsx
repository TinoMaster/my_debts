import { Link } from "react-router-dom";
import { FaEnvelope, FaKey, FaLock, FaUser } from "react-icons/fa";

export const Register = () => {
  return (
    <>
      <h2 className="font-serif text-primaryLight text-3xl text-center font-extrabold">
        Registrarse
      </h2>

      <div className="w-48 my-5 h-48 flex border-2 shadow-lg bg-darkMode/90 items-center justify-center rounded-full overflow-hidden">
        {/*  <img className="w-full h-full scale-75" src={logo} alt="Logo" /> */}
      </div>

      <form className="w-full flex flex-col">
        <label htmlFor="name-register" className="flex flex-col w-4/5 m-auto">
          <span className=" font-serif text-slate-500 ml-1">Nombre:</span>
          <div className="flex items-center">
            <FaUser className=" text-slate-500 absolute pl-1" />
            <input
              id="name-register"
              type="text"
              name="nombre"
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
              id="email-register"
              type="email"
              name="email"
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
              id="pasword-register"
              type="text"
              /* type={!seePassword ? "password" : "text"} */
              name="contraseña"
              placeholder="Escriba su Contraseña"
              className="inputAuth"
            />
            {/*  <FontAwesomeIcon
              className=" text-slate-500 absolute right-0 pr-1"
              onClick={() => setSeePassword((prevState) => !prevState)}
              icon={!seePassword ? faEye : faEyeLowVision}
            /> */}
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
              id="repeat-password"
              type="text"
              /* type={!seePassword ? "password" : "text"} */
              name="repetir_contraseña"
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
          type="button"
          className="my-5 p-2 w-2/3 m-auto bg-secondary/80 text-white rounded-lg shadow-md shadow-secondary/75 hover:cursor-pointer hover:bg-secondary"
        />
      </form>
    </>
  );
};
