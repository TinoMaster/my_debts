import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { View_Collection } from "./View Collection";
import { useDebts } from "../hooks/useDebts";
import { useContext } from "react";
import ThemeContext from "../contexts/themeContext";

export const Container_Page = () => {
  const { collections, balanceTotal, loading, debts } = useDebts();
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="w-full h-full overflow-auto p-2 pb-24 pt-8 md:p-5">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              darkMode={darkMode}
              collections={collections}
              balanceTotal={balanceTotal}
              loading={loading}
            />
          }
        />
        <Route
          path="/collection/:name"
          element={<View_Collection debts={debts} />}
        />
      </Routes>
    </div>
  );
};
