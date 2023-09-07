import { Balance_Deudas } from "../../components/Home/Balance_Deudas";
import { Button_create_collection } from "../../components/Home/Button_create_collection";
import { Colecciones } from "../../components/Home/Colecciones";
import { Modal_Create_collection } from "../../components/Home/Modal_Create_collection";
import { ModalPortal } from "../../components/modals/modalPortal";
import { useCreateNewCollection } from "../../hooks/Home/useCreateNewCollection";
import { Friends } from "../../components/Home/Friends";
import { Modal_ErrorCreateCol } from "../../components/Home/Modal_ErrorCreateCol";

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
    modalErrorCreateCol,
    setModalErrorCreateCol,
  } = useCreateNewCollection(myContacts);

  return (
    <div className="w-full h-full flex flex-col gap-4">
      {/* Modal create collection */}

      {modalErrorCreateCol ? (
        <ModalPortal>
          <Modal_ErrorCreateCol
            setModalErrorCreateCol={setModalErrorCreateCol}
            darkMode={darkMode}
          />
        </ModalPortal>
      ) : null}

      {openModal ? (
        <ModalPortal>
          <Modal_Create_collection
            darkMode={darkMode}
            openCloseWindow={openCloseWindow}
            createCollection={createCollection}
            handlerNameCollection={handlerNameCollection}
            collectionName={collectionName}
            errorNameCollection={errorNameCollection}
          />
        </ModalPortal>
      ) : null}

      {/* Friend */}
      <Friends
        users={myContacts?.contacts}
        darkMode={darkMode}
        loadingAuth={loadingAuth}
      />
      {/* Balance Deudas */}
      <Balance_Deudas ballance={ballance} darkMode={darkMode} />
      {/* Colecciones */}
      <Colecciones
        collections={collections}
        url={"/collection"}
        loading={loading}
        darkMode={darkMode}
      />
      <Button_create_collection openCloseWindow={openCloseWindow} />
    </div>
  );
};
