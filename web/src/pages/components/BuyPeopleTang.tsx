import Web3Helper from '@/helper/Web3Heper';
import { Button, Divider, Card, InputNumber } from 'antd';
import { useEffect, useState } from 'react';
let web3 = Web3Helper.instance();

export default function BuyPeopleTang(props: {}) {
  const [value, setValue] = useState<number>(1);
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <div className="flex flex-row">
          <InputNumber
            min={1}
            max={100}
            value={value}
            onChange={(value) => {
              if (value) {
                setValue(value);
              }
            }}
          />
          <Button
            className="ml-2"
            type="primary"
            onClick={() => {
              // setValue(99);
              // web3.eth.getAccounts(console.log);
              Web3Helper.login();
            }}
          >
            购买
          </Button>
        </div>
        <div className="text-sm text-gray-600">
          剩余数量: (<span className="text-red-700">5</span>/10000)
        </div>
      </div>
    </div>
  );
}
