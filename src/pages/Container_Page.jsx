import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { View_Collection } from "./View Collection";
import { useDebts } from "../hooks/useDebts";
import { useContext } from "react";
import ThemeContext from "../contexts/themeContext";
import { Contacts } from "./Contacts";
import AuthContext from "../contexts/authContext";

export const Container_Page = () => {
  const {
    collections,
    ballance,
    loading,
    debts,
    addNewDebtToArray,
    deleteDebt,
    refresh_debts_afterPay,
  } = useDebts();
  const { darkMode } = useContext(ThemeContext);
  const { myContacts, loadingAuth } = useContext(AuthContext);
  return (
    <div className="w-full max-w-720p h-full p-2 pb-16">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              darkMode={darkMode}
              collections={collections}
              ballance={ballance}
              loading={loading}
              myContacts={myContacts}
              loadingAuth={loadingAuth}
            />
          }
        />
        <Route
          path="/collection/:name"
          element={
            <View_Collection
              debts={debts}
              deleteDebt={deleteDebt}
              darkMode={darkMode}
              addNewDebtToArray={addNewDebtToArray}
              refresh_debts_afterPay={refresh_debts_afterPay}
            />
          }
        />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
};
