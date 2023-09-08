import { useState } from "react";

export const usePrincipalMenu = () => {
  const [openSettings, setOpenSettings] = useState(false);

  const handlTogOpenCloseSetting = () => {
    setOpenSettings((prev) => !prev);
  };

  const handlersPM = {
    handlTogOpenCloseSetting,
  };

  const statesPM = {
    openSettings,
  };

  return { statesPM, handlersPM };
};
