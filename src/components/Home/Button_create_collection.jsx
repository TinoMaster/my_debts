import { useContext } from "react";
import ThemeContext from "../../contexts/themeContext";

export const Button_create_collection = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="m-2 flex">
      <h4
        onClick={() => console.log("hiii")}
        className={`${
          darkMode ? "bg-primary/80" : "bg-primary/80"
        } text-lightMode p-2 rounded-md shadow-md hover:cursor-pointer hover:bg-primary transition-colors`}
      >
        Crear Coleccion
      </h4>
    </div>
  );
};
