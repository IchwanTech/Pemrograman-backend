const fs = require("fs");

//membuat folder yang bernama folder yang mempunyai data tes1.txt, tes2.txt, dan tes3.txt
// menggunakan looping

fs.mkdirSync("folder");

for (let i = 1; i <= 3; i++) {
  fs.writeFileSync(`folder/tes${i}.txt`, `Halo${i}`);
  console.log(`File tes${i}.txt telah dibuat!`);
}
