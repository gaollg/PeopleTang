import Web3 from 'web3';
import { TransactionConfig } from 'web3-core';
import { Contract, ContractOptions } from 'web3-eth-contract';
import PeopleTangAbiData from './PeopleTang.json';

let contractAddress = '0x59548FB3CDEA24d9C8eF860d6243B3b28184dF01';
let instanceWeb3: Web3;

let commUseGas = (amount: string, fromAddress: string, method: string, paramArray: any[]): Promise<string> => {
  let getRawTransaction = async () => {
    let contractLesson6ERC20 = Web3Helper.getContract();
    let fn = contractLesson6ERC20.methods[method];

    console.log(paramArray);
    let transferData = fn.apply({}, paramArray).encodeABI();
    // let transferData = fn(paramArray[0], paramArray[1], paramArray[2], paramArray[3], paramArray[4]).encodeABI();

    let estimateGasRes = await instanceWeb3.eth.estimateGas({
      to: contractAddress,
      data: transferData,
      from: fromAddress,
      value: amount,
    });

    let chainId = await instanceWeb3.eth.getChainId();
    let gasPrice = await instanceWeb3.eth.getGasPrice();
    let nonce = await instanceWeb3.eth.getTransactionCount(fromAddress);
    let rawTransaction: TransactionConfig = {
      from: fromAddress,
      to: contractAddress,
      nonce: nonce, //instanceWeb3.utils.toHex(nonce),
      gasPrice: gasPrice,
      gas: estimateGasRes * 2,
      value: amount,
      data: transferData,
      chainId: chainId,
    };
    return rawTransaction;
  };

  return new Promise<string>(async (resolve, reject) => {
    try {
      let rawTransaction = await getRawTransaction();
      let result = await instanceWeb3.eth.sendTransaction(rawTransaction);
      console.log('txHash:', result);
      resolve(result.transactionHash);
      // .on('transactionHash', (hash) => {
      //   console.log('txHash:', hash);
      //   resolve(hash);
      // });
    } catch (e) {
      reject(e);
    }
  });
};

let Web3Helper = {
  addTestNetword: async () => {
    //   await window.ethereum.request({
    //     method: "wallet_addEthereumChain",
    //     params: NetworkConfiguration.params
    // });
  },
  switchToMumbai: async () => {
    if (!window.ethereum) {
      console.error(`未安装钱包, 请安装钱包后重试`);
      return;
    }
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: '0x' + (80001).toString(16),
          chainName: 'Mumbai',
          nativeCurrency: {
            name: 'Mumbai',
            symbol: 'MATIC',
            decimals: 18,
          },
          rpcUrls: ['https://matic-mumbai.chainstacklabs.com'],
          blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
        },
      ],
    });
  },
  getLoginAccountQuiet: async () => {
    let accounts = await instanceWeb3.eth.getAccounts();
    return accounts[0];
  },
  login: async () => {
    await Web3Helper.switchToMumbai();
    Web3Helper.instance();
    let accounts = await instanceWeb3.eth.getAccounts();
    if (accounts.length == 0) {
      await window.ethereum.enable();
      accounts = await instanceWeb3.eth.getAccounts();
    }
    return accounts[0];
  },
  instance: (): Web3 => {
    if (instanceWeb3) {
      return instanceWeb3;
    }
    if (!window.ethereum) {
      console.error(`未安装钱包, 请安装钱包后重试`);
      return;
    }
    instanceWeb3 = new Web3(window.ethereum);
    return instanceWeb3;
  },
  getContract: (): Contract => {
    let Contract = Web3Helper.instance().eth.Contract;
    //@ts-ignore
    let contract = new Contract(PeopleTangAbiData.abi, contractAddress);
    return contract;
  },
  read: async (methodOrFieldName: string, paramArray: any[]) => {
    const c = Web3Helper.getContract();
    let fn = c.methods[methodOrFieldName];
    return await fn.apply({}, paramArray).call();
  },
  mint: async (amount: string, uris: string[]): Promise<string> => {
    let accounts = await instanceWeb3.eth.getAccounts();
    let result = await commUseGas(amount, accounts[0], 'mint', [uris]);
    return result;
  },
  createStdERC20: async (param: {
    _erc20_template_: string;
    totalSupply: number;
    name: string;
    symbol: string;
    // decimals: number;
  }): Promise<string> => {
    let accounts = await instanceWeb3.eth.getAccounts();
    let result = await commUseGas('0', accounts[0], 'createStdERC20', [
      param._erc20_template_,
      param.totalSupply,
      param.name,
      param.symbol,
      0,
    ]);
    return result;
  },
};

export default Web3Helper;
