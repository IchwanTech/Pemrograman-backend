import express from "express";
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Ini jalur Utama",
  });
});

// fungsi middleware
let user = [
  { id: "1", name: "Ichwan Noerfitrah", age: 22 },
  { id: "2", name: "Babachan", age: 19 },
  { id: "3", name: "Slamet Cahyadi", age: 34 },
];
app.get("/user", (req, res) => {
  res.json({
    status: 200,
    message: "Succesful",
    data: user,
  });
});

const cekParam = (req, res, next) => {
  const cekId = req.params.id;
  if (isNaN(cekId)) {
    res.status(400).json({
      message: "Inputan tdak sesuai",
    });
  } else {
    //Next digunakan untuk mengambil respons dari res.json
    //yang ada di rute/jalur app.get("user/data/:id")
    next();
  }
};

// membuat validasi kalo inputan user == kosong
//atau inputan user == number
// const validasi = (req, res, next) => {
//   const { nama, usia } = req.body;
//   if (!nama || typeof nama !== "string") {
//     res.status(400).json({
//       message: "Nama harus diisi, atau berupa string ",
//     });
//   } else if (!usia || typeof usia !== "number") {
//     res.status(400).json({
//       message: "Usia harus diisi angka/berupa number",
//     });
//   }
//   next();
// };

const validasi = (req, res, next) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "admin123") {
    next();
  } else {
    res.status(401).json({
      message: "Username atau password salah",
    });
  }
};

//simulasi  buat jalur POST
//menerima kiriman data dari client
//route level middleware
app.post("/login", validasi, (req, res) => {
  // buat destructuring dari inputan user
  const { nama, usia } = req.body;
  res.json({
    status: 200,
    message: "Anda berhasil login",
  });
});

app.get("/user/:id", cekParam, (req, res) => {
  const id = req.params.id;
  console.log(typeof id);

  const dataUser = user.find((element) => element.id === id);
  if (!dataUser) {
    res.json({
      status: 404,
      message: "Data tidak ditemukan",
    });
    return;
  }

  res.json({
    status: 200,
    message: "Data berhasil didapatkan",
    data: dataUser,
  });
});

app.listen(PORT, () => {
  console.log("Server is running mann..");
});
