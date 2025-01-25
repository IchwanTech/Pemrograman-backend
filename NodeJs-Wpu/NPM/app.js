// console.log("Hello Ichwan!");

// fungsi validator adalah fungsi yang digunakan untuk melakukan validasi terhadap data yang kita punya

const validator = require("validator");
// const chalk = require("chalk");

console.log(validator.isEmail("ichwan@gmail.com"));
console.log(validator.isURL("https://www.google.com"));
console.log(validator.isMobilePhone("081234567890", "id-ID"));

// console.log(chalk.blue("Hello world!"));
(async () => {
  const chalk = await import("chalk");
  console.log(chalk.default.bgBlue("Hello, World!"));
  console.log(chalk.default.bgRed("Hello, World!"));
})();
