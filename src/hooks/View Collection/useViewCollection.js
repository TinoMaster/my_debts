export const useViewCollection = (debts, name) => {
  const collection_by_name = () => {
    return debts.filter((debt) => debt.name === name);
  };

  return { collection_by_name };
};
