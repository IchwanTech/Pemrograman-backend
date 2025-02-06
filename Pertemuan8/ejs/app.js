import express from "express";

import expressEjsLayouts from "express-ejs-layouts";
const app = express();

// melakukan konfigurasi middleware untuk aplikasi
//gunakan app.set()
app.set("view engine", "ejs");
app.use(expressEjsLayouts);
app.get("/", (req, res) => {
  res.send("<h1>Ini route / </h1>");
});

app.get("/", (req, res) => {
  //mengakses atau menampilkan isi file
  res.render("Ini route utama");
});

app.get("/dashboerd", (req, res) => {
  res.render("template/parent");
});

app.listen(3000, () => {
  console.log("Server berjalan di 3000...");
});
