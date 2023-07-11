import { HashRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { Container_Page } from "./pages/Container_Page";
import { Login } from "./pages/Login";
import { useContext } from "react";
import ThemeContext from "./contexts/themeContext";
import { Register } from "./components/Login/register";
import { LoginComponent } from "./components/Login/loginComponent";

function App() {
  const isAuth = false;
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`w-screen h-screen flex bg-gradient-to-tr ${
        darkMode
          ? "from-darkMode to-slate-800 text-lightMode"
          : "from-slate-300 to-lightMode text-darkMode"
      } justify-center font-roboto`}
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
            <Route path="/" element={<Login />}>
              <Route index element={<LoginComponent />} />
              <Route path="/register" element={<Register />} />
            </Route>
          )}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
