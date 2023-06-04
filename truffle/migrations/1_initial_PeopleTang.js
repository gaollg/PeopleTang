const PeopleTang = artifacts.require('PeopleTang');

module.exports = function (deployer) {
  deployer.deploy(PeopleTang, 'PeopleTang NFT', 'PTangNFT');
};
