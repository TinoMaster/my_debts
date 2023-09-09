import { Outlet } from "react-router-dom";

export const Login = () => {
  return (
    <div className="w-screen relative h-screen flex overflow-auto items-center justify-center bg-gradient-to-tr from-primary to-slate-800">
      <div className="w-screen h-screen relative overflow-hidden min-h-[800px] md:w-2/6 md:h-128 flex max-w-lg flex-col justify-center items-center bg-white/90 p-4 shadow-xl shadow-black/40 rounded-lg">
        <Outlet />
      </div>
    </div>
  );
};
