import { h } from "preact";
import { useEffect } from "preact/hooks";
import useTastyTokenContract from "./useTastyTokenContract";

type EnsureProperNetworkProps = {
  children: ReactNode;
  id: string;
};

const switchEthereumChain = async (id: string) =>
  await window.ethereum
    .request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: id }],
    })
    .catch(() => {});

const EnsureProperNetwork = ({ id, children }: EnsureProperNetworkProps) => {
  useEffect(() => {
    (async () => {
      const tasty = useTastyTokenContract();

      // https://stardust.metis.io/?owner=599
      // https://chainlist.org/

      const { chainId } = await tasty.provider.getNetwork();

      if (chainId !== Number(id)) {
        try {
          await switchEthereumChain(id);
        } catch (e) {
          console.error(e);
        }
      }
    })();
  }, []);

  return <>{children}</>;
};

export default EnsureProperNetwork;
