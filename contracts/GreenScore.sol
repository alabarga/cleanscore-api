pragma solidity ^0.4.13;

import "zeppelin-solidity/contracts/token/StandardToken.sol";
import "zeppelin-solidity/contracts/ownership/Ownable.sol";

contract GreenScore is StandardToken, Ownable {

  mapping (string => uint) scores;

  string public name = "GreenScore";
  string public symbol = "GRS";
  uint public decimals = 18;
  uint public INITIAL_SUPPLY = 10000 * (10 ** decimals);
  
  function GreenScore() public {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
    scores["1199137"] = 25 * (10 ** decimals);
    scores["1056509"] = 24 * (10 ** decimals);
    scores["1901731"] = 23 * (10 ** decimals);
    scores["1056332"] = 22 * (10 ** decimals);
    scores["1056518"] = 21 * (10 ** decimals);
    scores["1253424"] = 20 * (10 ** decimals);
    scores["1056315"] = 19 * (10 ** decimals);
    scores["1901847"] = 18 * (10 ** decimals);
    scores["1056352"] = 17 * (10 ** decimals);
    scores["2484342"] = 16 * (10 ** decimals);
    scores["1999885"] = 15 * (10 ** decimals);
    scores["1531222"] = 14 * (10 ** decimals);
    scores["1509624"] = 13 * (10 ** decimals);
    scores["1056407"] = 12 * (10 ** decimals);
    scores["1199256"] = 11 * (10 ** decimals);
    scores["1056447"] = 10 * (10 ** decimals);
    scores["1056611"] =  9 * (10 ** decimals);
    scores["1476970"] =  8 * (10 ** decimals);
    scores["1056633"] =  7 * (10 ** decimals);
    scores["1199146"] =  6 * (10 ** decimals);
    scores["1056355"] =  5 * (10 ** decimals);
    scores["1210168"] =  4 * (10 ** decimals);
    scores["1056462"] =  3 * (10 ** decimals);
    scores["1056368"] =  2 * (10 ** decimals);
    scores["1272854"] =  1 * (10 ** decimals);
  }

  function getScore(string _account) view public returns (uint) {
    return (scores[_account]);
  }
}
