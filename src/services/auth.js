import { httpHelper } from "../utilities/httpHelper";
import { urls } from "../utilities/urls";

export const register_user = async (user) => {
  const options = {
    body: user,
    headers: { "content-type": "application/json" },
  };
  return await httpHelper().post(urls.register, options);
};
