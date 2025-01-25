// Core Modules
// fs = file system
const fs = require("fs");

// console.log(fs);

// menuliskan string ke file (synchronous)

// try {
//   fs.writeFileSync("data/test.txt", "Hello World secara synchronous!");
// } catch (error) {
//   console.log(error);
// }

// menuliskan string ke file (asynchronous)
// fs.writeFile("data/test.txt", "Hello World secara asynchronous!", (error) => {
//   console.log(error);
// });

// membaca isi file (synchronous)
// const data = fs.readFileSync("data/test.txt", "utf-8");
// console.log(data);

// membaca isi file (asynchronous)
// const data = fs.readFile("data/test.txt", "utf-8", (error, data) => {
//   if (error) throw error;
//   console.log(data);
// });

// Readline
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Masukan nama anda: ", (nama) => {
  rl.question("Masukan nomor HP anda: ", (nomor) => {
    const contact = { nama, nomor };
    const file = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts = JSON.parse(file);
    contacts.push(contact);
    // console.log(contacts);
    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

    rl.close();
  });
});
