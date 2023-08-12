import { httpHelper } from "../utilities/httpHelper";
import { urls } from "../utilities/urls";

export const frien_request = async (idRequester, username) => {
  const options = {
    body: { idRequester, username },
    headers: { "content-type": "application/json" },
  };
  return await httpHelper().post(urls.friend_request, options);
};
