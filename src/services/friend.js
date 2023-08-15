import { httpHelper } from "../utilities/httpHelper";
import { urls } from "../utilities/urls";

export const frien_request = async (token, idRequester, username) => {
  const options = {
    body: { idRequester, username },
    headers: { "content-type": "application/json" },
  };
  return await httpHelper(token).post(urls.friend_request, options);
};

export const my_contacts = async (token, id) =>
  await httpHelper(token).get(`${urls.getContacts}/${id}`);

export const responseFriendRequest = async (
  token,
  idRequester,
  idReciever,
  response
) => {
  const options = {
    body: { idRequester, idReciever, response },
    headers: { "content-type": "application/json" },
  };
  return await httpHelper(token).post(urls.friend_response, options);
};

export const delete_friend = async (token, idRequester, idReciever) => {
  const options = {
    body: { idRequester, idReciever },
    headers: { "content-type": "application/json" },
  };
  return await httpHelper(token).post(urls.deleteFriend, options);
};
