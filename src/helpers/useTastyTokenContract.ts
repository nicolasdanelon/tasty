import { ethers } from "ethers";

const TastyTokenABI = [
  // https://github.com/nicolasdanelon/tasty-core/blob/master/src/TastyToken.sol
  "function reserve(uint8 periodToReserve, uint8 day, uint8 month) external payable returns (uint256)",
  "function sellTicket(uint256 _tokenId, uint256 _price) external",
  "function offer(uint256 _tokenId) external payable",
  "function receivePerson(uint256 _tokenId) external",
  "function ownerDepositFound() external payable",
  // https://eips.ethereum.org/EIPS/eip-721
  "function balanceOf(address _owner) external view returns (uint256);",
  "function ownerOf(uint256 _tokenId) external view returns (address);",
  "function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes data) external payable;",
  "function safeTransferFrom(address _from, address _to, uint256 _tokenId) external payable;",
  "function transferFrom(address _from, address _to, uint256 _tokenId) external payable;",
  "function approve(address _approved, uint256 _tokenId) external payable;",
  "function setApprovalForAll(address _operator, bool _approved) external;",
  "function getApproved(uint256 _tokenId) external view returns (address);",
  "function isApprovedForAll(address _owner, address _operator) external view returns (bool);",
  "function onERC721Received(address _operator, address _from, uint256 _tokenId, bytes _data) external returns(bytes4);",
  "function name() external view returns (string _name);",
  "function symbol() external view returns (string _symbol);",
  "function tokenURI(uint256 _tokenId) external view returns (string);",
  "event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId);",
  "event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId);",
  "event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);",
];

const contractAddress = "0x0000000000000000000000000000000000000000";

export default function useTastyTokenContract() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, TastyTokenABI, signer);

  return { contract, provider };
}
