const fs = require("fs");
const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const PORT = 3000;

app.use("/api",express.json());

//creo dataLog e morgan
var dataLog = fs.createWriteStream(path.join(__dirname, "data.log"), {flags: "a"})
app.use(morgan("combined", {stream: dataLog}));

//Path iniziale per le rotte
app.use("/page", require("./routes/router"));

//Indico la cartella Public come punto di partenza delle risorse
app.use(express.static(path.join(__dirname, "public")));

//Attivo il serve su porta 3000
app.listen(PORT, () => {
    console.log(`Server in ascolto su porta ${PORT}`);
});

app.get("/api", (req, res) => {
    console.log(req.body);
    return res.json(
       "Simone",
    );
  });

  app.get("/404", (req, res) => {
    return res.sendFile(path.resolve("public", "views", "_404.html"));
  })