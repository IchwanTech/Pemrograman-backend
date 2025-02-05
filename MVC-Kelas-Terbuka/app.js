import express from "express";
import * as path from "path";

import { routerUser } from "./src/routes/User.js";
const app = express();
const port = 3000;

// app setting
app.set("view engine", "ejs");
app.set("views", path.resolve("./src/views"));

// url handling
app.use("/user", routerUser);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
