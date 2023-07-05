import debts from "../../jsons/prueba_deuda.json";
export const my_debts = () => {
  const collections = debts?.reduce((result, value) => {
    const check = {
      name: value.name,
      deuda: value.deuda,
    };

    if (result.length === 0) result.push(check);

    if (result.some((el) => el.name === check.name)) {
      result.forEach((el) =>
        el.name === check.name ? (el.deuda += check.deuda) : null
      );
    } else result.push(check);

    return result;
  }, []);

  return collections;
};
