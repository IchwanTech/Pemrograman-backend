import express from "express";
import router from "./routes/userData.js";

const app = express();
const port = 3000;

app.use(express.json());

//⁡⁣⁢⁣​‌‍‌𝗲𝘅𝗽𝗿𝗲𝘀𝘀.𝗷𝘀𝗼𝗻 𝗱𝗶𝗴𝘂𝗻𝗮𝗸𝗮𝗻 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗺𝗯𝗮𝗰𝗮 𝗱𝗮𝘁𝗮 𝗷𝘀𝗼𝗻⁡​

app.use("/user", router);

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
