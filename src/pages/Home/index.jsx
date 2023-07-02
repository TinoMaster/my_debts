import { Balance_Deudas } from "../../components/Home/Balance_Deudas";
import { Colecciones } from "../../components/Home/Colecciones";

export const Home = () => {
  return (
    <div className="w-full flex flex-wrap justify-around">
      {/* Balance Deudas */}
      <Balance_Deudas />
      {/* Colecciones */}
      <Colecciones />
    </div>
  );
};
