import { DataTypes } from "sequelize";

import sequelize from "../../../utils/config.js";

// mendefinisikan struktur tabel
//menggunakan pendekatan konsep Codefirst -db.define

const Buku = sequelize.define(
  "buku",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    judul_buku: {
      type: DataTypes.STRING(200),
      allowNull: false,
      validate: {
        notEmpty: { msg: "Judul buku tidak boleh kosong" },
      },
    },
    kategori_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "kategori",
        key: "id",
      },
      validate: {
        notEmpty: { msg: "Kategori ID tidak boleh kosong" },
        isInt: { msg: "Kategori ID harus berupa angka" },
      },
    },
    penulis: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: { msg: "Nama penulis tidak boleh kosong" },
      },
    },
    deskripsi: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Deskripsi tidak boleh kosong" },
      },
    },
    sampul: {
      type: DataTypes.STRING,
      allowNull: true,
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
  },
  {
    freezeTableName: true,
  }
);

sequelize.sync();

export default Buku;
