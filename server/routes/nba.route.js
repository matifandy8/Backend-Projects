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

// async function getNews(){
//     const { data } = await axios.get(
//       "https://www.silverscreenandroll.com/lakers-schedule"
//     );
//     const $ = cheerio.load(data);
//     const cards = $(".c-compact-river__entry ");
//       console.log(cards.length)
// }

// getNews()

// CAMBIAR POR ALGO QUE ESTE CAMBIANDO DIA A DIA COMO ESTADISTICAS JUGADORES O EQUIPOS POSICIONES
async function getStatsPlayer() {
  const { data } = await axios.get(
    "https://www.cbssports.com/nba/stats/player/"
  );
  const $ = cheerio.load(data);
  const teams = [];
  $(".StatsTables").each((index, element) => {
    const $element = $(element);
    const title = $element.find(".Card-titleSeparate").text().replace("\n", "");
    const leadername = $element.find(".PlayerName a").text().replace("\n", "");
    const playername = $element.find(".CellPlayerName--long span a").text();
    const statnumberleader = $element
      .find(".StatsLeadersCard-statValue")
      .text()
      .replace("\n", "");
    const statnumberpayer = $element
      .find(".TableBase-bodyTd.TableBase-bodyTd--number")
      .text();

    const team = {
      title,
      leadername,
      playername,
      statnumberleader,
      statnumberpayer,
    };
    teams.push(team);
  });
  return teams;
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

router.route("/nba/stats/player").get(async (req, res) => {
  const teams = await getStatsPlayer();
  return res.json(teams);
});

module.exports = router;
