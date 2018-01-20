var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    contract = require("truffle-contract"),
    greenscore_artifacts = require("../build/contracts/GreenScore.json");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var greenCoinAbi = require("../build/contracts/GreenScore.json");

var router = express.Router();

function getScore(hotelId) {
    var Web3 = require('web3');
	  web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
	  var addr = ('0x1684e9b36a5C6AE95Ce3f454D9124dB2c76d06E9');
    var contractAddr = ('0x8cdaf0cd259887258bc13a92c0a6da92698644c0');
	  console.log('Getting GreenScore for address ' + addr + ' .....');
	  console.log('Address:', addr);

    var greenCoinContract = web3.eth.contract(greenCoinAbi.abi).at(contractAddr);
    console.log("contract loaded");
    var result = greenCoinContract.getScore.call(addr);
    return result;
}

app.use(router);

app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
});

