import Web3Helper from '@/helper/Web3Helper';
import { Button, Divider, Card, InputNumber, Image } from 'antd';
import { useEffect, useState } from 'react';
let web3 = Web3Helper.instance();

type TNFT = {
  id: string;
  url: string;
};
export default function QueryPeopleTang(props: {}) {
  const [nfts, setNfts] = useState<TNFT[]>([]);
  const [account, setAccount] = useState('');
  useEffect(() => {
    let fresh = async () => {
      let account = await Web3Helper.getLoginAccountQuiet();
      if (account) {
        let value: { tokenId: string; tokenUrl: string }[] = await Web3Helper.read('queryUserTokens', [account]);
        let newArray: TNFT[] = [];
        value.forEach((item) => {
          newArray.push({
            id: item.tokenId,
            url: item.tokenUrl,
          });
        });
        setNfts(newArray);
        setAccount(account);
      } else {
        setAccount(account);
      }
    };
    fresh();
    const intervalId = setInterval(fresh, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  let loginDIV = <div className="text-sm py-2">当前账号: {account}</div>;
  if (!account) {
    return (
      <div>
        <Button
          className="ml-2"
          type="primary"
          onClick={async () => {
            await Web3Helper.login();
          }}
        >
          登录查询
        </Button>
      </div>
    );
  }
  if (nfts.length == 0) {
    return (
      <div>
        {loginDIV}
        <div>暂无购买 NFT</div>
      </div>
    );
  }

  return (
    <div>
      {loginDIV}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {nfts.map((item, index) => {
          return (
            <div key={index} className="py-4 shadow-md">
              <div className="flex flex-col items-center">
                <Image src={item.url} />
                <div className="mt-2">{item.id}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
