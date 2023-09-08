import React from "react";
import { getID } from "../../utilities/getId";

export const DebtorOrCreditor = ({
  friends,
  newDebt,
  darkMode,
  handlerInputNewDebt,
  refContactInput,
  isNew,
  nameOfContact,
}) => {
  const myId = getID();

  return (
    <div className="w-full flex flex-wrap">
      <h4 className="w-full pl-2 font-bold">
        {newDebt.acreedor !== myId ? "Acreedor" : "Deudor"}
      </h4>

      {isNew ? (
        <select
          ref={refContactInput}
          onChange={handlerInputNewDebt}
          name={newDebt.acreedor !== myId ? "acreedor" : "deudor"}
          className={`w-full rounded-md ${darkMode ? "bg-black/20" : ""} py-2`}
        >
          <option className={`${darkMode ? "bg-black/50" : ""}  `}></option>
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
      ) : (
        <div
          className={`w-full p-2 bg-white shadow-inner ${
            darkMode ? "bg-white/5 border border-secondary/30" : "bg-white"
          } shadow-black/30 rounded-md flex items-center`}
        >
          <h4 className="">{nameOfContact()}</h4>
        </div>
      )}
    </div>
  );
};
