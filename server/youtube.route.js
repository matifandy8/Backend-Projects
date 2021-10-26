const cors = require('cors')
const ytdl = require("ytdl-core");
const express = require("express");


let router = express.Router();


router.route("/download").get(async(req, res, next) => {
 try {
    const { URL, downloadFormat, quality, title } = req.query;
    if (downloadFormat === "audio-only") {
      res.setHeader(
        "Content-Disposition",
        `attachment; filename=${title.substring(0, 40)}.mp3`
      );
      ytdl(URL, {
        filter: (format) => format.container === "m4a" && !format.encoding,
        quality: quality === "high" ? "highest" : "lowest",
      }).pipe(res);
    } else {
      res.header(
        "Content-Disposition",
        `attachment; filename="${title.substring(0, 25)}.mp4"`
      );
      ytdl(URL, {
        filter: downloadFormat === "video-only" ? "videoonly" : "audioandvideo",
        quality: quality === "high" ? "highestvideo" : "lowestvideo",
      }).pipe(res);
    }
  } catch (e) {
    console.log(e);
  }
});

router.route("/check-download").get( async (req, res, next) => {
  try {
    const { URL } = req.query;
    const {
      player_response: {
        videoDetails: { title, author },
      },
    } = await ytdl.getBasicInfo(URL);
    res.json({
      status: true,
      title,
      author,
    });
    next();
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;