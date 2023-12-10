const express = require("express");
const router = express.Router();
const path = require("path");

module.exports = router
  .get("/:id", (req, res) => {
    let id = parseInt(req.params.id);

    if (id === 1) {
      return res.sendFile(path.resolve("public", "views", "page1.html"));
    }
    if (id === 2) {
      return res.sendFile(path.resolve("public", "views", "page2.html"));
    } else {
      return res.redirect("/404");
    }
  })


  
