import { DataTypes } from "sequelize";
// import koneksi DB nya
import sequelize from "../../../utils/db_config.js";

// definisikan nama tabel beserta field didalamnya
const Mahasiswa = sequelize.define("mahasiswa", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nama: {
    type: DataTypes.STRING(99),
    // default nya senua field tabel dalam sequelize adalah notNull
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Nama mahasiswa tidak boleh kosong",
      },
      len: {
        args: [4, 10],
        msg: "Nama mahasiswa min.4/ max.10 karakter",
      },
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

sequelize.sync();
export default Mahasiswa;
