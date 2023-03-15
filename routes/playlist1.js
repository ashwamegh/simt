const express = require("express");
router = express.Router();
fetch = require("node-fetch");
const fs = require("fs");
playlist = require("../helper/genPlaylist");
PORT = process.env.PORT || 3500;

router.get("/playlist", async (_0x43f1fd, _0x276be1) => {
  _0x276be1.contentType("application/vnd.apple.mpegurl");
  let _0x4f831b;
  if (fs.existsSync("ipData.jiotv")) {
    _0x4f831b = fs.readFileSync("ipData.jiotv", {
      encoding: "utf8",
      flag: "r",
    });
  } else {
    _0x4f831b = "127.0.0.1";
  }
  const _0x3cd340 = await playlist(_0x4f831b + ":" + PORT);
  _0x276be1.status(200).send(_0x3cd340);
});

router.get("/playlist/download", async (_0x582417, _0xe5b6d9) => {
  _0xe5b6d9.contentType("application/vnd.apple.mpegurl");
  _0xe5b6d9.setHeader(
    "Content-Disposition",
    "attachment; filename=playlist.m3u8"
  );
  let _0xe8d223;
  if (fs.existsSync("ipData.jiotv")) {
    _0xe8d223 = fs.readFileSync("ipData.jiotv", {
      encoding: "utf8",
      flag: "r",
    });
  } else {
    _0xe8d223 = "127.0.0.1";
  }
  const _0x365405 = await playlist(_0xe8d223 + ":" + PORT);
  _0xe5b6d9.status(200).send(_0x365405);
});

router.get("/playlist/json", async (_0x23659d, _0x3360fa) => {
  if (fs.existsSync("channels.jiotv")) {
    response = JSON.parse(
      fs.readFileSync("channels.jiotv", {
        encoding: "utf8",
        flag: "r",
      })
    );
    _0x3360fa.status(200).send(response);
  } else {
    _0x3360fa.redirect("/updateplaylist");
  }
});

router.get("/updateplaylist", async (_0x1b2fbe, _0x4fbe97) => {
  const _0x4326b3 = {
    method: "GET",
    params: {},
    headers: {},
  };
  _0x4326b3.headers.Accept = "*/*";
  _0x4326b3.headers["User-Agent"] =
    "plaYtv/7.0.8 (Linux;Android 7.1.2) ExoPlayerLib/2.11.7";
  var _0x196bce = _0x4326b3;
  let _0x30b1fd = await fetch(
    "https://jiotv.data.cdn.jio.com/apis/v1.4/getMobileChannelList/get/?os=android&devicetype=phone",
    _0x196bce
  );
  _0x30b1fd = await _0x30b1fd.json();
  fs.writeFileSync("./channels.jiotv", JSON.stringify(_0x30b1fd));
  _0x4fbe97.status(200).send(_0x30b1fd);
});
module.exports = router;
