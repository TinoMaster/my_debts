import { Balance_Deudas } from "../../components/Home/Balance_Deudas";
import { Colecciones } from "../../components/Home/Colecciones";

export const Home = ({ filter_collections, loading }) => {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Balance Deudas */}
      <Balance_Deudas />
      {/* Colecciones */}
      <Colecciones
        collections={filter_collections()}
        url={"/collection"}
        loading={loading}
      />
    </div>
  );
};
