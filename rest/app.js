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

router.get('/hotels', function(req, res) {
  var Client = require('node-rest-client').Client;
  var client = new Client();
  var url = 'http://sandbox.hotelscombined.com/api/2.0/hotels?destination=place:Madrid&apikey=7B5041D1-29A6-491F-B3E0-57CA5FCD53CA&sessionid=testsession1&rooms=1&adults_1=2&checkin=2018-06-13&checkout=2018-06-14&ResponseOptions=images';
  var args = {
    headers: { "User-agent": req.get('User-Agent') }
  };
  client.get(url, args,function (data, response) {
    for(var ele in data['results']) {
      data['results'][ele].greenScore = getScore(data['results'][ele].id);
      data['results'][ele].image = data['results'][ele].images['0'].large;
    }
    res.send(data['results'])
  });
});

app.use(router);

app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
});

