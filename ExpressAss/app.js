var express = require("express");

var app = express();

app.get("/", function (req, res) {
    res.send("Hi, there, welcome to my assignment!");
});

app.get("/speak/:animal", function (req, res) {
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof",
        cat: "Meew",
        fish: "...",
    };
    var animal = req.params.animal;
    var sound = sounds[animal];
    res.send("The " + animal + " says " + sound);
});

app.get("/repeat/:word/:times", function (req, res) {
    var word = req.params.word;
    var times = Number(req.params.times);
    var contents = "";
    for (let i = 0; i < times; i++) {
        contents += word + " ";
    }
    res.send(contents);
});

app.get("*", function (req, res) {
    res.send("NOT FOUND");
});

app.listen(4444, function () {
    console.log("Server Started!!!" + process.env.PORT + " " + process.env.IP);
});
