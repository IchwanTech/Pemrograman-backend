import express from "express";
import router from "./routes/userData.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/user", router);

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
