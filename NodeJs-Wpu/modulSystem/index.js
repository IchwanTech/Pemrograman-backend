// const fs = require("fs"); //ini adalah core module
// const cetakNama = require("./coba.js"); //ini adalah local module
// const moment = require("moment"); //ini adalah third party module/ npm module/ node_modules

// const cetakNama = require("./coba.js");

const coba = require("./coba");
console.log(coba.cetakNama("Ichwan"));
console.log(coba.PI);
console.log(coba.mahasiswa.cetakMhs());
console.log(new coba.Orang());
