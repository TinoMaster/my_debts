import { Link, useParams } from "react-router-dom";
import { useViewCollection } from "../../hooks/View Collection/useViewCollection";
import { Card_Debt } from "../../components/View Collection/Card_Debt";
import { Balance } from "../../components/View Collection/Balance";
import { FaArrowLeft } from "react-icons/fa";

export const View_Collection = ({ debts }) => {
  const { name } = useParams();
  const { collection_by_name } = useViewCollection(debts, name);
  const collection = collection_by_name();
  return (
    <div className="flex relative flex-col w-full">
      <Link
        to={"/"}
        className="absolute flex items-center gap-1 shadow-md p-2 rounded-md text-sm bg-white/5"
      >
        <FaArrowLeft /> Volver
      </Link>
      <h2 className="text-sm py-4 px-2 text-center">{name}</h2>
      {/* Balance */}
      <Balance collection={collection} />
      {/* Caja deudas */}
      <div className="flex flex-wrap gap-3 py-5">
        {collection?.map((debt) => (
          <Card_Debt key={debt._id} debt={debt} />
        ))}
      </div>
    </div>
  );
};
