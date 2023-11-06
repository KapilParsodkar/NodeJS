function postmessages(req, res) {
  console.log("updating messages");
}

function getmessages(req, res) {
  res.send("<ul><li>hello kapil</li></ul>");
}

module.exports = {
  getmessages,
  postmessages,
};
