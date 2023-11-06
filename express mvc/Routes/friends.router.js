const express = require("express");
const friendsController = require("../controllers/friends.controller");
const friendRouter = express.Router();

friendRouter.use((req, res, next) => {
  console.log("ip address :", req.ip);
  next();
});

friendRouter.get("/", friendsController.getfriends);
friendRouter.get("/:friendid", friendsController.getindividualfriend);
friendRouter.post("/", friendsController.postfriend);

module.exports = friendRouter;
