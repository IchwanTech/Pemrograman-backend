import express from "express";
const app = express();
import router from "./routes/users.js";

app.use(express.json());

app.use("/users", router);

app.listen(3000, () => {
  console.log("Server berjalan dilokal 3000");
});
