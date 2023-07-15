import { Principal_Menu } from "../Principal Menu";

export const Layout = ({ children }) => {
  return (
    <div className="w-full h-full max-w-720p relative">
      {/* Menu */}
      <Principal_Menu title={"My Debts"} />
      {children}
    </div>
  );
};
