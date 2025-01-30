// Inisiasi core module readline
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// buat variable array kosong untuk menampung data pesanan dan harga
let menu = [];
let harga = [];

const tampilMenu = () => {
  console.log(`
--=(Warung BABA CHAN)=--
        
Daftar Menu:
- (NG) Nasi Goreng - 15.000
- (AG) Ayam Geprek - 10.000
- (AB) Ayam Bakar - 12.000
- (ET) Es Teh Manis - 5.000
- (EJ) Es Jeruk Peras - 8.000`);
};

/**
 * Menampilkan opsi untuk pengguna dan meminta inputan berupa nomor opsi
 * Jika inputan tidak sesuai dengan opsi yang tersedia maka program akan menampilkan
 * pesan "Kode yang anda masukkan salah" dan meminta inputan lagi
 * Jika inputan sesuai dengan opsi yang tersedia maka program akan menjalankan fungsi
 * yang sesuai dengan opsi yang dipilih
 */
const pilihAksi = () => {
  console.log(`
Opsi :
1. Pesan
2. Daftar pesanan saya
3. Keluar`);
  rl.question("Pilih (1/2/3): ", (opsi) => {
    switch (opsi) {
      case "1":
        pesanan();
        break;
      case "2":
        datarPesanan();
        break;
      case "3":
        keluarProgram();
        break;
      default:
        console.log("Kode yang anda masukkan salah");
        pilihAksi();
        break;
    }
  });
};

const pesanan = () => {
  rl.question("Masukan Kode makanan : ", (kode) => {
    kode = kode.toLowerCase(); // Ubah ke huruf kecil agar mudah diperiksa

    if (kode === "ng") {
      menu.push("Nasi Goreng");
      harga.push(15000);
    } else if (kode === "ag") {
      menu.push("Ayam Geprek");
      harga.push(10000);
    } else if (kode === "ab") {
      menu.push("Ayam Bakar");
      harga.push(12000);
    } else if (kode === "et") {
      menu.push("Es Teh Manis");
      harga.push(5000);
    } else if (kode === "ej") {
      menu.push("Es Jeruk Peras");
      harga.push(8000);
    } else {
      console.log("Kode yang anda masukkan salah");
      return pesanan(); // Jika salah, ulangi input
    }

    console.log("Pesanan Berhasil Ditambahkan");
    pilihAksi();
  });
};

const datarPesanan = () => {
  if (menu.length === 0) {
    console.log("Anda belum memesan apapun");
  } else {
    for (let index = 0; index < menu.length; index++) {
      console.log(`${index + 1}. ${menu[index]} - ${harga[index]}`);
    }

    let totalBayar = harga.reduce((a, b) => a + b, 0);
    console.log(`Total bayar: ${totalBayar}`);
  }
  pilihAksi(); // Agar program kembali ke menu utama setelah melihat pesanan
};

const keluarProgram = () => {
  console.log("Terima kasih sudah berkunjung ke warung kami..");
  rl.close();
};

tampilMenu();
pilihAksi();
