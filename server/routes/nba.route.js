let express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
let router = express.Router();
let data = fs.readFileSync("./teams.json");
let teams = JSON.parse(data);

router.route("/nba/teams").get((req, res, next) => {
  return res.json(teams);
  if (err) return next(err);
});
router.route("/nba/teams/:id").get((req, res, next) => {
  let id = req.params.id;
  for (let team of teams) {
    if (team.id === id) {
      return res.json(team);
    }
  }
  if (err) return next(err);
});



// CAMBIAR POR ALGO QUE ESTE CAMBIANDO DIA A DIA COMO ESTADISTICAS JUGADORES O EQUIPOS POSICIONES
async function getTeamsPlayers(team) {
  const { data } = await axios.get(
    `https://www.foxsports.com/nba/${team}-team-roster`
  );
  const $ = cheerio.load(data);
  const players = [];
  $("tr").each((index, element) => {
    const $element = $(element);
    const name = $element.find(".table-entity-name.ff-s").text();
    const image = $element.find(".cell-logo.table-logo.player-headshot.image-headshot img").attr("src");
    const position = $element.find("td:nth-child(2)").text().replace(/(\s+)/g, '');
    const age = $element.find("td:nth-child(3)").text().replace(/(\s+)/g, '');
    const heigth = $element.find("td:nth-child(4)").text().replace(/(\s+)/g, '');
    const weight = $element.find("td:nth-child(5)").text().replace(/(\s+)/g, '');
    console.log(name === "");
    const player= {
      name,
      image,
      position,
      age,
      heigth,
      weight,
    };
    players.push(player);
  });
  return players;
}

// async function getTeams() {
//   const { data } = await axios.get(
//     "https://www.espn.com.uy/basquetbol/nba/equipos"
//   );
//   const $ = cheerio.load(data);
//   const teams = [];
//   $(".ContentList__Item").each((index, element) => {
//     const $element = $(element);
//     const name = $element.find(".clr-gray-01").text();
//     const image = $element.find(".Image.Logo.Logo__lg").attr("src");
//     const team = {
//       name,
//       image,
//     };
//     teams.push(team);
//   });
//   return teams;
// }

router.route("/nba/name").get(async (req, res) => {
  let nameteam = "cleveland-cavaliers"
  const players = await getTeamsPlayers(nameteam);
  return res.json(players);
});

module.exports = router;
