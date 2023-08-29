import { Link } from "react-router-dom";
import { Collection } from "./Collection";

export const Collections_List = ({ collections, url, user }) => {
  return (
    <div className="w-full">
      {/*Colecciones  */}
      <div className="">
        {collections?.filter(
          (collection) => collection?.creador._id === user?._id
        ).length > 0 ? (
          <h3 className="text-center text-sm">Creadas por mi</h3>
        ) : null}

        {collections
          ?.filter((collection) => collection?.creador._id === user?._id)
          ?.map((collection) => (
            <Collection
              key={collection.name}
              url={url}
              collection={collection}
            />
          ))}
      </div>
      <div className="">
        {collections?.filter(
          (collection) => collection?.creador._id !== user?._id
        ).length > 0 ? (
          <h3 className="text-center text-sm">Creadas por otros</h3>
        ) : null}

        {collections
          ?.filter((collection) => collection?.creador._id !== user?._id)
          ?.map((collection) => (
            <Collection
              key={collection.name}
              collection={collection}
              url={url}
            />
          ))}
      </div>
    </div>
  );
};
