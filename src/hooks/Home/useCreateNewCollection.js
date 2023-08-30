import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useCreateNewCollection = (myContacts) => {
  const [openModal, setOpenModal] = useState(false);
  const [collectionName, setCollectionName] = useState("");
  const [errorNameCollection, setErrorNameCollection] = useState({});
  const [modalErrorCreateCol, setModalErrorCreateCol] = useState(false);

  const navigate = useNavigate();

  const openCloseWindow = () => {
    setCollectionName("");
    myContacts.contacts.length === 0
      ? setModalErrorCreateCol(true)
      : setOpenModal((prev) => !prev);
  };

  const handlerNameCollection = (e) => {
    setErrorNameCollection({});
    setCollectionName(e.target.value);
  };

  const validateCollectionName = () => {
    if (!collectionName) {
      setErrorNameCollection({
        error: true,
        message: "El campo esta vacio",
      });
      return false;
    } else if (collectionName.length <= 2) {
      setErrorNameCollection({
        error: true,
        message: "El campo debe tener mas de dos caracteres",
      });
      return false;
    }
    return true;
  };

  const createCollection = () => {
    const validate = validateCollectionName();
    if (validate) {
      navigate(`/collection/${collectionName}`);
    }
  };

  return {
    openCloseWindow,
    openModal,
    createCollection,
    handlerNameCollection,
    collectionName,
    errorNameCollection,
    modalErrorCreateCol,
    setModalErrorCreateCol,
  };
};
