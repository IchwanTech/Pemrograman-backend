import https from "https";

// pakai API public
const url = "https://jsonplaceholder.typicode.com/users";

const req = https.request(url, (res) => {
  //   event res.on
  //   1. data = untuk mengambil datanya
  //   2. end = menutup request
  //   3. error = kalau semisal koneksi terputus
  //   4. write = menulis data(biasanya ini digunakan unuk method post)
  //   ambil data response nya
  res.on("data", (then) => {
    // data pada parameter Tangkapdata masih berupa buffer
    // olehkarena itu harus diparsing dulu menggunakan toString()
    console.log(then.toString());
  });

  res.on("error", (err) => {
    console.error(err.message);
  });

  res.on("end", () => {
    console.log("Permintaan diakhiri");
  });
});

req.end();
