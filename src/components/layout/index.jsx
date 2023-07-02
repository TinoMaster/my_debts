import { Principal_Menu } from "../Principal Menu";

export const Layout = ({ children }) => {
  return (
    <div className="w-full flex flex-col items-center max-w-720p">
      {/* Menu */}
      <Principal_Menu title={"My Debts"}/>
      {children}
    </div>
  );
};
