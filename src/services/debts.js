import { httpHelper } from "../utilities/httpHelper";
import { urls } from "../utilities/urls";

export const getDebts = async (token = "", id = "") =>
  await httpHelper(token).get(`${urls.getMyDebts}/${id}`);
