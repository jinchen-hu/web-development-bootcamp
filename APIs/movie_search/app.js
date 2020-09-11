const express = require("express");
const app = express();
const axios = require("axios");

app.set("view engine", "ejs");
//app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("search");
});

app.get("/results", (req, res) => {
    var query = req.query.search;
    var url = `http://www.omdbapi.com/?s=${query}&apikey=thewdb`;
    axios
        .get(url)
        .then((response) => {
            res.render("results", { data: response.data.Search });
        })
        .catch((err) => {
            console.log(err);
        });
});

app.listen(3000, () => {
    console.log("Server Started!!");
});
