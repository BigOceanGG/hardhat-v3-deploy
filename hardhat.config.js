require("@bigoceangg/hardhat-v3-deploy");
var Table = require("cli-table3");
var UniswapV3Deployer = require("./dist/deployer/UniswapV3Deployer").UniswapV3Deployer;
/** @type import('hardhat/config').HardhatUserConfig */

task("test", "Prints the list of accounts", async () => {
  const [actor] = await ethers.getSigners();
  const contracts = await UniswapV3Deployer.deploy(actor);

  const table = new Table({
    head: ["Contract", "Address"],
    style: { border: [] },
  });
  for (const item of Object.keys(contracts)) {
    table.push([item, contracts[item].address]);
  }
  console.info(table.toString());
});

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
