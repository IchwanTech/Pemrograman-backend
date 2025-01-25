// mengambil argumen dari terminal
// console.log(process.argv[2]);
const yargs = require("yargs");
const contacts = require("./contacts");

// console.log(yargs.argv);

yargs.command({
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
});

yargs.parse();
