const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(`
--=(Warung BABA CHAN)=--

Daftar Menu:
- (NG) Nasi Goreng - 15.000
- (AG) Ayam Geprek - 10.000
- (AB) Ayam Bakar - 12.000
- (ET) Es Teh Manis - 5.000
- (EJ) Es Jeruk Peras - 8.000 
`);

const namaMenu = [];
const hargaMenu = [];

const tampilOpsi = () => {
  rl.question(
    `
Opsi:
1. Pesan
2. Daftar Pesanan
3. Keluar
Pilih (1/2/3): `,
    (pilihan) => {
      if (pilihan === "1") {
        pesanMakanan();
      } else if (pilihan === "2") {
        if (namaMenu.length === 0) {
          console.log("Anda Belum Memesan Apapun");
        } else {
          for (let i = 0; i < namaMenu.length; i++) {
            console.log(
              `${i + 1}. ${namaMenu[i]} - Rp. ${hargaMenu[i].toLocaleString()} `
            );
          }

          console.log("");

          const total = hargaMenu.reduce(
            (totalHarga, hargaSaatIni) => totalHarga + hargaSaatIni,
            0
          );
          console.log(`Total Harga: Rp. ${total.toLocaleString()}`);
        }
        tampilOpsi();
      } else if (pilihan === "3") {
        console.log("Terimakasih sudah berkunjung ke warung kami..");
        rl.close();
      } else {
        console.log("Pilihan tidak tersedia");
        tampilOpsi();
      }
    }
  );
};

tampilOpsi();

const pesanMakanan = () => {
  rl.question("Masukkan kode makanan: ", (menu) => {
    if (menu === "NG") {
      namaMenu.push("Nasi Goreng");
      hargaMenu.push(15000);
      console.log("Pesanan berhasil ditambahkan");
      tampilOpsi();
    } else if (menu === "AG") {
      namaMenu.push("Ayam Geprek");
      hargaMenu.push(10000);
      console.log("Pesanan berhasil ditambahkan");
      tampilOpsi();
    } else if (menu === "AB") {
      namaMenu.push("Ayam Bakar");
      hargaMenu.push(12000);
      console.log("Pesanan berhasil ditambahkan");
      tampilOpsi();
    } else if (menu === "ET") {
      namaMenu.push("Es Teh Manis");
      hargaMenu.push(5000);
      console.log("Pesanan berhasil ditambahkan");
      tampilOpsi();
    } else if (menu === "EJ") {
      namaMenu.push("Es Jeruk Peras");
      hargaMenu.push(8000);
      console.log("Pesanan berhasil ditambahkan");
      tampilOpsi();
    } else {
      console.log("Kode Makanan Salah");
      pesanMakanan();
    }
  });
};
