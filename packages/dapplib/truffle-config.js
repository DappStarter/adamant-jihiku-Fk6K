require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture cart forget security trap birth predict code harvest forum equal gentle'; 
let testAccounts = [
"0xcf9f42db9713a103a1a9463ee207cadab442e6f8e3ec7dc4dca2e2b286d35ee8",
"0x27411baf782522412c2e37d508e02a97bba63e70c300786ec9a0cb1b51e623d0",
"0x162ef759ad6ae398e75fb8006ca53ec3485e138ed4cd6d96a34ca81532d151de",
"0x9d86bc9d469ab75e8c9fd118d5f14f161d18b3a07500d71c138c9958b2589f41",
"0x798732c7f05e8213801eff11d561e3e7dbac4bc3bcf0b30af1942714e973cc5e",
"0x073de0e864740d69775f869fe561bd64c853ceb3f0eb4cb5f147558f2a72d446",
"0xa0ce117adab019a602a3541a8fe9a8496976a82ba249a0758b7b72e30edb118e",
"0x02f42ce23c7ea3015ee43b97d63522267b4c4d2db5bffbf62c72e0e1e699f4b2",
"0x5a0347efd22e009b277afcc602db5bebbb679a68c30eabc1658fdc190aedf9c7",
"0x30c8a3388b825a4fbfe5c71f97bc5988d177630e3932bf2c67af240e698a1f3f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

