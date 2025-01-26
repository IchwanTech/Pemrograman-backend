const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // res.send("Hello World!");

  res.sendFile("./index.html", { root: __dirname });

  // res.json({
  //   nama: "Ichwan",
  //   email: "ichwan@gmail.com",
  //   nomor: "08123456789",
  // });
});
app.get("/about", (req, res) => {
  // res.send("Ini adalah halaman about");

  res.sendFile("./about.html", { root: __dirname });
});
app.get("/contact", (req, res) => {
  // res.send("Ini adalah halaman contact");

  res.sendFile("./contact.html", { root: __dirname });
});

app.get("/product/:id", (req, res) => {
  res.send(`
    Product ID : ${req.params.id} </br> Category : ${req.query.category}
  `);
});

app.use("/", (req, res) => {
  res.status = 404;
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// const http = require("http");
// const fs = require("fs");

// const port = 3000;

// const renderHtml = (path, res) => {
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       res.writeHead(404);
//       res.write("Error: file not found");
//     } else {
//       res.write(data);
//     }
//     res.end();
//   });
// };

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     "content-type": "text/html",
//   });

//   const url = req.url;
//   switch (url) {
//     case "/about":
//       renderHtml("./about.html", res);
//       break;
//     case "/contact":
//       renderHtml("./contact.html", res);
//       break;
//     default:
//       renderHtml("index.html", res);
//       break;
//   }

//   // if (url === "/about") {
//   //   renderHtml("./about.html", res);
//   // } else if (url === "/contact") {
//   //   renderHtml("./contact.html", res);
//   // } else {
//   //   // res.write("Hello World");
//   //   renderHtml("./index.html", res);
//   // }
// });

// server.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
