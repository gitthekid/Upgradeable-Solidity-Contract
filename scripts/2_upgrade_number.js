const { ethers, upgrades } = require("hardhat");

const PROXY = "0x79e528a1d7c095c0b733e4de385f463c6e0d282d"

async function main() {
 const NumberV2 = await ethers.getContractFactory("NumberV2");
 console.log("Upgrading Number contract to V2...");
 await upgrades.upgradeProxy(PROXY, NumberV2);
 console.log("Number Contract upgraded successfully");
}

main();