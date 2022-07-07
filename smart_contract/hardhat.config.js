require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  defaultNetwork: "goerli",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/7YpTbMoEHMxM-sbL2c_PKpiNiL0nUNp5',
      accounts: ['14aab0c13b2adbda00496430be09ab0de89d237cc1564c5154add7391d257f1b'],
    },
  },
};