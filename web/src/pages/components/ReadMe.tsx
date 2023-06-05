import Web3Helper from '@/helper/Web3Heper';
import { Button, Divider, Card, InputNumber } from 'antd';
import { useEffect, useState } from 'react';
import BuyPeopleTang from './BuyPeopleTang';
let web3 = Web3Helper.instance();

export default function ReadMe(props: {}) {
  return (
    <Card title="说明" className="">
      <BuyPeopleTang />
      <div className="mt-6">
        合约地址(已开源):{' '}
        <a
          href="https://mumbai.polygonscan.com/address/0x59548fb3cdea24d9c8ef860d6243b3b28184df01#code"
          target="_blank"
        >
          0x59548fb3cdea24d9c8ef860d6243b3b28184df01
        </a>
        <br />
      </div>
      <div className="">
        测试币(登录账号每天可领取 1 个):{' '}
        <a href="https://mumbaifaucet.com/" target="_blank">
          https://mumbaifaucet.com/
        </a>
        <br />
      </div>
    </Card>
  );
}
