import { useMetamask } from "use-metamask";
import { ethers } from "ethers";
import { useEffect, useState } from "preact/compat";

// @ts-ignore
const { ethereum } = window;

const LoginButton = ({ classCSS }: { classCSS: string }) => {
  const { connect, metaState } = useMetamask();
  const [axx, setAxx] = useState("");
  useEffect(() => {
    if (!metaState.isConnected) {
      (async () => {
        try {
          await connect(ethers.providers.Web3Provider, "any");
        } catch (error) {
          console.error(error);
        }
      })();
    } else {
      setAxx(metaState.account[0]);
    }
  }, []);

  useEffect(() => {
    if (metaState.isAvailable && !metaState.isConnected) {
      (async () => {
        try {
          await connect(ethers.providers.Web3Provider, "any");
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [metaState.isAvailable]);

  const connectWallet = async () => {
    const data = await ethereum.request({
      method: "eth_requestAccounts",
    });

    setAxx(data[0]);
  };

  if (!metaState.isAvailable) {
    return (
      <button onClick={() => window.open("https://metamask.io/", "_blank")}>
        Get MataMask
      </button>
    );
  }

  if (metaState.isConnected) {
    return (
      <button
        className={
          classCSS !== undefined
            ? classCSS
            : "font-medium text-indigo-600 hover:text-indigo-500"
        }
        title={axx}
      >
        {metaState.account[0].slice(0, 5)}...
        {metaState.account[0].slice(38, 42)}
      </button>
    );
  } else {
    return (
      <button
        className={
          classCSS !== undefined
            ? classCSS
            : "font-medium text-indigo-600 hover:text-indigo-500"
        }
        onClick={connectWallet}
      >
        Connect wallet
      </button>
    );
  }
};

export default LoginButton;
