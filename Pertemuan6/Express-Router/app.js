import express from "express";
import routerProduct from "./routes/product.js";

const app = express();
const Port = 3000;

// cara menggunakan route hasil import
// maka dapat menggunakan app level middleware
app.use("/product", routerProduct);

app.listen(Port, () => {
  console.log("Server is running man");
});
