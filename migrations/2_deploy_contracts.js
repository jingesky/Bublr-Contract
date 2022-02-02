var BublrERC721Minter = artifacts.require("BublrERC721Minter");

module.exports = function (deployer) {
    deployer.deploy(BublrERC721Minter);
}