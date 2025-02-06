import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";
// konfigurasi utama untuk template yang berada didalam direktori public

import { fileURLToPath } from "url";

const app = express();
app.set("view engine", "ejs");
app.use(expressEjsLayouts);
app.set("layout", "./template/parent");
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// agar file css dan js kebaca maka gunakan express.static()
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("Ini route utama");
});
app.get("/dashboard", (req, res) => {
  res.render("template/parent");
});

app.listen(3000, () => {
  console.log("Server is running..");
});
