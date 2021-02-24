const express = require("express");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "Greenpeace 綠色和平 | 香港")
      .replace(/__DESCRIPTION__/g, "Greenpeace 綠色和平 | 內容")
      .replace(/__AUTHOR__/g, "Greenpeace 綠色和平")
      .replace(/__IMAGE__/g, "https://www.greenpeace.org/static/planet4-hongkong-stateless/2cac5add-wallpaper_banner.jpg")
      .replace(/__TYPE__/g, "website")
      .replace(/__FB_APP_ID__/g, "192994240714848")

    res.send(data)
  });
});

app.use(express.static(path.resolve(__dirname, "./build")))

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
