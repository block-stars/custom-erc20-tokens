const { expect } = require("chai");
const { ethers } = require("hardhat");
const validator = require("solidity-validator");
const ERC20_ARTIFACT = require("../artifacts/contracts/UnlimitedSupplyToken.sol/UnlimitedSupplyToken.json");

const tokenName = "UnlimitedSupplyToken";
const tokenSymbol = "ULTD";
const initialSupply = 100000;
let tokenContract;
let owner, user1, user2;

beforeEach(async() => {
    [owner, user1, user2] = await ethers.getSigners();
    // create token contract instance
    const token = new ethers.ContractFactory(
        ERC20_ARTIFACT.abi,
        ERC20_ARTIFACT.bytecode,
        owner
    );
    // deploy new token contract
    tokenContract = await token.deploy(tokenName, tokenSymbol, initialSupply);
});

describe("Deployment of UnlimitedSupplyToken", function() {
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

describe("It should mint only if owner", function() {
    it("Should increase the total supply (Owner)", async function() {
        const amount = 10;
        const totalSupplyBefore = (await tokenContract.totalSupply()).toNumber();
        await tokenContract.mint(owner.address, amount);
        const totalSupplyAfter = (await tokenContract.totalSupply()).toNumber();
        expect(totalSupplyAfter).to.be.eq(totalSupplyBefore + amount);
    });

    it("Should NOT increase the total supply (User)", async function() {
        const totalSupplyBefore = (await tokenContract.totalSupply()).toNumber();

        await expect(
            tokenContract.connect(user1.address).mint(user1.address, 10)
        ).to.be.revertedWith("Ownable: caller is not the owner");

        const totalSupplyAfter = (await tokenContract.totalSupply()).toNumber();
        expect(totalSupplyAfter).to.be.eq(totalSupplyBefore);
    });
});