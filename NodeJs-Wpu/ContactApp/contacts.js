const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  //existsSync adalah fungsi yang digunakan untuk mengecek apakah sebuah folder sudah ada atau belum
  fs.mkdirSync(dirPath); //mkdirSync adalah fungsi yang digunakan untuk membuat folder
}

const filePath = "./data/contacts.json";
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "[]", "utf-8"); //writeFileSync adalah fungsi yang digunakan untuk membuat file
}

const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, rejects) => {
    rl.question(pertanyaan, (nama) => {
      resolve(nama);
    });
  });
};

const simpanContact = (nama, email, nomor) => {
  const contact = { nama, email, nomor };
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);
  contacts.push(contact);
  // console.log(contacts);
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

  console.log("Terima kasih sudah memasukkan data.");

  rl.close();
};

module.exports = { tulisPertanyaan, simpanContact };
