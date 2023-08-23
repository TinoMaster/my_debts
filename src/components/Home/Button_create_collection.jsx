import { useContext } from "react";
import ThemeContext from "../../contexts/themeContext";

export const Button_create_collection = ({ openCloseWindow }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="my-2 flex">
      <button
        onClick={openCloseWindow}
        className={`${
          darkMode ? "bg-primary/80" : "bg-primary/80"
        } text-lightMode p-2 rounded-md shadow-md hover:cursor-pointer hover:bg-primary transition-colors`}
      >
        Crear Coleccion
      </button>
    </div>
  );
};
