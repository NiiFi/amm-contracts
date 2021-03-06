# NiiFi V1 periphery contracts

The NiiFi V1 contracts follow the same API as Uniswap V2.
In-depth documentation on Uniswap V2 is available at [uniswap.org](https://uniswap.org/docs).
The built contract artifacts can be browsed via [unpkg.com](https://unpkg.com/browse/@uniswap/v2-periphery@latest/).

# Local Development

The following assumes the use of `node@>=10`.

NOTE: Prior to running or deploying the contracts, make sure the correct `INIT_HASH_CODE` is used in the `NiiFiV1Library` contract. For instructions, please see the core contracts README.

## Install Dependencies

`yarn`

## Compile Contracts

EVM compiler:
`yarn compile:evm`

NVM compiler:
`yarn compile:nvm`

## Run Tests

EVM compiler:
`yarn test:evm`

NVM compiler:
`yarn test:nvm`

`yarn test:nvm` tests against a nahmii instance, either local or the testnet cluster. So please make sure the environment variables are set properly in the `.env` file. To test against the remote testnet, please set L2_URL to _https://l2.testnet.nahmii.io_ and L2_CHAIN_ID to _5553_.

Keep in mind that the remote testnet would require your test wallet address, corresponding to the PRIVATE_KEY or MNEMONIC environment variables, to be whitelisted in order to deploy contracts. 

Also note that the address of deployed `NiiFiV1Factory` has to be whitelisted, as this contract will need to deploy `NiiFiV1Pair` contract when creating a pair. You can set the `FACTORY_ADDRESS` to the one that has been whitelisted.

# Deploy

NOTE: Prior to deploying, make sure to add a correct `FACTORY_ADDRESS` to the `.env` file. If you don't have one, please deploy the core smart contracts first and retrieve the factory address.

Deploy to the live Nahmii Ropsten network:
`yarn deploy:nvm`

Alternatively, it is also possible to flatten the smart contracts and deploying them manually.
To flatten the smart contracts run:
`npx hardhat flatten contracts/{contract_name}.sol`