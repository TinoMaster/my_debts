import { Balance_Deudas } from "../../components/Home/Balance_Deudas";
import { Colecciones } from "../../components/Home/Colecciones";
import { my_debts } from "../../services/debts";

export const Home = () => {
  console.log(my_debts());
  return (
    <div className="w-full flex flex-wrap justify-around">
      {/* Balance Deudas */}
      <Balance_Deudas />
      {/* Colecciones */}
      <Colecciones data={my_debts()} url={"#"} />
    </div>
  );
};
