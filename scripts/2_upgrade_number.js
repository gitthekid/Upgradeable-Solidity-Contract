const { ethers, upgrades } = require("hardhat");

const PROXY = "" //proxy contract address

async function main() {
 const NumberV2 = await ethers.getContractFactory("NumberV2");
 console.log("Upgrading Number contract to V2...");
 await upgrades.upgradeProxy(PROXY, NumberV2);
 console.log("Number Contract upgraded successfully");
}

main();
