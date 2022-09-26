# Upgradeable Solidity Smart Contract UUPS Standard

## Coded with:
Solidity
Javascript (Web3.js, Hardhat)

An example project I made to demonstrate my ability to use upgradeable smart contracts, here being the UUPS standard. I create a proxy contract, whose address stays the same for a user, which then interacts with other contracts that are I can change at my will. In this case, one contract is upgraded to another separately deployed contract. The contracts are very simple, merely including a publically viewable uint256 number, and a function that increments that uint256 by 1 in the first contract, and changing that incrementation to 2 in the second contract.

It is then deployed to the Kovan testnet using an Infura Node, and then verified on Etherscan using a Hardhat extension.

