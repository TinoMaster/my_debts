import React from "react";
import { cutName } from "../../utilities/cutName";

const users = [
  {
    username: "Javier4545878754",
    email: "javier@gmail.com",
    name: "Javier",
  },
  {
    username: "Javier4545878754",
    email: "javier@gmail.com",
    name: "Oscar",
  },
  {
    username: "Javier4545878754",
    email: "javier@gmail.com",
    name: "Jorge",
  },
  {
    username: "Javier4545878754",
    email: "javier@gmail.com",
    name: "Nysaer",
  },
  {
    username: "Javier4545878754",
    email: "javier@gmail.com",
    name: "Hector",
  },
  {
    username: "Javier4545878754",
    email: "javier@gmail.com",
    name: "Baby",
  },
];

export const Friends = () => {
  return (
    <div className="flex gap-3">
      {users.map((user) => (
        <div className="w-14 h-14 bg-white/10 shadow-md rounded-full flex justify-center items-center">
          <h3>{cutName(user.name)}</h3>
        </div>
      ))}
      {/* Crear nuevo user */}
      <div className="w-14 h-14 bg-gradient-to-tr from-slate-900/40 to-primary/40 shadow-lg shadow-primary/30 rounded-full flex justify-center items-center">
        <h3 className="text-2xl">+</h3>
      </div>
    </div>
  );
};
