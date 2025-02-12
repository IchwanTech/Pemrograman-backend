import readline from "readline";
import validator from "validator";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const userData = [];

const tampilMenu = () => {
  console.log(`
====================================
|      Welcome to CoffeJahat       |
====================================

1. Daftar Akun
2. Login
3. Ubah Password
4. Keluar
`);
};

const tampilOpsi = () => {
  tampilMenu();
  rl.question("Silakan pilih opsi (1/2/3/4): ", (pilihan) => {
    switch (pilihan) {
      case "1":
        daftarAkun();
        break;
      case "2":
        login();
        break;
      case "3":
        ubahPassword();
        break;
      case "4":
        console.log("Terima kasih telah menggunakan layanan kami.");
        rl.close();
        break;
      default:
        console.log("Pilihan tidak tersedia, coba lagi.");
        tampilOpsi();
    }
  });
};

tampilOpsi();

const daftarAkun = () => {
  console.log(`
====================================
|          DAFTAR AKUN             |
====================================    
`);

  rl.question("Masukkan nama       : ", (name) => {
    if (!name.trim()) {
      console.log("Nama tidak boleh kosong!");
      return daftarAkun();
    }
    rl.question("Masukkan email      : ", (email) => {
      if (!validator.isEmail(email)) {
        console.log("Email tidak valid!");
        return daftarAkun();
      }
      rl.question("Masukkan password   : ", (password) => {
        if (!validator.isStrongPassword(password)) {
          console.log(
            "Password harus memiliki minimal 8 karakter, termasuk huruf besar, huruf kecil, angka, dan simbol."
          );
          return daftarAkun();
        }
        rl.question("Masukkan nomor HP   : ", (phone) => {
          if (!validator.isMobilePhone(phone, "id-ID")) {
            console.log("Nomor HP tidak valid!");
            return daftarAkun();
          }
          userData.push({ name, email, password, phone });
          console.log("Pendaftaran Berhasil!");
          tampilOpsi();
        });
      });
    });
  });
};

const login = () => {
  console.log(`
====================================
|             LOGIN                |
====================================`);

  rl.question("Masukkan email      : ", (email) => {
    const user = userData.find((u) => u.email === email);
    if (!user) {
      console.log("Email tidak terdaftar! Coba lagi.");
      return login();
    }
    rl.question("Masukkan password   : ", (password) => {
      if (user.password !== password) {
        console.log("Password salah! Coba lagi.");
        return login();
      }
      console.log("Login Berhasil!");
      tampilOpsi();
    });
  });
};

const ubahPassword = () => {
  console.log(`
====================================
|          UBAH PASSWORD           |
====================================`);
  rl.question("Masukkan email      : ", (email) => {
    const user = userData.find((u) => u.email === email);
    if (!user) {
      console.log(" Email tidak terdaftar! Coba lagi.");
      return ubahPassword();
    }
    rl.question("Masukkan password lama : ", (oldPassword) => {
      if (user.password !== oldPassword) {
        console.log("Password lama salah! Coba lagi.");
        return ubahPassword();
      }
      rl.question("Masukkan password baru : ", (newPassword) => {
        if (!validator.isStrongPassword(newPassword)) {
          console.log(
            "Password baru harus memiliki minimal 8 karakter, termasuk huruf besar, huruf kecil, angka, dan simbol."
          );
          return ubahPassword();
        }
        user.password = newPassword;
        console.log("Password berhasil diubah!");
        tampilOpsi();
      });
    });
  });
};
