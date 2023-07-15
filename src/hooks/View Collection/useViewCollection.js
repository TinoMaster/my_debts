export const useViewCollection = (debts, name, _id) => {
  const collection_by_name = () => {
    return debts.filter(
      (debt) => debt.name === name && debt.creador?._id === _id
    );
  };

  return { collection_by_name };
};
