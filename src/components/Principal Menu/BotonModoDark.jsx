import ThemeContext from "../../contexts/themeContext";
import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

export const ButtonModeDark = () => {
  const { darkMode, setDarkMode, DARK_MODE } = useContext(ThemeContext);
  const onSwitchTheme = (e) => {
    setDarkMode(!darkMode);
    window.localStorage.setItem(DARK_MODE, !darkMode);
    e.stopPropagation();
  };
  return (
    <div className="flex right-0">
      <div className="Icono"></div>
      <div
        onClick={onSwitchTheme}
        className="flex justify-center items-center hover:cursor-pointer"
      >
        {!darkMode ? (
          <div className="flex items-center w-6 h-3 rounded-full bg-slate-300 relative">
            <div className="flex justify-center items-center w-4 h-4 bg-white border-2 rounded-full translate-x-0 transition-all delay-150 ease-linear">
              <FaSun className="text-yellow-400" />
            </div>
          </div>
        ) : (
          <div className="flex items-center w-6 h-3 rounded-full bg-slate-300 relative">
            <div className="flex justify-center items-center w-4 h-4 bg-white border-2 rounded-full translate-x-3/4 transition-all delay-150 ease-linear">
              <FaMoon className="text-primary" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
