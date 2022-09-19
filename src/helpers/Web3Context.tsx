import { ethers } from "ethers";
import { createContext } from "preact/compat";

const EthContext = createContext({});

export const { providers } = ethers;
const { ethereum } = window;
const { Web3Provider } = providers;
const provider = new Web3Provider(ethereum);

const value = {
  ethereum,
  provider,
};

export default EthContext;
