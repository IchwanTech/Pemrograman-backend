import express from "express";

const app = express();

app.use(express.json());

app.get("/data/:nama", (req, res) => {
  const nama = {
    nama: "Ichwan Noerfitrah",
    kelas: "web",
  };

  res.json({
    status: 200,
    messsage: "Data berhasil didapatkan",
    data: nama,
  });
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
