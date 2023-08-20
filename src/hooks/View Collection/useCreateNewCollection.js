import { useState } from "react";

export const useCreateNewCollection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [collectionName, setCollectionName] = useState("");
  const [errorNameCollection, setErrorNameCollection] = useState({});

  const openCloseWindow = () => {
    setOpenModal((prev) => !prev);
  };

  const handlerNameCollection = (e) => {
    setErrorNameCollection({});
    setCollectionName(e.target.value);
  };

  const validateCollectionName = () => {
    if (!collectionName) {
      setErrorNameCollection({
        error: true,
        message: "El campo nombre esta vacio",
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

  const createCollection = (openCloseNewDebt) => {
    const validate = validateCollectionName();
    if (validate) {
      openCloseNewDebt(collectionName);
    }
  };

  return {
    openCloseWindow,
    openModal,
    createCollection,
    handlerNameCollection,
    collectionName,
    errorNameCollection,
  };
};
