// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

struct MessagingFee {
    uint nativeFee;
    uint lzTokenFee;
}

contract FakeUSDV is ERC20 {

    uint public remintFee = 0;

    constructor(uint256 initialSupply) ERC20("FakeUSDV", "USDV") {
        _mint(msg.sender, initialSupply);
    }

    function decimals() public view virtual override returns (uint8) {
        return 6;
    }

    function setRemintFee(uint fee) public {
        remintFee = fee;
    }

    // main
    function remint(
        uint32 /*_surplusColor*/,
        uint64 /*_surplusAmount*/,
        uint32[] calldata /*_deficits*/,
        uint64 /*_feeCap*/
    ) external {
        _transfer(msg.sender, address(this), remintFee);
    }

    // side
    function remint(
        uint32 /*_surplusColor*/,
        uint64 /*_surplusAmount*/,
        uint32[] calldata /*_deficits*/,
        uint64 /*_feeCap*/,
        bytes calldata /*_extraOptions*/,
        MessagingFee calldata /*_msgFee*/,
        address payable /*_refundAddress*/
    ) external payable {
        _transfer(msg.sender, address(this), remintFee);
    }

}