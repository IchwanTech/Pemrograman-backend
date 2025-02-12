import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Assessment Pemrograman Backend");
});

app.listen(3000, () => {
  console.log("Server berjalan di poert 3000");
});
