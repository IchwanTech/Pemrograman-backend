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
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    // memberikan default value
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
