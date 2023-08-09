require("@uniswap/hardhat-v3-deploy");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "localhost",
  networks: {
    // 网络及账户配置
    hardhat: {
      allowUnlimitedContractSize: true,
    },
    mainnet: {
      chainId: 56612,
      url: "http://node.cher8.com",
      accounts: ["6c00993de98b99a846cd9e4c336f43cced2b9af284aede1a3f45995c836be01a"],
      // allowUnlimitedContractSize: true,
      // gas: 300000000000,
    },
    testnet: {
      chainId: 56611,
      url: "http://test.node.cher8.com",
      accounts: ["6c00993de98b99a846cd9e4c336f43cced2b9af284aede1a3f45995c836be01a"],
      // allowUnlimitedContractSize: true, //启动代码优化
      // gas: 300000000000,
    },
  },
  solidity: "0.8.4",
};
