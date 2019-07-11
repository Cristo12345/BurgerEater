var express = require("express");
var router = express.Router();

// importing burger model
var burger = require("../models/burger");

// routers

// route to show all burgers in DB
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// insert a burger route
router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId});
    });
});