import { ListLoading } from "../loaders/listLoader";
import { Button_create_collection } from "./Button_create_collection";
import { Collections_List } from "./Collections_List";
export const Colecciones = ({ collections, url, loading }) => {
  return (
    <div className="w-full h-full p-2 flex flex-col justify-center rounded-md">
      <h4 className="m-1 ml-3 text-md font-medium">Mi coleccion de deudas</h4>
      {loading ? (
        <div className="w-full flex flex-col items-center mb-3">
          <ListLoading />
        </div>
      ) : collections.length > 0 ? (
        <Collections_List collections={collections} url={url} />
      ) : (
        <h3 className="m-2 p-3 shadow-md rounded-md text-center bg-white/5">
          Cree su primera coleccion
        </h3>
      )}
      <Button_create_collection />
    </div>
  );
};
