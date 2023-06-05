import Web3Helper from '@/helper/Web3Helper';
import { Button, Divider, Card, InputNumber } from 'antd';
import { useEffect, useState } from 'react';
let web3 = Web3Helper.instance();

export default function QueryPeopleTang(props: {}) {
  const [nftInfo, setNftInfo] = useState({
    _CUR_TOKENID_: '0',
    maxCount: '1',
    price: '',
  });
  useEffect(() => {
    let fresh = async () => {
      let account = await Web3Helper.getLoginAccountQuiet();
      if (account) {
        let value = await Web3Helper.read('queryUserTokens', [account]);
        console.log('hhhhhhhhh0', value);
      }
    };
    fresh();
    // const intervalId = setInterval(fresh, 5000);
    // return () => {
    //   clearInterval(intervalId);
    // };
  }, []);
  return <div className="flex flex-col">xxx</div>;
}
