require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */


module.exports = {
  solidity: "0.8.18",
  networks:{
    polygon_mumbai:{
      url : `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [`${process.env.POLYGON_PRIVATE_KEY}`],
    }
  },
};


//0x09459b940003e4095EB1184Baee873d070f99B7f
