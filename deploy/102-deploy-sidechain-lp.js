/**
 * SPDX-License-Identifier: LZBL-1.1
 * Copyright 2023 LayerZero Labs Ltd.
 * You may obtain a copy of the License at
 * https://github.com/LayerZero-Labs/license/blob/main/LICENSE-LZBL-1.1
 */

require('hardhat/types');
require('hardhat-deploy');
require('@nomiclabs/hardhat-ethers')

// how to deploy
// STAGE=sandbox yarn hardhat deploy --tags sidechainLP --network polygon-sandbox-local

const PROXY_OWNER = '0x050073174f5E47D1f8C1F5e8E9B00D6af73458a1';

module.exports = async function (hre) {
    const { deploy, catchUnknownSigner } = hre.deployments
    // const { deployer, proxyOwner } = await hre.getNamedAccounts()
    const [deployer] = await ethers.getSigners();
    console.log('deployer:', deployer.address);
    // const proxy_owner = PROXY_OWNER[networkToStage(hre.network.name)] ?? proxyOwner
    const proxy_owner = PROXY_OWNER;
    console.log('proxy_owner:', PROXY_OWNER);

    // const usdv = (await hre.deployments.get('USDVSide')).address
    const usdv = '0x323665443CEf804A3b5206103304BD4872EA4253';
    console.log('usdv', usdv)

    // const config = sidechainLPDeployConfig[networkToStage(hre.network.name)]
    // const operator = config?.operator ?? deployer
    const operator = '0x4c5D0f96331d3140Fe1D02cc507007e8db76Ac1E'; // TODO
    console.log('operator', operator)
    // const lp = config?.lp ?? deployer
    const lp = '0xbDbAD73D8C47A768Da88DCeD68867b007E1f3022';
    console.log('lp', lp)

    const gasPrice = await hre.ethers.provider.getGasPrice()
    console.log('gasPrice:', gasPrice);

    await catchUnknownSigner(
        deploy('SidechainLP', {
            from: deployer.address,
            log: true,
            waitConfirmations: 1,
            skipIfAlreadyDeployed: true,
            gasPrice,
            proxy: {
                owner: proxy_owner,
                proxyContract: 'OptimizedTransparentProxy',
                viaAdminContract: {
                    name: 'SideLPProxyAdmin',
                    artifact: require('hardhat-deploy/extendedArtifacts/ProxyAdmin.json'),
                },
                execute: {
                    init: {
                        methodName: 'initialize',
                        args: [usdv, operator, lp],
                    },
                },
            },
        })
    )
}

// module.exports.tags = ['sidechainLP']
// module.exports.skip = async ({ network }) => network.name.includes(Chain.ETHEREUM) // only deploy on Non Ethereum
