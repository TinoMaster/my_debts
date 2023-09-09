import React from "react";

export const Logo = () => {
  return (
    <div className="w-56 my-5 h-56 flex relative border-2 shadow-lg bg-gradient-to-tr from-primary/90 to-slate-700 items-center justify-center rounded-full overflow-hidden">
      <div className="text-white font-roboto font-bold text-3xl relative">
        <div className="absolute w-full h-full bg-secondary/90 rounded-bl-full rounded-tr-full"></div>
        <div></div>
        <h2 className="translate-x-3 z-10">My</h2>
        <p className="translate-x-1 z-10">Debts</p>
      </div>
    </div>
  );
};
