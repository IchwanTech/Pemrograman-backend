import { DataTypes } from "sequelize";
import sequelize from "../../../utils/config.js";

const Kategori = sequelize.define(
  "kategori",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nama_kategori: {
      type: DataTypes.STRING(99),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Nama kategori tidak boleh kosong",
        },
        len: {
          args: [4, 10],
          msg: "Nama kategori harus memiliki min. 4 / max. 10 karakter",
        },
        isAlpha: {
          msg: "Nama kategori hanya boleh berisi huruf (tanpa angka atau simbol)",
        },
        notContains: {
          args: ["admin"],
          msg: "Nama kategori tidak boleh mengandung kata 'admin'",
        },
        isLowercase: {
          msg: "Nama kategori harus menggunakan huruf kecil semua",
        },
      },
    },

    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    freezeTableName: true,
  }
);

sequelize.sync();

export default Kategori;
