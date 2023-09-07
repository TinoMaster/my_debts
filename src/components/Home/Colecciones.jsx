import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import { ListLoading } from "../loaders/listLoader";
import { Collections_List } from "./Collections_List";
export const Colecciones = ({ collections, url, loading, darkMode }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className="w-full flex flex-col justify-center rounded-md gap-2">
      <h4 className="text-sm text-slate-400 pl-2">Colecciones</h4>
      {loading ? (
        <div className="w-full flex flex-col items-center mb-3">
          <ListLoading />
        </div>
      ) : collections?.length > 0 ? (
        <Collections_List
          collections={collections}
          url={url}
          user={user}
          darkMode={darkMode}
        />
      ) : (
        <h3 className="m-2 p-3 shadow-md rounded-md text-center bg-white/5">
          Cree su primera coleccion
        </h3>
      )}
    </div>
  );
};
