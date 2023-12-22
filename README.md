# USDV Contracts


### Deploy SidechainLP (Viction Mainnet)

https://docs.viction.xyz/developer-guide/smart-contract-development/ides-and-tools/hardhat

```bash

KEY=<YourEvmPrivateKey> \
npx hardhat deploy --network viction


# verify ProxyAdmin, OK
npx hardhat verify --network viction <SideLPProxyAdminAddr> <DeployerAddr>

# verify SidechainLP, OK
npx hardhat verify --network viction <SidechainLP_ImplementationAddr>

# Proxy, not works ☹️
npx hardhat verify --network viction <SidechainLP_ProxyAddr> \
  <SidechainLP_ImplementationAddr> \
  <SideLPProxyAdminAddr> \
  <ExtraData>
```
