import { Link } from "react-router-dom";
import { Collection } from "./Collection";

export const Collections_List = ({ collections, url, user, darkMode }) => {
  return (
    <div className="w-full">
      {/*Colecciones  */}
      <div className="">
        {collections?.filter(
          (collection) => collection?.creador._id === user?._id
        ).length > 0 ? (
          <h3 className="pl-3 text-xs text-slate-700">Mias</h3>
        ) : null}

        {collections
          ?.filter((collection) => collection?.creador._id === user?._id)
          ?.map((collection) => (
            <Collection
              key={collection.name}
              url={url}
              collection={collection}
              darkMode={darkMode}
            />
          ))}
      </div>
      <div className="">
        {collections?.filter(
          (collection) => collection?.creador._id !== user?._id
        ).length > 0 ? (
          <h3 className="pl-3 text-xs text-slate-700">de otros</h3>
        ) : null}

        {collections
          ?.filter((collection) => collection?.creador._id !== user?._id)
          ?.map((collection) => (
            <Collection
              key={collection.name}
              collection={collection}
              url={url}
              darkMode={darkMode}
            />
          ))}
      </div>
    </div>
  );
};
