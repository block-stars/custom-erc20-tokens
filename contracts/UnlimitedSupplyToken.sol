// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract UnlimitedSupplyToken is ERC20, ERC20Burnable, Ownable {
    constructor(string memory name_, string memory symbol_, uint initialSupply_) ERC20(name_, symbol_) {
        _mint(msg.sender, initialSupply_);
    }

    function mint(address to_, uint256 amount_) public onlyOwner {
        _mint(to_, amount_);
    }
}