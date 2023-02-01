//jshint esversion:6

const express = require("express");
const bodyParser = require('body-parser');

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];

let hze = "Hacer Zeynep Karaosmanoglu"

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function(req, res) {

    // Formating date object to a string.
    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
 

    // Converts date to string.
    let day = today.toLocaleDateString("en-GB", options);

    // Calling EJS file to render.
    res.render("list", {
        kindOfDay: day, newListItems: items, uppertitle: hze});

});

app.post("/", function(req, res) {
    let item = req.body.newItem;

    items.push(item);

    res.redirect("/");

});

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});

