import { Link, useLocation, useParams } from "react-router-dom";
import { useViewCollection } from "../../hooks/View Collection/useViewCollection";
import { Card_Debt } from "../../components/View Collection/Card_Debt";
import { Balance } from "../../components/View Collection/Balance";
import { FaArrowLeft } from "react-icons/fa";
import { useContext } from "react";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import AuthContext from "../../contexts/authContext";
import { ModalPortal } from "../../components/modals/modalPortal";
import { Modal_Create_Debt } from "../../components/Modal Create Debt";

export const View_Collection = ({
  debts,
  deleteDebt,
  darkMode,
  addNewDebtToArray,
  refresh_debts_afterPay,
}) => {
  const { name } = useParams();
  const location = useLocation();
  const _id = location.state ? location.state._id : "";
  const contact = location.state ? location.state.contact : "";
  const { user } = useContext(AuthContext);
  const {
    collection_by_name,
    openCloseNewDebt,
    modalNewDebt,
    setModalNewDebt,
    isMyCollection,
  } = useViewCollection(debts, name, _id, user);
  const collection = collection_by_name();
  return (
    <div className="flex flex-col w-full h-screen pt-5 overflow-auto pb-20">
      {/* Create new debt */}
      {isMyCollection() ? (
        <button
          onClick={openCloseNewDebt}
          className="absolute rounded-full bottom-4 p-1 bg-white right-4 z-10 border border-primary shadow-md shadow-violet-400/20"
        >
          <MdOutlinePlaylistAdd className="text-4xl rounded-full shadow-xl p-2 bg-white text-primary/80 hover:shadow-white/20" />
        </button>
      ) : null}

      {modalNewDebt ? (
        <ModalPortal>
          <Modal_Create_Debt
            darkMode={darkMode}
            openCloseNewDebt={openCloseNewDebt}
            setModalNewDebt={setModalNewDebt}
            name={name}
            contact={contact}
            addNewDebtToArray={addNewDebtToArray}
            isNew={_id === "" ? true : false}
          />
        </ModalPortal>
      ) : null}

      <Link
        to={"/"}
        className={`absolute flex items-center gap-1 shadow-md p-2 z-10 rounded-md text-sm bg-gradient-to-tr ${
          darkMode ? "from-darkMode to-slate-700" : "from-slate-100 to-white"
        }`}
      >
        <FaArrowLeft /> Volver
      </Link>
      <h2 className="text-sm py-4 px-2 text-center">{name}</h2>
      {/* Balance */}
      <Balance collection={collection} darkMode={darkMode} />
      {/* Caja deudas */}
      <div className="flex flex-col gap-3 py-5">
        <div className="flex flex-wrap">
          {collection?.filter((debt) => debt.acreedor._id === user._id).length >
          0 ? (
            <h3 className="w-full text-center text-sm text-slate-500">
              Me deben
            </h3>
          ) : null}

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
                refresh_debts_afterPay={refresh_debts_afterPay}
                darkMode={darkMode}
                isMyCollection={isMyCollection}
              />
            ))}
        </div>
        <div className="flex flex-wrap">
          {collection?.filter((debt) => debt.deudor._id === user._id).length >
          0 ? (
            <h3 className="w-full text-center text-sm text-slate-500">
              Le debo
            </h3>
          ) : null}

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
                refresh_debts_afterPay={refresh_debts_afterPay}
                darkMode={darkMode}
                isMyCollection={isMyCollection}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
