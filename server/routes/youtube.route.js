let express = require("express");
const ytdl = require("ytdl-core");
let router = express.Router();



// videos
router.route("/video").get(async (req, res) => {
  console.log(req.query.videoId);
  const videoId = req.query.videoId
  let info = await ytdl.getInfo(videoId);
  res.json(info);
});


// audio
router.route("/audio").get(async (req, res) => {
  const videoId = req.query.videoId;
  let info = await ytdl.getInfo(videoId);
  let audioFormats = ytdl.filterFormats(info.formats, "audioonly");
  res.json(audioFormats);
});

// Download video with custom title and quality
router.route("/download").get(async (req, res) => {
  const { itag, title, type } = req.query;
  const videoId = req.query.videoId;

  if (type === "mp4") {
    res.header("Content-Disposition", `attachment; filename="${title}.mp4"`);
    res.header("Content-Type", "video/mp4");
  } else if (type === "mp3") {
    res.header("Content-Disposition", `attachment; filename="${title}.mp3"`);
    res.header("Content-Type", "audio/mp3");
  }

  ytdl(videoId, { filter: (format) => format.itag === parseInt(itag) }).pipe(
    res
  );
});

module.exports = router;
