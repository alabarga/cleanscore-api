const contractAddress = "0x15a025b4f743c8da9ffb7ca965c57b0691e3d923";
const certAddress = "0xebf4dc5cc9dfc106f5e2d6d92ab2572fe571ae4d";
const privateKey = "21b409c4d6ac82b6a674db758df0080280cfca32c961a3cbcbbce149d004c1d4";
const blockChainNodeUrl = "http://localhost:8545";

// Import libraries we need.
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract';
import greenScoreABI from '../../build/contracts/GreenScore.json';

var greenScoreContract = web3.eth.contract(greenScoreABI.abi);
var greenScore = greenScoreContract.at(contractAddress);

window.App = {
    start: function() {
        var self = this;

        $("#greenScore-icon").click(function() {
	          $("#greenScore-address").val(contractAddress);
	          $("#greenScore-container").toggle();
        });

        $("#greenScore-form").submit(function(event) {
            let params = {
                "account": "1199137",
 	              "value": "30"
            };
            setScore(params);
            event.preventDefault();
        });
    }
};

functino setScore(params) {
    var code = greenScore.setScore.getData(params["account"], params["value"]);
    var tx = require("ethereumjs-tx");
    var privateKey = new Buffer(privateKey, 'hex');

    web3.eth.getTransactionCount(certAddress, function(err, result) {
        if (!err) {
            var rawTx = {
                nonce: result,
                gasPrice: '0x9502F9000', // 40000000000 (40 Gwei)
                gasLimit: '0x61A80', // 400000
                to: contractAddress,
                value: '0x00',
                data: code
            };

            var tx = new Tx(rawTx);
            tx.sign(privateKey);

            var serializedTx = tx.serialize();

            web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, txHash) {
                if (!err)
                $("#msg").html("Great! Green Score updated.");
                $("#msg").show();
            });
        } else {
	          console.error(err);
        }
    });
}

window.addEventListener('load', function() {
    if (typeof web3 !== 'undefined') {
        console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask");
        // Use Mist/MetaMask's provider
        window.web3 = new Web3(web3.currentProvider);
    } else {
        console.warn("Using blockchain node: " + blockChainNodeUrl);
        window.web3 = new Web3(new Web3.providers.HttpProvider(blockChainNodeUrl));
    }

    App.start();
});
