import React from "react";
import { Link } from "react-router-dom";

export const Collection = ({ url, collection }) => {
  return (
    <Link
      to={`${url}/${collection.name}`}
      state={{ _id: collection.creador._id, contact: collection.contact }}
      className="my-2 p-3 shadow-md rounded-md flex flex-wrap bg-white/5 relative hover:bg-primary/50 transition-colors"
    >
      <div className="w-full flex justify-between">
        <h4 className="">{collection.name}</h4>
        <p
          className={`${
            collection.deuda < 0 ? "text-red-400" : "text-green-400"
          } text-sm md:text-base`}
        >
          {collection.deuda}
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
