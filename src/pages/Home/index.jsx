import { Balance_Deudas } from "../../components/Home/Balance_Deudas";
import { Colecciones } from "../../components/Home/Colecciones";
import { useDebts } from "../../hooks/useDebts";

export const Home = () => {
  const { filter_collections, loading } = useDebts();
  return (
    <div className="w-full flex flex-wrap justify-around">
      {/* Balance Deudas */}
      <Balance_Deudas />
      {/* Colecciones */}
      <Colecciones
        collections={filter_collections()}
        url={"#"}
        loading={loading}
      />
    </div>
  );
};
