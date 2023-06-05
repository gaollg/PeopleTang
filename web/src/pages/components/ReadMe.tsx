import Web3Helper from '@/helper/Web3Helper';
import { Button, Divider, Card, InputNumber } from 'antd';
import { useEffect, useState } from 'react';
import BuyPeopleTang from './BuyPeopleTang';
import QueryPeopleTang from './QueryPeopleTang';
let web3 = Web3Helper.instance();

export default function ReadMe(props: {}) {
  return (
    <div>
      <Card title="说明" className="">
        <BuyPeopleTang />
        <div className="border-0 border-l-8 border-solid border-gray-400 bg-gray-200 px-2 py-4 my-2 flex flex-col">
          <div className="">
            测试币(登录账号每天可领取 1 个):{' '}
            <a href="https://mumbaifaucet.com/" target="_blank">
              https://mumbaifaucet.com/
            </a>
          </div>
          <div className="">
            合约地址(已开源):{' '}
            <a
              href="https://mumbai.polygonscan.com/address/0x59548fb3cdea24d9c8ef860d6243b3b28184df01#code"
              target="_blank"
            >
              0x59548fb3cdea24d9c8ef860d6243b3b28184df01
            </a>
          </div>
        </div>
      </Card>
      <Card title="购买记录" className="mt-4">
        <QueryPeopleTang />
      </Card>
    </div>
  );
}
