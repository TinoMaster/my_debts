import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";

export const Container_Page = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
