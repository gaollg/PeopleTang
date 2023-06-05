// SPDX-License-Identifier: GPL-3.0

import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

pragma solidity 0.8.20;

contract PeopleTang is ERC721URIStorage, ERC721Enumerable, Ownable {
  uint256 public _CUR_TOKENID_ = 0;
  /** 最大数量 */
  uint256 public maxCount = 10000;
  /** 价格 */
  uint256 public price = 0.0168 ether;

  constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {}

  // ============ Events ============
  event ChangePrice(uint256 newPrice);
  event Withdraw(address account, uint256 amount);
  event Mint(address account, string uri);
  event MintOwner(address[] receivers, string[] uris);

  // ============= MINT =============
  function _mint_comm(address to, string calldata uri) internal virtual {
    _CUR_TOKENID_ = _CUR_TOKENID_ + 1; //下标从1 开始计算
    _safeMint(to, _CUR_TOKENID_);
    _setTokenURI(_CUR_TOKENID_, uri);
  }

  /** 支持一次铸造多个 */
  function mint(string[] calldata uris) external payable {
    require(maxCount >= _CUR_TOKENID_ + uris.length, 'Insufficient remaining quantity');
    require(msg.value >= price, 'Insufficient payment.');
    for (uint256 i = 0; i < uris.length; i++) {
      _mint_comm(msg.sender, uris[i]);
    }
  }

  function _beforeTokenTransfer(
    address from,
    address to,
    uint256 tokenId,
    uint256 batchSize
  ) internal override(ERC721, ERC721Enumerable) {
    super._beforeTokenTransfer(from, to, tokenId, batchSize);
  }

  function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
    super._burn(tokenId);
  }

  function supportsInterface(
    bytes4 interfaceId
  ) public view override(ERC721URIStorage, ERC721Enumerable) returns (bool) {
    return super.supportsInterface(interfaceId);
  }

  function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
    return ERC721URIStorage.tokenURI(tokenId);
  }

  struct Token {
    uint tokenId;
    string tokenUrl;
  }

  function queryUserTokens(address user) public view returns (Token[] memory) {
    uint balance = balanceOf(user);

    Token[] memory retArray = new Token[](balance);
    for (uint i = 0; i < retArray.length; i++) {
      uint tokenId = tokenOfOwnerByIndex(user, i);
      retArray[i].tokenId = tokenId;
      retArray[i].tokenUrl = tokenURI(tokenId);
    }
    return retArray;
  }

  // ============ Ownable =============
  function mintOwner(address[] calldata receivers, string[] calldata uris) external onlyOwner {
    require(receivers.length == uris.length, 'Receivers-uris not match');
    require(maxCount >= _CUR_TOKENID_ + uris.length, 'Insufficient remaining quantity');
    emit MintOwner(receivers, uris);

    for (uint256 i = 0; i < receivers.length; i++) {
      _mint_comm(receivers[i], uris[i]);
    }
  }

  function changePrice(uint256 _price) external onlyOwner {
    price = _price;
    emit ChangePrice(_price);
  }

  function withdraw() external onlyOwner {
    uint256 amount = address(this).balance;
    payable(msg.sender).transfer(amount);
    emit Withdraw(msg.sender, amount);
  }
}
