import { Outlet } from "react-router-dom";

export const Login = () => {
  return (
    <div className="w-screen relative h-screen flex overflow-auto items-center justify-center">
      <div className="w-full h-full relative overflow-hidden min-h-movil md:w-2/6 md:h-128 flex max-w-lg flex-col justify-center items-center bg-white/5 p-4 shadow-xl shadow-black/40 rounded-lg">
        {/* {error !== null ? (
          <p className="absolute text-center flex items-center text-xl bg-secondary/75 text-white p-3 rounded-md top-10 transition-all ease-linear delay-700">
            <FontAwesomeIcon className="mr-2" icon={faCircleExclamation} />{" "}
            {error}
          </p>
        ) : (
          <p className="absolute w-2/3 h-20 text-center bg-transparent text-white p-2 top-10">
            {}
          </p>
        )}
        {succes !== null ? (
          <p className="absolute text-center flex items-center text-xl bg-green-500/75 text-white p-3 rounded-md top-10 transition-all ease-linear delay-700">
            <FontAwesomeIcon className="mr-2" icon={faCircleExclamation} />{" "}
            {succes}
          </p>
        ) : (
          <p className="absolute w-2/3 h-20 text-center bg-transparent text-white p-2 top-10">
            {}
          </p>
        )} */}
        <Outlet />
      </div>
    </div>
  );
};
