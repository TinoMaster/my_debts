import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { View_Collection } from "./View Collection";
import { useDebts } from "../hooks/useDebts";

export const Container_Page = () => {
  const { filter_collections, loading, debts } = useDebts();
  return (
    <div className="w-full p-2 md:p-5">
      <Routes>
        <Route
          path="/"
          element={
            <Home filter_collections={filter_collections} loading={loading} />
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
