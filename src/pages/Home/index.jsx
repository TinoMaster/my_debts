import { Balance_Deudas } from "../../components/Home/Balance_Deudas";
import { Button_create_collection } from "../../components/Home/Button_create_collection";
import { Colecciones } from "../../components/Home/Colecciones";
import { Modal_Create_Debt } from "../../components/Home/Modal_Create_Debt";
import { Modal_Create_collection } from "../../components/Home/Modal_Create_collection";
import { ModalPortal } from "../../components/modals/modalPortal";
import { useCreateNewCollection } from "../../hooks/View Collection/useCreateNewCollection";
import { useCreateNewDebt } from "../../hooks/View Collection/useCreateNewDebt";

export const Home = ({
  filter_collections,
  balanceTotal,
  loading,
  darkMode,
}) => {
  const {
    openCloseWindow,
    openModal,
    createCollection,
    handlerNameCollection,
    collectionName,
    errorNameCollection,
  } = useCreateNewCollection();
  const { openCloseNewDebt, openNewDebt, handlerInputNewDebt, newDebt } =
    useCreateNewDebt();
  return (
    <div className="w-full h-full flex flex-col">
      {/* Modal create collection */}
      {openModal && (
        <ModalPortal>
          <Modal_Create_collection
            darkMode={darkMode}
            openCloseWindow={openCloseWindow}
            createCollection={createCollection}
            openCloseNewDebt={openCloseNewDebt}
            handlerNameCollection={handlerNameCollection}
            collectionName={collectionName}
            errorNameCollection={errorNameCollection}
          />
        </ModalPortal>
      )}

      {openNewDebt && (
        <ModalPortal>
          <Modal_Create_Debt
            darkMode={darkMode}
            openCloseNewDebt={openCloseNewDebt}
            handlerInputNewDebt={handlerInputNewDebt}
            newDebt={newDebt}
          />
        </ModalPortal>
      )}

      {/* Balance Deudas */}
      <Balance_Deudas balanceTotal={balanceTotal} />
      {/* Colecciones */}
      <Colecciones
        collections={filter_collections()}
        url={"/collection"}
        loading={loading}
      />
      <Button_create_collection openCloseWindow={openCloseWindow} />
    </div>
  );
};
