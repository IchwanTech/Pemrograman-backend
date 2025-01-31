import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/api/data" && req.method === "GET") {
    const priaMahal = {
      nama: "Ichwan",
      alamat: "Bogor, Jawa Barat.",
      usia: 22,
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(priaMahal));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000..");
});
