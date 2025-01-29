const fs = require("fs");
const folder = "folder";
// existsSync adalah fungsi yang digunakan untuk mengecek apakah sebuah folder sudah ada atau belum
if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder);
}
for (let i = 1; i <= 3; i++) {
  fs.writeFileSync(`${folder}/tes${i}.txt`, `Halo${i}`);
  console.log(`File tes${i}.txt telah dibuat.`);
}
