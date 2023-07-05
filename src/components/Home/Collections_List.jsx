import { Link } from "react-router-dom";

export const Collections_List = ({ collections, url }) => {
  return (
    <div className="w-full">
      {/*Colecciones  */}
      {collections?.map((collection) => (
        <Link
          to={url}
          key={collection.name}
          className="m-2 p-3 shadow-md rounded-md flex justify-between bg-white/5"
        >
          <h4 className="md:text-lg font-semibold">{collection.name}</h4>
          <p className="text-sm md:text-base">
            {collection.deuda ? collection.deuda : 0}
          </p>
        </Link>
      ))}
    </div>
  );
};
