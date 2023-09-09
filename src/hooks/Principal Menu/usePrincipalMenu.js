import { useState } from "react";
import clipBoardCopy from "clipboard-copy";

export const usePrincipalMenu = () => {
  const [openSettings, setOpenSettings] = useState(false);
  const [usernameIsCopy, setUsernameIsCopy] = useState(false);

  const handlTogOpenCloseSetting = () => {
    setOpenSettings((prev) => !prev);
  };

  const handlersPM = {
    handlTogOpenCloseSetting,
  };

  const statesPM = {
    openSettings,
  };

  const copyUserName = (username) => {
    setUsernameIsCopy(true);
    clipBoardCopy(`${username}`);
    setTimeout(() => {
      setUsernameIsCopy(false);
    }, 1500);
  };

  return { statesPM, handlersPM, copyUserName, usernameIsCopy };
};
