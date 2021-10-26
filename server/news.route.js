let express = require("express");
const morgan = require("morgan")
const cors = require("cors")
const axios = require("axios")
const cheerio = require("cheerio")
let router = express.Router();


async function getNews(){
    const { data } = await axios.get("https://techcrunch.com/");
    const $ = cheerio.load(data);
    const cards = $(".post-block post-block--image post-block--unread");
      console.log(cards.length)
}

getNews()

// router.route("/todos").get((req, res, next) => {
  
// });



module.exports = router;