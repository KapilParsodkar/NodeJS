const model = require("../models/friends.model");

function postfriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing friend name",
    });
  }
  const newFriend = {
    name: req.body.name,
    id: model.length,
  };
  model.push(newFriend);

  res.json(newFriend);
}

function getfriends(req, res) {
  res.json(model);
}

function getindividualfriend(req, res) {
  const friendsid = Number(req.params.friendid);
  const friend = model[friendsid];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist",
    });
  }
}

module.exports = {
  getindividualfriend,
  getfriends,
  postfriend,
};
