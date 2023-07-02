import { ButtonModeDark } from "./botonModoDark";

export const Principal_Menu = (props) => {
  const { bg, title } = props;
  return (
    <div
      style={{ backgroundColor: `${bg}` }}
      className={`w-full flex justify-between items-center relative p-4`}
    >
      <h2>{title}</h2>
      {/* Caja derecha */}
      <div className="">
        <ButtonModeDark />
      </div>
    </div>
  );
};
