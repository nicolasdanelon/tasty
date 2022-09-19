import { h } from "preact";
import { useEffect } from "preact/hooks";
import useTastyTokenContract from "./useTastyTokenContract";

type EnsureProperNetworkProps = {
  children: ReactNode;
  id: string;
};

const EnsureProperNetwork = ({ id, children }: EnsureProperNetworkProps) => {
  useEffect(() => {
    (async () => {
      const tasty = useTastyTokenContract();

      // https://stardust.metis.io/?owner=588
      // https://chainlist.org/

      const { chainId } = await tasty.provider.getNetwork();

      if (chainId !== Number(id)) {
        await window.ethereum
          .request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: id }],
          })
          .catch(() => {});
      }
    })();
  }, []);

  return <>{children}</>;
};

export default EnsureProperNetwork;
