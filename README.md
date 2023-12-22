# USDV Contracts


### Deploy SidechainLP (Viction Mainnet)

https://docs.viction.xyz/developer-guide/smart-contract-development/ides-and-tools/hardhat

```bash

KEY=<YourEvmPrivateKey> \
npx hardhat deploy --network viction


# verify ProxyAdmin, OK 0xdA5d77f1054D5f72E1cC80B93edA78bFfF653b2B 
npx hardhat verify --network viction <SideLPProxyAdminAddr> <DeployerAddr>

# verify SidechainLP, OK 0x3Ad9600a24490735E42558f19C6C7387d60AbeaA 
npx hardhat verify --network viction <SidechainLP_ImplementationAddr>

# Proxy, not works ☹️  0x0Db498732D4cDBE0324105653d3a16E0181f6B3F
npx hardhat verify --network viction <SidechainLP_ProxyAddr> \
  <SidechainLP_ImplementationAddr> \
  <SideLPProxyAdminAddr> \
  <ExtraData>
```

The deployed addresses were deployed like below:

```
npx hardhat deploy --network viction
Nothing to compile
deployer: 0x12bcb3CB8E3c28Ee25f5Bf538f8D7AfE78c4B134
proxy_owner: 0x050073174f5E47D1f8C1F5e8E9B00D6af73458a1
usdv 0x323665443CEf804A3b5206103304BD4872EA4253
operator 0x4c5D0f96331d3140Fe1D02cc507007e8db76Ac1E
lp 0xbDbAD73D8C47A768Da88DCeD68867b007E1f3022
gasPrice: BigNumber { value: "250000000" }
deploying "ProxyAdmin" (tx: 0xecbf47ffb4197820d79e47e4a9daad2278f0a3d5e1db34693f9710f91795c0ce)...: deployed at 0xdA5d77f1054D5f72E1cC80B93edA78bFfF653b2B with 661731 gas
deploying "SidechainLP_Implementation" (tx: 0x4927ef931a7d3d18df8f691e30a1dbf0625a99200b1499497a934be589cbf505)...: deployed at 0x3Ad9600a24490735E42558f19C6C7387d60AbeaA with 2794912 gas
deploying "SidechainLP_Proxy" (tx: 0x40226212a9a0a237f6820f8931a614b3c433add2ee2c3fe6b7ccb94616038f94)...: deployed at 0x0Db498732D4cDBE0324105653d3a16E0181f6B3F with 917113 gas
```
