// syncronous

// const getUserSync = (id) => {
//   //   let nama = "";
//   //   if (id === 1) {
//   //     nama = "samsul";
//   //   } else {
//   //     nama = "maryam";
//   //   }
//   const nama = id === 1 ? "samsul" : "maryam";
//   return { id, nama };
// };

// const userSatu = getUserSync(1);
// console.log(userSatu);

// const userDua = getUserSync(2);
// console.log(userDua);

// const halo = "Hello World!";
// console.log(halo);

// asyncronous

const getUser = (id, cb) => {
  const time = id === 1 ? 3000 : 2000;
  setTimeout(() => {
    const nama = id === 1 ? "Ichwan" : "Noerfitrah";
    cb({ id, nama });
  }, time);
};

const userSatu = getUser(1, (user) => {
  console.log(user);
});

const userDua = getUser(2, (user) => {
  console.log(user);
});

const halo = "Hello World!";
console.log(halo);
