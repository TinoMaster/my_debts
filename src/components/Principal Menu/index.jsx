import { useContext } from "react";
import { ButtonModeDark } from "./botonModoDark";
import AuthContext from "../../contexts/authContext";
import ThemeContext from "../../contexts/themeContext";
import { Contacts } from "./Contacts";
import { Settings } from "./Settings";
import { Link } from "react-router-dom";
import { usePrincipalMenu } from "../../hooks/Principal Menu/usePrincipalMenu";
import { BiSolidLogOutCircle } from "react-icons/bi";
import { MdDeveloperMode } from "react-icons/md";

export const Principal_Menu = (props) => {
  const { bg, title } = props;
  const { user, closeSession, myContacts } = useContext(AuthContext);
  const { darkMode } = useContext(ThemeContext);
  const { statesPM, handlersPM } = usePrincipalMenu();
  return (
    <div
      style={{ backgroundColor: `${bg}` }}
      className={`w-full flex bg-gradient-to-tr z-20 relative ${
        darkMode ? "from-primary to-slate-800" : "from-primary to-slate-400"
      } justify-between items-center py-2 px-4 sticky top-0 text-white`}
    >
      <Link to={"/"}>
        <h2>{title}</h2>
      </Link>
      {/* Caja derecha */}
      <div className="flex gap-5 justify-center items-center">
        <Contacts request={myContacts?.contactRequestsReceived?.length} />
        <Settings openCloseSetting={handlersPM.handlTogOpenCloseSetting} />
        <div className="flex">
          <div className="w-11 h-11 relative rounded-full bg-white"></div>
        </div>
      </div>

      {/* Open Setting */}

      <div
        className={`flex flex-col absolute bg-gradient-to-tr ${
          darkMode
            ? "from-primary to-slate-700"
            : "from-primary/80 to-slate-400"
        }  right-3 top-16 p-3 text-xs gap-2 rounded-md shadow-md shadow-black/40 transition-transform duration-300 ${
          statesPM.openSettings ? "translate-x-0" : "translate-x-36"
        }`}
      >
        <p className="flex gap-2 items-center p-1 rounded-md hover:shadow-md shadow-black/40 transition-shadow">
          <div className="flex items-center gap-1">
            <MdDeveloperMode className="text-lg" /> Modo:
          </div>
          <ButtonModeDark />
        </p>

        <p
          onClick={closeSession}
          className="flex items-center gap-1 hover:shadow-md shadow-black/40 hover:cursor-pointer transition-shadow p-1 rounded-none"
        >
          <BiSolidLogOutCircle className="text-lg" /> Desconectarse
        </p>
      </div>
    </div>
  );
};
