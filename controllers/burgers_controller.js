var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");



router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    burger.create([
        "burger_name"
    ], [
        req.body.name
    ], function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    console.log('tadadadaada');
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
    console.log("req.body.dev", req.body.dev);

    burger.update({
        devoured: req.body.dev
    }, condition, function() {
        res.redirect("/");
    });
});

module.exports = router;