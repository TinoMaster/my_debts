const host = "http://localhost:5000/api/v1";

export const urls = {
  register: `${host}/users/register`,
  login: `${host}/users/login`,
  islogin: `${host}/users/isLogin`,
  friend_request: `${host}/users/contactrequest`,
  friend_response: `${host}/users/response_friend_request`,
  getMyDebts: `${host}/debts`,
  getContacts: `${host}/users/contacts`,
  deleteFriend: `${host}/users/delete_friend`,
};
