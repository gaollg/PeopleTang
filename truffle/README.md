# 1、单元测试结果

<img src="./image/unitTestSuccess.png"/>

# 2、合约

合约地址：https://mumbai.polygonscan.com/address/0xab741a75f7b52b5475733ebd5e61a1be781613e6

Mint: https://mumbai.polygonscan.com/tx/0xf0f68403ace28e364d35c82c0ebd1a3437fc43efc89eaa3a40f73843433722dd


学习币(study NFT)
<img src="./image/studyNFT.png">


# 命令行

```bash
truffle micrate --network development
```

```bash
truffle micrate --network mumbai
```

```bash
truffle micrate --network sepolia
```

```bash
truffle run verify PeopleTang@0x83C692cF7AEe160C3cD659E05f3C451513C9ac39 --network mumbai --debug
```

```bash
truffle run verify PeopleTang@0xfeD47c0674fbB4Aa626bec61069b8872a942716c --network sepolia --debug
```

# 重要教训

需要明确 evmVersion，否则开源代码会报错。
sepolia 0.8.18 以上版本默认为 [paris]，mumbai 还不支持，故强制设为 istanbul。

```
evmVersion: 'istanbul'
```