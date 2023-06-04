// SPDX-License-Identifier: GPL-3.0

import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

pragma solidity 0.8.20;

contract PeopleTang is ERC721URIStorage, Ownable {
  uint256 public _CUR_TOKENID_ = 1;
  /** 剩余数量 */
  uint256 public remainingCount = 10000;
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
    require(remainingCount >= _CUR_TOKENID_, 'Insufficient remaining quantity');
    _safeMint(to, _CUR_TOKENID_);
    _setTokenURI(_CUR_TOKENID_, uri);
    _CUR_TOKENID_ = _CUR_TOKENID_ + 1;
  }

  function mint(string calldata uri) external payable {
    require(msg.value >= price, 'Insufficient payment.');
    _mint_comm(msg.sender, uri);
    emit Mint(msg.sender, uri);
  }

  // ============ Ownable =============
  function mintOwner(address[] calldata receivers, string[] calldata uris) external onlyOwner {
    require(receivers.length == uris.length, 'Receivers-uris not match');
    require(remainingCount >= remainingCount + receivers.length, 'Insufficient remaining quantity');
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
