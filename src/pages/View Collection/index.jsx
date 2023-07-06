import { useParams } from "react-router-dom";
import { useViewCollection } from "../../hooks/View Collection/useViewCollection";

export const View_Collection = ({ debts }) => {
  const { name } = useParams();
  const { collection_by_name } = useViewCollection(debts, name);
  const collection = collection_by_name();
  return (
    <div>
      {collection?.map((debt) => (
        <h2 key={debt._id}>{debt.name}</h2>
      ))}
    </div>
  );
};
