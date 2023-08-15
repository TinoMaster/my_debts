import { Balance_Deudas } from "../../components/Home/Balance_Deudas";
import { Button_create_collection } from "../../components/Home/Button_create_collection";
import { Colecciones } from "../../components/Home/Colecciones";
import { Modal_Create_Debt } from "../../components/Modal Create Debt";
import { Modal_Create_collection } from "../../components/Home/Modal_Create_collection";
import { ModalPortal } from "../../components/modals/modalPortal";
import { useCreateNewCollection } from "../../hooks/View Collection/useCreateNewCollection";
import { useCreateNewDebt } from "../../hooks/useCreateNewDebt";
import { Friends } from "../../components/Home/Friends";
import { getUserName } from "../../utilities/getUserName";

export const Home = ({
  collections,
  ballance,
  loading,
  darkMode,
  myContacts,
  loadingAuth,
}) => {
  const {
    openCloseWindow,
    openModal,
    createCollection,
    handlerNameCollection,
    collectionName,
    errorNameCollection,
  } = useCreateNewCollection();
  const { openCloseNewDebt, openNewDebt, funcHandlers, newDebt } =
    useCreateNewDebt();
  const username = getUserName();
  return (
    <div className="w-full h-full flex flex-col px-2 gap-5">
      {/* Modal create collection */}
      {openModal ? (
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
      ) : null}

      {openNewDebt ? (
        <ModalPortal>
          <Modal_Create_Debt
            darkMode={darkMode}
            openCloseNewDebt={openCloseNewDebt}
            newDebt={newDebt}
            funcHandlers={funcHandlers}
          />
        </ModalPortal>
      ) : null}

      {/* Username Provisional */}
      <h3>{username}</h3>
      {/* Friend */}
      <Friends
        users={myContacts?.contacts}
        darkMode={darkMode}
        loadingAuth={loadingAuth}
      />
      {/* Balance Deudas */}
      <Balance_Deudas ballance={ballance} />
      {/* Colecciones */}
      <Colecciones
        collections={collections}
        url={"/collection"}
        loading={loading}
      />
      <Button_create_collection openCloseWindow={openCloseWindow} />
    </div>
  );
};
