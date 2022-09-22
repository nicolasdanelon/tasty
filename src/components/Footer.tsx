import { h } from "preact";
import Logo from "../assets/Logo";

const url =
  "https://stardust-explorer.metis.io/address/" +
  "0x226F472146Dd645A263eE7ee1e49601e599024d2/transactions";

const addMetisStardustTestnet = async () =>
  window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: "0x24c",
        rpcUrls: ["https://stardust.metis.io/?owner=588"],
        chainName: "Metis Stardust Testnet",
        nativeCurrency: {
          name: "METIS",
          symbol: "METIS",
          decimals: 18,
        },
        blockExplorerUrls: ["https://stardust-explorer.metis.io/"],
      },
    ],
  });

const Footer = () => (
  <footer
    class="p-4 bg-white shadow mt-10	 md:px-6 md:py-4 dark:bg-gray-900"
    style={{ backgroundColor: "#862DF7" }}
  >
    <div class="sm:flex sm:items-center sm:justify-between">
      <a href="#" className="flex items-center mb-4 sm:mb-0">
        <Logo color="#fff" />
      </a>
      <ul class="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            Privacy policy
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline">
            Terms of service
          </a>
        </li>
        <li>
          <a
            href="#"
            className="mr-4 hover:underline"
            onClick={async (e) => {
              e.preventDefault();
              await addMetisStardustTestnet();
            }}
          >
            Add metis testnet to wallet
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="nofollow"
            href={url}
            className="hover:underline"
          >
            Tasty Token on Metis Explorer
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
