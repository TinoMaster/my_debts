import React from "react";
import { AiFillSetting } from "react-icons/ai";

export const Settings = ({ openCloseSetting }) => {
  return (
    <div
      onClick={openCloseSetting}
      className="relative hover:cursor-pointer hover:scale-105 duration-200"
    >
      <AiFillSetting className="text-2xl" />
    </div>
  );
};
