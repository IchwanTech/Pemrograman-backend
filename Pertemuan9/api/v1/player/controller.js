import players  from "./model.js";
import clubs from "../club/model.js";
const tampilPlayer = (req, res) => {
    res.render("player/index", {
        clubs: clubs,
        players: players,
        judul: "Data Player"
    })
};

export { tampilPlayer };