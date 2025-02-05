import { USER_DATA } from "../models/UserData.js";

const QueryUserById = (id) => {
  USER_DATA.forEach((userData) => {
    user = userData;
  });
  return user;
};

// mengambil seluruh data user
const QuerylistOfUser = () => {
  return USER_DATA;
};

// delete user
export { QueryUserById, QuerylistOfUser };
