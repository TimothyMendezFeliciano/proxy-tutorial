pragma solidity ^0.8.0;

import "./TimProxyNFT.sol";

contract UpgradedContractNFT is TimProxyNFT {
    function test() pure public returns (string memory) {
        return "upgraded";
    }
}
