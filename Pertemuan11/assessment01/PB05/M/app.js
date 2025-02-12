import express from "express";
import router from "./router.js";

const app = express();

app.use("/user", router);

app.listen(3000, () => {
  console.log("server berjalan");
});
