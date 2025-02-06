import express from "express";

import expressEjsLayouts from "express-ejs-layouts";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(expressEjsLayouts);
app.set("layout", "./template/parent");

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
