const host = "http://localhost:5000/api/v1";

export const urls = {
  register: `${host}/users/register`,
  login: `${host}/users/login`,
  islogin: `${host}/users/isLogin`,
  friend_request: `${host}/users/contactrequest`,
  friend_response: `${host}/users/response_friend_request`,
  getMyDebts: `${host}/debts`,
  createNewDebt: `${host}/debts`,
  deleteOneDebt: `${host}/debts`,
  addNewPay: `${host}/debts`,
  getContacts: `${host}/users/contacts`,
  deleteFriend: `${host}/users/delete_friend`,
  deleteFriendRequest: `${host}/users/delete_friend_request`,
};
