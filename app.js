//jshint esversion:6

const express = require("express");
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");
const mongoose = require("mongoose");
const {Schema} = require("mongoose");
const {model} = require("mongoose");

const app = express();

//mongoose
mongoose.connect("mongodb://localhost:27017/todolistDB").then(() => console.log("Connected"));

const itemsSchema = new Schema({
    title: {type: String, required: 1}
})

const Item = new model("Item", itemsSchema);

// const item1 = new Item ({title: "Start here"});

// item1.save().then(() => console.log("item1 saved"));

// const item2 = new Item ({title: "Write here"});

// item2.save().then(() => console.log("item2 saved"));

let items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];


app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

app.get("/", async function (req, res) {

    const day = date.getDate();
    items = await Item.find({});
    // Calling EJS file to render.
    res.render("list", {
        listTitle: day,
        newListItems: items
    });
});

app.post("/", function (req, res) {
    const postItemString = req.body.newItem;
    const newItem = new Item({title: postItemString});
    newItem.save().then(() => console.log('new Item saved'));
    res.redirect("/");
});

app.get("/work", function (req, res) {
    res.render("list", {
        listTitle: "Work List",
        newListItems: workItems
    });
});

app.listen(3000, function () {
    console.log("Server is running on port 3000.");
});