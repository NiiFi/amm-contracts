/**
 * @dev Handles chain-specific configuration based on whether we are running
 * EVM or OVM tests
 */

 import { MockProvider } from 'ethereum-waffle' // standard EVM MockProvider from Waffle
 
 // Determine which network we are on
 const isOVM = process.env.MODE === 'OVM'
 
 // Get provider: We keep the same provider config that Uniswap tests were
 // already using, but generate the provider instance based on the test mode
 const options: any = {
   ganacheOptions: {
     hardfork: 'istanbul',
     mnemonic: 'horn horn horn horn horn horn horn horn horn horn horn horn',
     gasLimit: 9999999
   }
 }
 const provider = new MockProvider(options)
 
 // Get Chain ID
 const chainId = isOVM ? 5553 : 1
 
 export { provider, chainId }