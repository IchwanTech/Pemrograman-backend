import express from "express";
import sequelize from "./app/utils/db_config.js";
const app = express();
import routerMahasiswa from "./app/api/v1/mahasiswa/router.js";
const patternApi = "/api/v1";

// cek koneksi
// app.get("/", async (req, res) => {
//   try {
//     await sequelize.authenticate();
//     console.log("Database berhasil connect");
//   } catch (error) {
//     console.log(error.message);
//   }
// });
app.use(express.json());
app.use(patternApi, routerMahasiswa);

app.listen(3000, () => {
  console.log("Server berjalan di port 3000");
});
