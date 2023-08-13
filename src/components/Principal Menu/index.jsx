import { useContext } from "react";
import { ButtonModeDark } from "./botonModoDark";
import AuthContext from "../../contexts/authContext";
import ThemeContext from "../../contexts/themeContext";
import { Contacts } from "./Contacts";
import { Settings } from "./Settings";
import { Link } from "react-router-dom";

export const Principal_Menu = (props) => {
  const { bg, title } = props;
  const { user, closeSession, myContacts } = useContext(AuthContext);
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      style={{ backgroundColor: `${bg}` }}
      className={`w-full flex bg-gradient-to-tr z-20 ${
        darkMode ? "from-darkMode to-slate-800" : "from-lightMode to-slate-200"
      } justify-between items-center p-4 sticky top-0 rounded-md`}
    >
      <Link to={"/"}>
        <h2>{title}</h2>
      </Link>
      {/* Caja derecha */}
      <div className="flex gap-5 justify-center items-center">
        <Contacts request={myContacts?.contactRequestsReceived?.length} />
        <Settings />
        {/* <div>
          <p className="hover:cursor-pointer" onClick={closeSession}>
            {!user ? null : `Hola ${user.name}`}
          </p>
        </div> */}
        <ButtonModeDark />
      </div>
    </div>
  );
};
