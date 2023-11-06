const express = require("express");
const friendRouter = require("./Routes/friends.router.js");
const MessageRouter = require("./Routes/messages.router");
const app = express();

const hostname = "127.0.0.1";
const port = 3000;
const path = require("path");
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
//middleware take a request then by next it sends to the method which is in case get method friends so it calculates time taken for response to come from friends as start notes some time then next goes into friends method response comes from their then current time is subtracted from start time to calculate time of responsee
app.use((req, res, next) => {
  const start = Date.now();

  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});
// app.get("/", (req, res) => {
//   res.send("hello");
// });

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index", {
    title: "tiger",
    caption: "tigers are biggest cat",
  });
});

app.use("/friends", friendRouter);

app.use("/messages", MessageRouter);

app.get("/k", (req, res) => {
  res.send({
    id: 1,
    name: "kapil",
  });
});

app.listen(port, hostname, () => {
  console.log(`Listening on http://${hostname}:${port}/`);
});
