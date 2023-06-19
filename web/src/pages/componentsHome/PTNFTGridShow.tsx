function Item({ src }: { src: string }) {
  return <img src={src} className="w-full" />;
}

export default function PTNFTGridShow() {
  return (
    <div>
      <div>
        <img className="w-full py-2" src="https://static.peopletang.io/tang-dao/logo-peopletang-long.png" />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6">
        <Item src="https://static.peopletang.io/tang-dao/01.png" />
        <Item src="https://static.peopletang.io/tang-dao/02.png" />
        <Item src="https://static.peopletang.io/tang-dao/03.png" />
        <Item src="https://static.peopletang.io/tang-dao/04.png" />
        <Item src="https://static.peopletang.io/tang-dao/05.png" />
        <Item src="https://static.peopletang.io/tang-dao/06.png" />
      </div>

      <div className="text-center py-4 px-8">
        <p>
          People Tang 融合了华语文化内容的多种表现形式，从理论、技艺、传统、民俗中抽取出了
          <br />
          诸多华语文化特征的符号化语言，以更生动的当代审美结构组合为新的叙事图像。
        </p>

        <p className="mt-4">TangDAO 以 NFT 的方式将这些有趣且美好的东方文化元素在以太坊上贮存。</p>
        <p>
          你所得到 PFP 将会是从 13 亿中组合形式中随机生成挑选，其中男性角色与女性角色各占一半。
          <br />
          我们将华语文化中不同历史时期的图像符号打乱重组，力图构建出文化纵向交融的叙事图。
        </p>
        <p>
          在 People Tang 中每一个 PFP 都有属于他/她的故事，快乐的悲伤的迷人的滑稽的，情绪价值由你来定义。
          <br />
          我们希望所有热爱华语文化的全球朋友通过 People Tang 认识我们，加入我们。
        </p>
      </div>
    </div>
  );
}
