import { Principal_Menu } from "../Principal Menu";

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-full relative">
      {/* Menu */}
      <Principal_Menu title={"My Debts"} />
      <div className="flex justify-center w-full overflow-auto">{children}</div>
    </div>
  );
};
