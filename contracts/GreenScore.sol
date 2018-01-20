pragma solidity ^0.4.13;

import "zeppelin-solidity/contracts/token/StandardToken.sol";

contract GreenScore is StandardToken {

  mapping (address => uint) scores;

  string public name = "GreenScore";
  string public symbol = "GRS";
  uint public decimals = 18;
  uint public INITIAL_SUPPLY = 10000 * (10 ** decimals);
  
  function GreenScore() public {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
    balances[bytesToAddress("0x1684e9b36a5C6AE95Ce3f454D9124dB2c76d06E9")] = 10 * (10 ** decimals);
    balances[bytesToAddress("0x8ab438E12613efaA47A198a4996b4a596A85F9DE")] = 10 * (10 ** decimals);
    balances[bytesToAddress("0x81f4a810f602bB52De76A5cf7Ba9eA3820259e95")] = 10 * (10 ** decimals);
    balances[bytesToAddress("0xeA69f1a5a325Bfb5A5Fc9Ab7127499EfE9Cc0eFD")] = 10 * (10 ** decimals);
    balances[bytesToAddress("0x8C980Eba73732279D85C9A1C1DccC126Cc3F1372")] = 10 * (10 ** decimals);
    balances[bytesToAddress("0x21C771Ac920aEFe3b3Fc1442B993733E7103368C")] = 10 * (10 ** decimals);
    balances[bytesToAddress("0xF81035D18b238D589F6C98277e25DBdad696ABA1")] = 10 * (10 ** decimals);
    balances[bytesToAddress("0xEe3F591c3422AACB39E57e7578e94891003d3379")] = 10 * (10 ** decimals);
    balances[bytesToAddress("0x7b7B98d8d708D345c05b6cF123F2e574440dA329")] = 10 * (10 ** decimals);
    balances[bytesToAddress("0xA20B9d51f089A0E27a6a2F0ba0557aE105C2C247")] = 10 * (10 ** decimals);
  }

  function getScore(address _account) view public returns (uint) {
    return scores[_account];
  }

  function bytesToAddress(bytes _address) public returns (address) {
    uint160 m = 0;
    uint160 b = 0;

    for (uint8 i = 0; i < 20; i++) {
      m *= 256;
      b = uint160(_address[i]);
      m += (b);
    }

    return address(m);
  }
}
