require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
const POLYGON_PRIVATE_KEY = "8c61e3d0d3070ce80f5b5d933b6e90a627c2262081195212df5356d9e09bdc0c";
const ALCHEMY_API_KEY = "e9_SeR94lxBLNy-iK62SLq7H9qv8LSmJ";
module.exports = {
  solidity: "0.8.18",
  networks:{
    polygon_mumbai:{
      url : `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${POLYGON_PRIVATE_KEY}`],
    }
  },
};


//0x09459b940003e4095EB1184Baee873d070f99B7f