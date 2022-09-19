import "regenerator-runtime/runtime.js";
import { h, render } from "preact";
import { App } from "./app";
import { MetamaskStateProvider } from "use-metamask";
import { BrowserRouter } from "react-router-dom";
import { createContext } from "preact/compat";
import { Theme } from "react-daisyui";
import { ethers } from "ethers";
import "./index.sass";
import EnsureProperNetwork from "./helpers/EnsureProperNetwork";

export const EthContext = createContext({});

const { providers } = ethers;
const { ethereum } = window;
const { Web3Provider } = providers;
const provider = new Web3Provider(ethereum);

const value = {
  ethereum,
  provider,
};

render(
  <EnsureProperNetwork id="0x24C">
    <MetamaskStateProvider>
      <EthContext.Provider value={value}>
        <Theme dataTheme="light">
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Theme>
      </EthContext.Provider>
    </MetamaskStateProvider>{" "}
  </EnsureProperNetwork>,
  document.getElementById("app") as HTMLElement
);
