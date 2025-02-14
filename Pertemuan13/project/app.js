import express from "express";
import routerKategori from "./app/api/v1/kategori/router.js";
import routerBuku from "./app/api/v1/buku/router.js";
const app = express();
const pattern = "/api/v1";

app.use(express.json());

app.use(pattern, routerKategori);
app.use(pattern, routerBuku);

app.listen(3000, () => {
  console.log("Server berjalan di port 3000");
});
