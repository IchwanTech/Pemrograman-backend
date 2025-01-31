import http from "http";

const port = 3000;
const server = http.createServer((req, res) => {
  // menentukan response type header(data yang mau dikirim)
  // menggunakan writeHead(HTTP_RESPONSE_CODE<{Tipe datanya apa})
  //   ini kalo json
  // res.writeHead(200, { "content-type": "application/json" });
  //   res.end(
  //     JSON.stringify({
  //       data: "Hello world",
  //     })
  //   );
  //   //lalu ini untuk plain text
  //   res.writeHead(200, { "content-type": "text/plain" });
  //   res.end("Ini dari serve Nodejs");
  //   Ini kalo html
  res.writeHead(200, { "content-type": "text/html" });
  res.end("<h1>Ini dari server Node.js</h1>");
  //res.wrideHead(digunakan untuk menentukan jenis header(data) saja)
  //tidak bisa digunakan untuk mengirim data
  //res,,end(digunakan untuk mengakhiri permintaan)
  //dan dapat digunakan untuk mengirim data
  //res.write(digunakan utnuk menulis atau mengiiri data)

  //jadi format penulisan nya kaya gini
  //1. res.writeHead
  //2. res.write
  //res.end
});
server.listen(port, () => {
  console.log(`Server dijalankan pada port ${port}`);
});
