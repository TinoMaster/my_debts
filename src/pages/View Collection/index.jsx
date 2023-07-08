import { useParams } from "react-router-dom";
import { useViewCollection } from "../../hooks/View Collection/useViewCollection";
import { Card_Debt } from "../../components/View Collection/Card_Debt";

export const View_Collection = ({ debts }) => {
  const { name } = useParams();
  const { collection_by_name } = useViewCollection(debts, name);
  const collection = collection_by_name();
  return (
    <div className="flex flex-col w-full">
      <h2 className="text-2xl font-serif text-secondary py-4">{name}</h2>
      {/* Caja deudas */}
      <div className="flex flex-wrap justify-center gap-3 py-5">
        {collection?.map((debt) => (
          <Card_Debt key={debt._id} debt={debt} />
        ))}
      </div>
    </div>
  );
};
