const data = [
  { id: 1, name: "samsul", gender: "l" },
  { id: 2, name: "maryam", gender: "p" },
  { id: 3, name: "adit", gender: "l" },
  { id: 4, name: "siti", gender: "p" },
];

const daftar = () => {
  const laki = data.filter((item) => item.gender === "l");
  const perempuan = data.filter((item) => item.gender === "p");

  return `Jumlah Peserta: ${data.length}
    laki-laki: ${laki.length}
    - ${data[0].name}
    - ${data[2].name}
    Perempuan: ${perempuan.length}
    - ${data[1].name}
    - ${data[3].name}
    `;
};

// export daftar
module.exports = {
  daftar,
};
