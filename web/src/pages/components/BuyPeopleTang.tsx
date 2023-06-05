import Web3Helper from '@/helper/Web3Heper';
import { Button, Divider, Card, InputNumber } from 'antd';
import { useEffect, useState } from 'react';
let web3 = Web3Helper.instance();

export default function BuyPeopleTang(props: {}) {
  const [buyCount, setBuyCount] = useState<number>(1);
  const [nftInfo, setNftInfo] = useState({
    _CUR_TOKENID_: '0',
    maxCount: '1',
    price: '',
  });
  useEffect(() => {
    let fresh = async () => {
      //@ts-ignore
      let newBean: typeof nftInfo = {};
      let keys = ['_CUR_TOKENID_', 'maxCount', 'price'];

      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        let value = await Web3Helper.read(key);
        //@ts-ignore
        newBean[key] = value;
      }
      setNftInfo(newBean);
    };
    fresh();
    const intervalId = setInterval(fresh, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <div className="flex flex-row">
          <InputNumber
            min={1}
            max={100}
            value={buyCount}
            onChange={(value) => {
              if (value) {
                setBuyCount(value);
              }
            }}
          />
          <div> Eth</div>
          <Button
            className="ml-2"
            type="primary"
            onClick={async () => {
              // setValue(99);
              // web3.eth.getAccounts(console.log);
              // Web3Helper.login();
              let owner = await Web3Helper.read('owner');
              console.log('owner:', owner);
            }}
          >
            购买
          </Button>
        </div>
        <div className="text-sm text-gray-600">
          剩余数量: (<span className="text-red-700">{nftInfo._CUR_TOKENID_}</span>/{nftInfo.maxCount})
        </div>
        <div>{JSON.stringify(nftInfo, null, 2)};</div>
      </div>
    </div>
  );
}
