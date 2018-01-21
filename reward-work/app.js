var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    contract = require("truffle-contract"),
    greenscore_artifacts = require("../build/contracts/GreenScore.json");

app.use(express.static('public_html'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

app.listen(8080, function() {
    console.log("Node server running on http://localhost:8080");
});

