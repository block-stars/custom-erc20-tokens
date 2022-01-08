# Custom ERC20 Tokens

## What is an ERC-20 Token?

ERC-20 tokens are blockchain-based assets. ERC-20 Tokens are Smart Contracts running on the Ethereum blockchain. They can be sent and received like any other crypto. ERC-20 Standard provides specifications on how these assets must be sent, received and stored.

## Fixed Supply Token

The entire token supply of the Token be generated during deploy and will be sent to Token Owner wallet. You can't increase or reduce the supply later.

## Unlimited Supply Token

When you create the token, an initial supply of the tokens will be sent to the owners wallet. You can later increase or decrease the supply of the token without any limits.

## Capped Supply Token

When you create the token, an initial supply of the tokens will be sent to the owners wallet. You can increase or decrease the supply of the token up to Total Supply of the Token. You won't be able to generate more tokens than the defined supply cap.

## Single Owner Token

The access to your token is limited to you, the person who created the token. There are no privileged actions for your token. You can still send and receive the tokens like usual.

## Role Based Token

Your Token will have two Roles, MINTER and ADMIN. Users with 'MINTER' role will be able to mint new tokens. Users with 'ADMIN' role will be able to assign these roles to minters or other admins. The account you use to deploy your Token will be ADMIN and MINTER by default.

## Token Recovery

A lot of tokens are often lost when sent to the Smart Contract address. In order to avoid this scenario for your tokens, Create My Tokens includes support for recovering any tokens directly sent to the smart contract.

## Transferable Ownership Token

Your Token will have an Owner. The account you use to deploy your Token will be owner by default and will be able to mint new tokens. You can transfer token ownership to addresses or Smart Contract. You can still send and receive the tokens like usual.
