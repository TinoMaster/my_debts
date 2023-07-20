import { httpHelper } from "../utilities/httpHelper";
import { urls } from "../utilities/urls";

export const getDebts = async (token = "", id = "") => {
  const response = await httpHelper(token).get(`${urls.getMyDebts}/${id}`);
  return response;
};
