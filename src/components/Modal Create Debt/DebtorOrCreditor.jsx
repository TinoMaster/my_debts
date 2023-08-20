import React from "react";
import { getID } from "../../utilities/getId";

export const DebtorOrCreditor = ({ friends, newDebt, darkMode }) => {
  const myId = getID();
  return (
    <div className="w-full flex flex-wrap">
      <h4 className="w-full text-center font-serif">
        {newDebt.acreedor !== myId ? "Acreedor" : "Deudor"}
      </h4>
      <select
        name=""
        id=""
        className={`w-full text-center rounded-md ${
          darkMode ? "bg-black/20" : ""
        } py-2`}
      >
        <option
          value=""
          className={`${darkMode ? "bg-black/50" : ""}  `}
        ></option>
        {friends.map((friend) => (
          <option
            key={friend.friend._id}
            value={friend.friend._id}
            className={`${darkMode ? "bg-black/50" : ""}  `}
          >
            {friend.friend.name}
          </option>
        ))}
      </select>
    </div>
  );
};
