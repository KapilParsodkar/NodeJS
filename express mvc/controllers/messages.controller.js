const path = require("path");

function postmessages(req, res) {
  console.log("updating messages");
}

function getmessages(req, res) {
  res.render("messages", {
    title: "Message to you",
    friend: "kaps",
  });
  // res.sendFile(path.join(__dirname, "..", "public", "images", "kaps.jpg"));
  //res.send("<ul><li>hello kapil</li></ul>");
}

module.exports = {
  getmessages,
  postmessages,
};
