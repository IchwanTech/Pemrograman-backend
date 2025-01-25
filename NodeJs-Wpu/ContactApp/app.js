const contacts = require("./contacts");

const main = async () => {
  const nama = await contacts.tulisPertanyaan("Masukan nama anda: ");
  const email = await contacts.tulisPertanyaan("Masukan email anda: ");
  const nomor = await contacts.tulisPertanyaan("Masukan nomor HP anda: ");

  contacts.simpanContact(nama, email, nomor);
};

main();
