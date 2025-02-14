// import semua tabel yang berhubungan/relasi
import Buku from "../buku/model.js";
import Kategori from "../kategori/model.js";

//definisikan hubungan antar table tersebut
//mau hasOne?
//mau hasMany?
//atau belongsTo bree?

Kategori.hasMany(Buku, { foreignKey: "kategori_id" });
Buku.belongsTo(Kategori, { foreignKey: "kategori_id" });

export { Buku, Kategori };
