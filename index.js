const express = require("express");
const app = express();
var cors = require("cors");
const bodyParser = require("body-parser");

const data = require("./data.js");

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('This is my states API!')
})

app.get("/states", (req, res) => {
  const states = Object.keys(data).sort()
  res.send(states);
});

app.get('/states/:id', (req, res) => {
  res.send(data[req.params.id])
})

const port = 3001;

app.listen(port, (err, res) => {
  if (err) {
    console.log(err);
    return res.status(500).send(err.message);
  } else {
    console.log("[INFO] Server Running on port:", port);
  }
});
