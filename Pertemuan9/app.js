import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";
import routerClub from "./api/v1/club/router.js";
import routerPlayer from "./api/v1/player/router.js";



import { fileURLToPath } from "url";

const app = express();

app.set("view engine", "ejs");
app.use(expressEjsLayouts)
app.set("layout", "./template/app");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, "public")));

app.use("/club", routerClub);
app.use("/player", routerPlayer);



app.listen(3000, () => {
    console.log("Server berjalan di port 3000");
});