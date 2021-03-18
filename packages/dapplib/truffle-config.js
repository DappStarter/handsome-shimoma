require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'half arena october traffic walnut raw remind home harvest hidden swap sell'; 
let testAccounts = [
"0x85d4bcc6ca691fc98b2c4d8c0348723a45cdf1645909f02cd37557f77cc4ba8d",
"0x58abc2d1b12a60bbd5297dccd335b5b8a58c24bb7617dc6c927f545ecdc89838",
"0xed05f2f4aa938efb009d1b2c99310a3036ec6c704d607d57eea28de135c0bf42",
"0x475749f7f872115357891eaa3c0bae9a7e05880651dc0a5b7af53ac4607a7002",
"0xb240c11131e55a88ff325163d49a228899f27124534f9d4cbef4ba8c5debf159",
"0xe7c44ea94e33ad80a38be8f52410bf98673c93b2bd904dc5e4ace63e6e696e45",
"0x7ebddf79ee7658f95f57e577968d3bf4843d1154c8f950ce497f2f9c6aaccc03",
"0xe834d1c3754318cc63ef314c2d888abcfa3cbeb21687f3c22dc49df290c453bf",
"0x5d32cfb565fe9cb959f857ba049286a0a4412519fa4acb13777775d8f907d1f7",
"0xae8e8d3bb7203e3b7563e946b06b89205804440f72c2ccc29d1e2f628877fd21"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

