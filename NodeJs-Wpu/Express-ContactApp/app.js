const express = require("express");
const app = express();
const { loadContact, findContact } = require("./utils/contacts.js");

const port = 3000;
const expressLayouts = require("express-ejs-layouts");

// menggunakan ejs
app.set("view engine", "ejs");
app.use(expressLayouts);

app.use(express.static("public"));

app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "Ichwan",
      email: "ichwan@gmail.com",
      nomor: "085719369799",
    },
    {
      nama: "Noerfitrah",
      email: "noerfitrah@gmail.com",
      nomor: "091280890649",
    },
    {
      nama: "Bayu",
      email: "bayu@gmail.com",
      nomor: "08567945345",
    },
  ];

  res.render("index", {
    nama: "Ichwan",
    title: "Halaman home",
    mahasiswa,
    layout: "layouts/main-layout",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "Halaman About",
    layout: "layouts/main-layout",
  });
});
app.get("/contact", (req, res) => {
  const contacts = loadContact();
  // console.log(contacts);

  res.render("contact", {
    title: "Halaman Contact",
    layout: "layouts/main-layout",
    contacts,
  });
});
app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama);
  // console.log(contacts);

  res.render("detail", {
    title: "Halaman Detail Contact",
    layout: "layouts/main-layout",
    contact,
  });
});

app.use("/", (req, res) => {
  res.status = 404;
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
