const express = require("express");
const app = express();

const PORT = process.env.PORT || 10000;

// Change these
const USERNAME = "test";
const PASSWORD = "123456";

const PLAYLIST_URL =
  "https://raw.githubusercontent.com/rhymeeee2020-sketch/M3u/refs/heads/main/tv2";

app.get("/get.php", (req, res) => {
  const { username, password } = req.query;

  if (
    username === USERNAME &&
    password === PASSWORD
  ) {
    return res.redirect(PLAYLIST_URL);
  }

  return res.status(401).send("Invalid login");
});

app.get("/", (req, res) => {
  res.send("IPTV Auth Server Running");
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
