import React, { useContext } from "react";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";

export const Contacts = ({ request = 0 }) => {
  return (
    <div className="relative">
      {request > 0 ? (
        <span className="absolute text-white bg-red-400 z-10 text-xs px-1 rounded-full -top-1 -right-1">
          {request}
        </span>
      ) : null}
      <Link to={"/contacts"}>
        <IoMdContact className="text-2xl relative" />
      </Link>
    </div>
  );
};
