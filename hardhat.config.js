require("@nomicfoundation/hardhat-toolbox");
require('hardhat-deploy');


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  etherscan: {
    apiKey: {
      viction: "tomoscan2023",
    },
    customChains: [
      {
        network: "viction",
        chainId: 88, // for mainnet
        urls: {
          apiURL: "https://www.vicscan.xyz/api/contract/hardhat/verify", // for mainnet
          browserURL: "https://vicscan.xyz", // for mainnet
        }
      }
    ]
  },
  networks: {
    viction: {
      url: "https://rpc.viction.xyz",
      accounts: [
        process.env.KEY || "0000000000000000000000000000000000000000000000000000000000000001",
      ],
    }
  },
};
