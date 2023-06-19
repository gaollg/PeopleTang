function Item({ src }: { src: string }) {
  return <img src={src} className="w-full" />;
}

export default function PTNFTIntro2() {
  return (
    <div>
      <div className="text-center py-4 px-8">
        <p>DID+BRAND+TICKET+DAO</p>

        <p className="mt-4">华人应当有自己的WEB3图像叙事</p>
        <p className="mt-4">
          People Tang 是一个基于 NFT 机制的 PFP 项目，是社区持有者的用户社交身份标识，同时People
          Tang的版权将与持有者共享，对于用户持有的NFT商用不作限制，TangDAO将与持有者共同探索品牌化路径。
        </p>
        <p className="mt-4">
          People Tang 具备现实使用功能价值，TangDAO将联合更多实体产业，以门票通行证PASS卡的形式应用在现实生活中。
        </p>
        <p className="mt-4">People Tang具备去中心化社区TangDAO治理工具的基础属性。</p>
      </div>

      <img className="w-full" src="https://static.peopletang.io/tang-dao/logo-peopletang-long.png" />
      <div className="flex items-center justify-center">
        <div className="flex flex-row gap-4">
          <div>1</div>
          <div>2</div>
        </div>
      </div>
      <img className="w-full" src="https://static.peopletang.io/tang-dao/banner-bottom-1.png" />
    </div>
  );
}
