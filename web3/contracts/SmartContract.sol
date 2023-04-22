//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract ProductTraceability {
   struct Product {
       string name;
       string manufacturer;
       uint256 amount;
       uint256 quantity;
       uint256 weight;
       string[] history;
       bytes32 sealHash;
       address sender;
   }

   mapping (uint256 => Product) public products;
   uint256 public productCount;
  
   event NewProduct(uint256 id, string name, string manufacturer, uint256 amount, uint256 quantity, uint256 weight, bytes32 sealHash, address sender);
   event ProductHistory(uint256 id, string history);
   event SealVerified(uint256 id, bool isSealValid);

   function createProduct(string memory _name, string memory _manufacturer, uint256 _amount, uint256 _quantity, uint256 _weight) public returns(bytes32){
       productCount++;
       bytes32 _sealHash = keccak256(abi.encodePacked(block.timestamp, msg.sender, block.difficulty));
       products[productCount] = Product(_name, _manufacturer, _amount, _quantity, _weight, new string[](0), _sealHash, msg.sender);
       emit NewProduct(productCount, _name, _manufacturer, _amount, _quantity, _weight, _sealHash, msg.sender);
       return _sealHash;
   }

   function addHistory(uint256 _id, string memory _history, bytes32 _sealHash) public returns(bytes32 ){
       require(_id > 0 && _id <= productCount, "Invalid product ID");
       Product storage product = products[_id];
       require(product.sealHash == _sealHash);
       product.history.push(_history);
       emit ProductHistory(_id, _history);

       bytes32 _sealHashs = keccak256(abi.encodePacked(block.timestamp, msg.sender, block.difficulty));
       product.sealHash = _sealHashs;
       return _sealHashs;
   }
  
   function getProduct(uint256 _id) public view returns (string memory name, string memory manufacturer, uint256 amount, uint256 quantity, uint256 weight, string[] memory history, bytes32 sealHash, address sender) {
       require(_id > 0 && _id <= productCount, "Invalid product ID");
       Product storage product = products[_id];
       return (product.name, product.manufacturer, product.amount, product.quantity, product.weight, product.history, product.sealHash, product.sender);
   }
}