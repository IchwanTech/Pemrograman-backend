class BangunDatar {
  constructor(name) {
    this.name = name;
  }

  hitung(value) {
    if (this.name == "Lingkaran") {
      console.log("Luas Lingkaran: " + 3.14 * value * value);
    } else if (this.name == "Persegi") {
      console.log("Luas Persegi: " + value * value);
    }
  }
}
class Electronics {
  constructor(name, type, price) {
    this.name = name;
    this.type = type;
    this.price = price;
  }

  tampilbarang() {
    return `
    Nama Barang: ${this.name}
    Type Barang: ${this.type}
    Harga      : ${this.price}
    `;
  }
}

const persegi = new BangunDatar("Persegi");
const lingkaran = new BangunDatar("Lingkaran");

export { persegi, lingkaran, Electronics };
