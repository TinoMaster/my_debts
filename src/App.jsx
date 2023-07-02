import { HashRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { Container_Page } from "./pages/Container_Page";
import { Login } from "./pages/Login";
import { useContext } from "react";
import ThemeContext from "./contexts/themeContext";

function App() {
  const isAuth = true;
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`w-screen h-screen flex bg-gradient-to-tr ${
        darkMode
          ? "from-darkMode to-slate-800 text-lightMode"
          : "from-lightMode to-white text-darkMode"
      } justify-center`}
    >
      <HashRouter>
        <Routes>
          {isAuth ? (
            <Route
              path="*"
              element={
                <Layout>
                  <Container_Page />
                </Layout>
              }
            />
          ) : (
            <Route path="*" element={<Login />} />
          )}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
