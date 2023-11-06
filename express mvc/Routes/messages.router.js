const express = require("express");

const MessaggesController = require("../controllers/messages.controller");

const MessageRouter = express.Router();

MessageRouter.get("/", MessaggesController.getmessages);
MessageRouter.get("/", MessaggesController.postmessages);

module.exports = MessageRouter;
