const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Siapa nama anda ?", (nama) => {
  rl.question("Berapa umur Anda ?", (umur) => {
    rl.question("Gender ?", (gender) => {
      //  Jika umur lebih dar1 15 tahun naka dia dewasa nary operator
      if (umur > 15) {
        umur = "Dewasa";
      } else {
        umur - "Anak-anak";
      }
      console.log(`Terima kasih: ${nama} usia anda adalah ${umur}`);
      rl.close();
    });
  });
});
