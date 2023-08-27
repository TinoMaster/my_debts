import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Collections_List = ({ collections, url, user }) => {
  return (
    <div className="w-full">
      {/*Colecciones  */}
      <div className="">
        <h3 className="text-center text-sm">Mias</h3>
        {collections
          ?.filter((collection) => collection?.creador === user?._id)
          ?.map((collection) => (
            <Link
              to={`${url}/${collection.name}`}
              state={{ _id: collection.creador }}
              key={collection.name}
              className="my-2 p-3 shadow-md rounded-md flex justify-between bg-white/5 relative"
            >
              <h4 className="">{collection.name}</h4>
              <p
                className={`${
                  collection.deuda < 0 ? "text-red-400" : "text-green-400"
                } text-sm md:text-base`}
              >
                {collection.deuda ? collection.deuda : 0}
              </p>
            </Link>
          ))}
      </div>
      <div className="">
        <h3 className="text-center text-sm">Otras</h3>
        {collections
          ?.filter((collection) => collection?.creador !== user?._id)
          ?.map((collection) => (
            <Link
              to={`${url}/${collection.name}`}
              state={{ _id: collection.creador }}
              key={collection.name}
              className="my-2 p-3 shadow-md rounded-md flex justify-between bg-white/5 relative"
            >
              <h4 className="">{collection.name}</h4>
              <p
                className={`${
                  -collection.deuda < 0 ? "text-red-400" : "text-green-400"
                } text-sm md:text-base`}
              >
                {collection.deuda ? -collection.deuda : 0}
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
};
