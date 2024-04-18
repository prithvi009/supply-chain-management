require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */


module.exports = {
  solidity: "0.8.18",
  networks:{
    sepolia:{
      url : `https://eth-sepolia.g.alchemy.com/v2/BfttughRUHtl0Tcg-H1zqxYbz2InyhCI`,
      accounts: [`cbfb507230c3642901e77468f0d5ba755a74a843279a150d9e02b1f1947d42a7`],
    }
  },
};


//0x5FbDB2315678afecb367f032d93F642f64180aa3
