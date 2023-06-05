import Web3Helper from '@/helper/Web3Helper';
import { Button, Divider, Card, Checkbox } from 'antd';
import { useEffect, useState } from 'react';
let web3 = Web3Helper.instance();

export default function Todo(props: {}) {
  return (
    <Card title="Todo" className="">
      <div className="">
        <div>
          <Checkbox checked={true}>合约编写 (基于开源 openzeppelin 健壮)</Checkbox>
          <div className="border-0 border-l-8 border-solid border-gray-400 bg-gray-200 px-2 py-4 my-2 flex flex-col">
            <Checkbox checked={true}>ERC721</Checkbox>
            <Checkbox checked={true}>用户一次购买多个</Checkbox>
            <Checkbox checked={true}>Owner 批量 mint</Checkbox>
            <Checkbox checked={true}>Owner 提款</Checkbox>
            <Checkbox checked={true}>Owner 修改定价</Checkbox>
            <Checkbox checked={true}>查询用户拥有的 NFT</Checkbox>
            <Checkbox checked={true}>日志(emit Event)，供 thegraph 检索</Checkbox>
          </div>
        </div>
        <div>
          <Checkbox checked={true}>Web 版本</Checkbox>
          <div className="border-0 border-l-8 border-solid border-gray-400 bg-gray-200 px-2 py-4 my-2 flex flex-col">
            <Checkbox checked={false}>仿 lxDAO 十周年 NFT(数字溢出漏洞)</Checkbox>
            <Checkbox checked={true}>用户钱包检测</Checkbox>
            <Checkbox checked={true}>用户钱包切换到测试网/主网</Checkbox>
            <Checkbox checked={true}>售价/销售数/总数量 从合约读取</Checkbox>
            <Checkbox checked={false}>购买</Checkbox>
            <Checkbox checked={false}>网页展示拥有 NFT</Checkbox>
            <Checkbox checked={false}>钱包填加合约资产</Checkbox>
          </div>
        </div>
        <div>
          <Checkbox checked={false}>thegraph.com 对接</Checkbox>
          <div className="border-0 border-l-8 border-solid border-gray-400 bg-gray-200 px-2 py-4 my-2 flex flex-col">
            <Checkbox checked={false}>对接日志</Checkbox>
            <Checkbox checked={false}>其它功能需求，不清晰</Checkbox>
          </div>
        </div>
        <div>
          <Checkbox checked={false}>opensea.io 对接</Checkbox>
        </div>
        <div>
          <Checkbox checked={false}>ipfs 临时存储对接</Checkbox>
        </div>
        <div>
          <Checkbox checked={false}>Arweave 永久存储对接</Checkbox>
        </div>
      </div>
      <div className=""></div>
    </Card>
  );
}
