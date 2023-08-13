import { httpHelper } from "../utilities/httpHelper";
import { urls } from "../utilities/urls";

export const frien_request = async (token, idRequester, username) => {
  const options = {
    body: { idRequester, username },
    headers: { "content-type": "application/json" },
  };
  return await httpHelper(token).post(urls.friend_request, options);
};

export const my_contacts = async (token, id) => {
  return await httpHelper(token).get(`${urls.getContacts}/${id}`);
};
