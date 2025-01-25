// mengambil argumen dari terminal
// console.log(process.argv[2]);
const yargs = require("yargs");
const contacts = require("./contacts");

// console.log(yargs.argv);

yargs
  .command({
    command: "add",
    describe: "Menambahkan contact baru",
    Buidler: {
      nama: {
        describe: "Nama lengkap",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "Email",
        demandOption: false,
        type: "string",
      },
      nomor: {
        describe: "Nomor HP",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      contacts.simpanContact(argv.nama, argv.email, argv.nomor);
    },
  })
  .demandCommand();

// menampilkan daftar semua nama dan nomor HP contact
yargs.command({
  command: "list",
  describe: "Menampilkan semua nama dan nomor HP contact",
  handler() {
    contacts.listContact();
  },
});

// menampilkan detail sebuah contact berdasarkan nama
yargs.command({
  command: "detail",
  describe: "Menampilkan detail sebuah contact berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contacts.detailContact(argv.nama);
  },
});

// menghapus contact berdasarkan nama
yargs.command({
  command: "delete",
  describe: "Menghaspus sebuah contact berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contacts.deleteContact(argv.nama);
  },
});

yargs.parse();
