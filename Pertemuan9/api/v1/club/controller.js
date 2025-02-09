import players from "../player/model.js";
import clubs from "./model.js";

const tampilClub = (req, res) => {
    res.render("club/index", {
        clubs: clubs,
        judul: "Data Club",
        players: players
    })
};

export default tampilClub;