import { Link } from "react-router-dom";
import { FaEnvelope, FaEye, FaLock } from "react-icons/fa";

export const LoginComponent = () => {
  return (
    <>
      <h2 className="font-serif text-3xl text-center font-extrabold">
        Ingresar a su cuenta
      </h2>

      <div className="w-48 my-5 h-48 flex border-2 shadow-lg bg-darkMode/90 items-center justify-center rounded-full overflow-hidden">
        {/* <img className="w-full h-full scale-75" src={logo} alt="Logo" /> */}
      </div>

      <form className="w-full flex flex-col">
        <label htmlFor="nombre" className="flex flex-col w-4/5 m-auto">
          <span className=" font-serif text-slate-500 ml-1">Correo:</span>
          <div className="flex items-center">
            <FaEnvelope className=" text-slate-500 absolute pl-1" />
            <input
              id="nombre"
              type="email"
              name="email"
              placeholder="Escriba su correo"
              className="inputAuth"
              autoComplete="off"
            />
          </div>
        </label>

        <label
          htmlFor="password"
          className="flex flex-col w-4/5 m-auto relative"
        >
          <span className=" font-serif text-slate-500 ml-1">Contraseña:</span>
          <div className="flex items-center">
            <FaLock className=" text-slate-500 absolute pl-1" />
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Escriba su contraseña"
              className="inputAuth"
            />
            <FaEye className=" text-slate-500 absolute right-0 pr-1" />
          </div>
        </label>

        <div className=" w-4/5 m-auto flex justify-between">
          <Link
            to={"/register"}
            className="text-sky-600 hover:cursor-pointer hover:text-sky-700 text-sm lg:text-base"
          >
            Crear nueva cuenta
          </Link>
          <span className="text-sky-600 hover:cursor-pointer hover:text-sky-700 text-sm lg:text-base text-end">
            Olvide mi contraseña?
          </span>
        </div>

        <input
          value="Enviar"
          type="button"
          className="my-5 p-2 w-2/3 m-auto bg-secondary/80 text-white rounded-lg shadow-md shadow-secondary/75 hover:cursor-pointer hover:bg-secondary/90"
        />
      </form>
    </>
  );
};
