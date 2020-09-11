var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/fallinlovewith/:thing", function (req, res) {
    var thing = req.params.thing;
    res.render("love", { thingVar: thing });
});

app.get("/posts", function (req, res) {
    var posts = [
        { title: "post 1", author: "Sysy" },
        { title: "post 2", author: "Trtr" },
        { title: "post 3", author: "Oiod" },
    ];
    res.render("posts", { posts: posts });
});

app.listen(4333, function () {
    console.log("Server is listening");
});
