const express = require("express");
path = require("path");
cors = require("cors");
require("dotenv").config();
const chalk = require("chalk");
const app = express();
const PORT = process.env.PORT || 3500;

_0x5e7b60 = {};
_0x5e7b60.extended = true;

app.use(express.urlencoded(_0x5e7b60));

const fs = require("fs");

app.use(express.json());

// async function regenToken() {
//   let _0x417804 = require("./helper/refreshToken1");
//   let _0x5ee048 = await _0x417804();
//   if (_0x5ee048.success) {
//     console.log(_0x5ee048.message);
//   } else {
//     console.log("error while genrating refreshToken Token\nPlease login again");
//   }
// }
// if (fs.existsSync("tokenData.jiotv")) {
// }

!fs.existsSync("CookeyData.jiotv") &&
  fs.writeFileSync("./CookeyData.jiotv", "{}");

app.use(cors());

const loginRoute = require("./routes/login1");
ipRoute = require("./routes/ip1");
channelsRoute = require("./routes/channel1");
// const playlistRoute = require("./routes/playlist1");

app.use("/", loginRoute);
app.use("/", ipRoute);
app.use("/", channelsRoute);
// app.use("/", playlistRoute);

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log("TV server is running on port " + PORT);
});
