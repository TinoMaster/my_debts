import { useContext } from "react";
import { ButtonModeDark } from "./botonModoDark";
import AuthContext from "../../contexts/authContext";

export const Principal_Menu = (props) => {
  const { bg, title } = props;
  const { user, closeSession } = useContext(AuthContext);
  return (
    <div
      style={{ backgroundColor: `${bg}` }}
      className={`w-full flex justify-between items-center relative p-4`}
    >
      <h2>{title}</h2>
      {/* Caja derecha */}
      <div className="flex gap-5">
        <div>
          <p className="hover:cursor-pointer" onClick={closeSession}>
            {!user ? null : `Hola ${user.name}`}
          </p>
        </div>
        <ButtonModeDark />
      </div>
    </div>
  );
};
