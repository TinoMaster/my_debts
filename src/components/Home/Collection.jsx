import React from "react";
import { Link } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";
import { BsFillCollectionFill } from "react-icons/bs";

export const Collection = ({ url, collection, darkMode }) => {
  return (
    <Link
      to={`${url}/${collection.name}`}
      state={{ _id: collection.creador._id, contact: collection.contact }}
      className={`my-2 p-3 shadow-md rounded-md flex flex-wrap relative hover:bg-primary/50 transition-colors ${darkMode?"bg-white/5 border border-secondary/30":"bg-white/90"}`}
    >
      <div className="w-full flex justify-between">
        <h4 className="flex items-center gap-2"><BsFillCollectionFill className="text-primary bg-white p-1 text-xl rounded-full"/>{collection.name}</h4>
        <p
          className={`${
            collection.deuda < 0 ? "text-red-400" : "text-green-400"
          } text-sm md:text-base flex items-center`}
        >
          <FaDollarSign className="text-xs" /> {collection.deuda}
        </p>
      </div>
      <div className="w-full flex justify-center text-xs px-2">
        <div className="flex gap-2">
          <p>Creador:</p>
          <p className="text-green-500">{collection.creador.name}</p>
        </div>
      </div>
    </Link>
  );
};
