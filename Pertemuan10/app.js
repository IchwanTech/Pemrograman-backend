import express from "express";
import connect from "./koneksi.js";

const app = express();
app.use(express.json());

// app.get("/", (req, res) => {
//   // console.log('Database connect..');
//   if (connect) {
//     console.log("Database Connect");
//   }
// });

// Untuk penanganan error lebih mudah menggunakan
// async await dan mysql2/promise
//async await adalah fungsi
//error handling nya menggunakan try catch
// agar kodenya lebih mudah dibaca
//jika berjalan maka blok kode try akan dibaca
//jika salah maka catch dibaca
const validasi = (req, res, next) => {
  const { username, email } = req.body;

  if (!username || typeof username !== "string") {
    return res.status(400).json({
      message: "Nama harus diisi dan berupa string",
    });
  }

  if (!email || typeof email !== "string") {
    return res.status(400).json({
      message: "Email harus diisi dan berupa string",
    });
  }
  next();
};

app.get("/users", (req, res) => {
  const sql = "SELECT * from user";
  connect.query(sql, (err, data) => {
    if (sql) {
      res.status(200).json({
        message: "Data users",
        data: data,
      });
    } else {
      res.status(500).json({
        message: err.message,
      });
    }
  });
});

app.post("/users", validasi, (req, res) => {
  const { username, email } = req.body;
  const sql = `INSERT INTO user (username, email) VALUES ('${username}', '${email}')`;

  connect.query(sql, (err, data) => {
    if (err) {
      res.status(500).json({
        message: err.message,
      });
    } else {
      res.status(201).json({
        message: "Data Users berhasil ditambahkan",
      });
    }
  });
});

app.patch("/users/:id", validasi, (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;

  const sql = "UPDATE user SET username = ?, email = ? WHERE id = ?";

  connect.query(sql, [username, email, id], (err, data) => {
    if (err) {
      res.status(500).json({
        message: err.message,
      });
    } else {
      res.status(200).json({
        message: "Data User Berhasil diubah",
      });
    }
  });
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM user WHERE id = ${id}`;

  connect.query(sql, (err, data) => {
    if (err) {
      res.status(500).json({
        message: err.message,
      });
    } else {
      res.status(200).json({
        message: "Data User",
        data: data,
      });
    }
  });
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM user WHERE id = ${id}`;

  connect.query(sql, (err, data) => {
    if (err) {
      res.status(500).json({
        message: err.message,
      });
    } else {
      res.status(200).json({
        message: "Data User Berhasil dihapus",
      });
    }
  });
});

app.listen(3000, () => {
  console.log("Server berjalan di port 3000");
});
