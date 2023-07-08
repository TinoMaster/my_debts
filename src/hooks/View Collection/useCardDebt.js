export const useCardDebt = (debt) => {
  const { deuda, pagada, pagos } = debt;

  const partial_payment = () => {
    if (!pagada.isDone && pagos.length === 0) {
      return 0;
    } else if (pagada.isDone) {
      return deuda;
    } else if (pagos.length > 0) {
      return pagos.reduce((res, ele) => (res += ele.cantidad), 0);
    }
  };
  const partialPayment = partial_payment();

  return { partialPayment };
};
