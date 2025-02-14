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
      allowNull: true,
    },
    kategori_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "kategori",
        key: "id",
      },
    },
    penulis: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    deskripsi: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  }
);

sequelize.sync();

export default Buku;
