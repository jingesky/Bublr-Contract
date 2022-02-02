# Bublr-Contract
This is Smart Contract that mint NFT imgage into the user's wallet.

- Contruct building environment
    1. Install truffle
        > npm install -g truffle
    2. Compile the smart contract
        > truffle compile
- Run Truffle on local testnet(need to install Gansh)
    > truffle development
- Run Truffle on ropsten testnet
    > truffle ropsten
- Deploy Smart contract
    > migrate
- Intracting with deployed smart contract
    > truffle console

    You will see the following prompt:
    truffle(development)> 
    let instance = await BublrERC721Minter.deployed()

- Mint Bublr Item
    > let instance = await BublrERC721Minter.deployed()
    > await instance.mintItem("<To Address>" , "<tokenURI>")

    ex: 
        await instance.mintItem( "0x30d945cd2aD01FC5791F0C7eFf3a683DBCa695AB", ""https://ipfs.io/ipfs/QmW2uTCbTDhV4qbj3Mb4uZLj823oLPrppUJBS63aFWyrZX"")

    You have to have some test ether to mint items.
