const fs = require("fs");
// mengimport chalk
const chalk = require("chalk");

const validator = require("validator");

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  //existsSync adalah fungsi yang digunakan untuk mengecek apakah sebuah folder sudah ada atau belum
  fs.mkdirSync(dirPath); //mkdirSync adalah fungsi yang digunakan untuk membuat folder
}

const filePath = "./data/contacts.json";
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "[]", "utf-8"); //writeFileSync adalah fungsi yang digunakan untuk membuat file
}

const simpanContact = (nama, email, nomor) => {
  const contact = { nama, email, nomor };
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);

  // cek duplikat
  const duplikat = contacts.find((contact) => contact.nama === nama);
  if (duplikat) {
    console.log(
      chalk.red.inverse.bold(
        "Contact sudah terdaftar sebelumnya, gunakan nama lain!"
      )
    );
    return false;
  }

  //  cek email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold("Email tidak valid!"));
      return false;
    }
  }

  // cek nomor
  if (!validator.isMobilePhone(nomor, "id-ID")) {
    console.log(chalk.red.inverse.bold("Nomor HP tidak valid!"));
    return false;
  }

  contacts.push(contact);
  // console.log(contacts);
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

  console.log(chalk.green.inverse.bold("Terima kasih sudah memasukkan data."));
};

module.exports = { simpanContact };
