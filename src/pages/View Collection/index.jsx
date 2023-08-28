import { Link, useLocation, useParams } from "react-router-dom";
import { useViewCollection } from "../../hooks/View Collection/useViewCollection";
import { Card_Debt } from "../../components/View Collection/Card_Debt";
import { Balance } from "../../components/View Collection/Balance";
import { FaArrowLeft } from "react-icons/fa";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

export const View_Collection = ({ debts, deleteDebt }) => {
  const { name } = useParams();
  const location = useLocation();
  const { _id } = location.state;
  const { collection_by_name } = useViewCollection(debts, name, _id);
  const { user } = useContext(AuthContext);
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
      <div className="flex flex-col gap-3 py-5">
        <div className="flex flex-wrap">
          <h3 className="w-full text-center">Me deben</h3>
          {collection
            ?.filter((debt) => debt.acreedor._id === user._id)
            ?.map((debt) => (
              <Card_Debt
                key={debt._id}
                debt={debt}
                color={"#209A21"}
                secondColor={"#F05C6B"}
                deleteDebt={deleteDebt}
                countCard={collection.length}
              />
            ))}
        </div>
        <div className="flex flex-wrap">
          <h3 className="w-full text-center">Le debo</h3>
          {collection
            ?.filter((debt) => debt.deudor._id === user._id)
            ?.map((debt) => (
              <Card_Debt
                key={debt._id}
                debt={debt}
                color={"#F05C6B"}
                secondColor={"#209A21"}
                deleteDebt={deleteDebt}
                countCard={collection.length}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
