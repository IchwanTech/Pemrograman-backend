class BangunDatar {
  constructor(name) {
    this.name = name;
  }

  hitung(param) {
    if (this.name == "Lingkaran") {
      console.log("Luas lingkaran = " + 3.14 * param * param);
    } else if (this.name == "Persegi") {
      console.log("Luas persegi = " + param * param);
    }
  }
}

const lingkaran = new BangunDatar("Lingkaran");
const persegi = new BangunDatar("Persegi");

export { lingkaran, persegi };
