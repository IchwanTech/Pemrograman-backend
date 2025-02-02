const fs = require("fs");

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  //existsSync adalah fungsi yang digunakan untuk mengecek apakah sebuah folder sudah ada atau belum
  fs.mkdirSync(dirPath); //mkdirSync adalah fungsi yang digunakan untuk membuat folder
}

const filePath = "./data/contacts.json";
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "[]", "utf-8"); //writeFileSync adalah fungsi yang digunakan untuk membuat file
}

const loadContact = () => {
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);
  return contacts;
};

// cari contact berdasarkan nama
const findContact = (nama) => {
  const contacts = loadContact();
  const contact = contacts.find((contact) => contact.nama === nama);
  return contact;
};

// menuliskan/menimpa file contacts.json dengan data baru
const saveContacts = (contacts) => {
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
};

//menambahkan data contact baru
const addContact = (contact) => {
  const contacts = loadContact();
  contacts.push(contact);
  saveContacts(contacts);
};

// cek nama yang sudah ada
const cekDuplikat = (nama) => {
  const contacts = loadContact();
  return contacts.find((contact) => contact.nama === nama);
};

// hapus contact
const deleteContact = (nama) => {
  const contacts = loadContact();
  const filtered = contacts.filter((contact) => contact.nama !== nama);
  saveContacts(filtered);
};

// mengubah data contact
const updateContact = (contactBaru) => {
  const contacts = loadContact();
  // hilangkan contact lama
  const filteredContacts = contacts.filter(
    (contact) => contact.nama !== contactBaru.oldNama
  );
  delete contactBaru.oldNama;
  filteredContacts.unshift(contactBaru);
  saveContacts(filteredContacts);
};

module.exports = {
  loadContact,
  findContact,
  addContact,
  cekDuplikat,
  deleteContact,
  updateContact,
};
