import { QuerylistOfUser, QueryUserById } from "../services/User.js";

const GetAllUsers = async (req, res) => {
  try {
    const userList = await QuerylistOfUser(); // Pastikan variabel ini ada
    return res.render("userAll", { userList }); // Sesuaikan dengan nama file EJS
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).send("Internal Server Error");
  }
};

const GetUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const userData = await QueryUserById(userId);

    if (!userData) {
      return res.status(404).send("User not found");
    }

    return res.render("userById", { userData });
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.status(500).send("Internal Server Error");
  }
};

export { GetAllUsers, GetUser };
