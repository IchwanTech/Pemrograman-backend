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
        rl.question("Masukkan kode makanan: ", (menu) => {
          if (menu === "NG") {
            namaMenu.push("Nasi Goreng");
            hargaMenu.push(15000);
            console.log("Pesanan berhasil ditambahkan");
          } else if (menu === "AG") {
            namaMenu.push("Ayam Geprek");
            hargaMenu.push(10000);
            console.log("Pesanan berhasil ditambahkan");
          } else if (menu === "AB") {
            namaMenu.push("Ayam Bakar");
            hargaMenu.push(12000);
            console.log("Pesanan berhasil ditambahkan");
          } else if (menu === "ET") {
            namaMenu.push("Es Teh Manis");
            hargaMenu.push(5000);
            console.log("Pesanan berhasil ditambahkan");
          } else if (menu === "EJ") {
            namaMenu.push("Es Jeruk Peras");
            hargaMenu.push(8000);
            console.log("Pesanan berhasil ditambahkan");
          } else {
            console.log("Kode makanan tidak ditemukan");
          }
          tampilOpsi();
        });
      } else if (pilihan === "2") {
        if (namaMenu.length === 0) {
          console.log("Anda Belum Memesan Apapun");
        } else {
          console.log("Daftar Pesanan Saya:");
          for (let i = 0; i < namaMenu.length; i++) {
            console.log(`${i + 1}. ${namaMenu[i]} - Rp. ${hargaMenu[i]}`);
          }
          const total = hargaMenu.reduce((totalHarga, hargaSaatIni) => {
            return totalHarga + hargaSaatIni;
          });
          console.log(`
Total Harga: Rp. ${total}`);
        }
        tampilOpsi();
      } else if (pilihan === "3") {
        console.log("Terimakasih sudah berkunjung kewarung kami..");
        rl.close();
      }
    }
  );
};

tampilOpsi();
