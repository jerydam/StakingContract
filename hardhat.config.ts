import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();
const config: HardhatUserConfig = {
  solidity: "0.8.9",

  networks: {
    hardhat: {
    },
    goerli: {
      url: process.env.GOERLI_RPC,
      //@ts-ignore
      accounts:[process.env.PRIVATE_KEY1,PRIVATE_KEY,PRIVATE_KEY3 ]},
  },
  etherscan: {
    apiKey: process.env.API_KEY,
  }
};
export default config;
