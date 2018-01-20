var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    contract = require("truffle-contract"),
    greencoin_artifacts = require("../../build/contracts/GreenCoin.json");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var GreenCoin = contract(greencoin_artifacts);

var router = express.Router();

router.get('/', function(req, res) {
    var Web3 = require('web3');
	  web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
	  console.log('Getting GreenScore for address 0x1684e9b36a5C6AE95Ce3f454D9124dB2c76d06E9 .....');
	  var addr = ('0x1684e9b36a5C6AE95Ce3f454D9124dB2c76d06E9');
	  console.log('Address:', addr);
    GreenCoin.deployed().then(function(i) {
        i.getScore(addr).then(
            function(f) {
                $("#msg").html("Hotel Score: " + f);
                $("#msg").show();
                console.log(f)
            }
        )
    });
});

app.use(router);

app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
});

