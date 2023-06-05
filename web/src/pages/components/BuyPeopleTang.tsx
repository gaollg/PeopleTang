import Web3Helper from '@/helper/Web3Heper';
import { Button, Divider, Card, InputNumber } from 'antd';
import { useEffect, useState } from 'react';
let web3 = Web3Helper.instance();

export default function BuyPeopleTang(props: {}) {
  const [value, setValue] = useState<number>(1);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row">
        <div>
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
          <div className="text-sm text-gray-600">
            剩余数量: (<span className="text-red-700">5</span>/10000)
          </div>
        </div>

        <Button
          className="ml-2"
          type="primary"
          onClick={() => {
            setValue(99);
          }}
        >
          购买
        </Button>
      </div>
    </div>
  );
}
