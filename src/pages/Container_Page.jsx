import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { View_Collection } from "./View Collection";
import { useDebts } from "../hooks/useDebts";

export const Container_Page = () => {
  const { filter_collections, balanceTotal, loading, debts } = useDebts();
  return (
    <div className="w-full h-full overflow-auto p-2 pb-24 pt-8 md:p-5">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              filter_collections={filter_collections}
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
