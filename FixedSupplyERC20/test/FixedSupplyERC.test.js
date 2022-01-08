const { expect } = require("chai");
const { ethers } = require("hardhat");
const validator = require("solidity-validator");
const ERC20_ARTIFACT = require("../artifacts/contracts/FixedSupplyERC.sol/FixedSupplyERC.json");

const tokenName = "FixedSupplyERC";
const tokenSymbol = "FIX";
const initialSupply = 100000;
let tokenContract;

beforeEach(async() => {
    [owner] = await ethers.getSigners();
    // create token contract instance
    const token = new ethers.ContractFactory(
        ERC20_ARTIFACT.abi,
        ERC20_ARTIFACT.bytecode,
        owner
    );
    // deploy new token contract
    tokenContract = await token.deploy(tokenName, tokenSymbol, initialSupply);
});

describe("Deployment", function() {
    it("Should deploy the ERC20 contract", async function() {
        expect(tokenContract.address).to.not.be.undefined;
        expect(validator.isAddress(tokenContract.address)).to.be.true;
    });
});

describe("It should track the constructor inputs", function() {
    it("Should return the contract name", async function() {
        expect(await tokenContract.name()).to.be.eq(tokenName);
    });

    it("Should return the contract symbol", async function() {
        expect(await tokenContract.symbol()).to.be.eq(tokenSymbol);
    });

    it("Should return the contract total supply", async function() {
        expect(await tokenContract.totalSupply()).to.be.eq(initialSupply);
    });
});