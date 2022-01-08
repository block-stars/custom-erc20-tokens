// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CappedSupplyToken is ERC20, ERC20Capped, ERC20Burnable, Ownable {
    constructor(
        string memory name_, 
        string memory symbol_, 
        uint initialSupply_, 
        uint cap) 
    ERC20Capped(cap)
    ERC20(name_, symbol_) {
        ERC20._mint(msg.sender, initialSupply_);
    }

     function mint(address to_, uint256 amount_) public onlyOwner {
        _mint(to_, amount_);
    }

     function _mint(address account, uint256 amount) internal virtual override(ERC20Capped, ERC20) {
        require(ERC20.totalSupply() + amount <= cap(), "ERC20Capped: cap exceeded");
        super._mint(account, amount);
    }
}