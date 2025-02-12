import express from "express";
import router from "./app/api/v1/kategori/router.js";

const app = express();

app.use("/kategori", router);

app.listen(3000, () => {
  console.log("server berjalan");
});
