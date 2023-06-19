export default function PTTopNav() {
  return (
    <div>
      <div className="bg-[#e60c14] h-[300px] p-4">
        <div className="flex flex-row items-center justify-center">
          <div className="mr-8">
            <img src="https://static.peopletang.io/tang-dao/logo-tangdao.png" className="h-12 w-full " />
          </div>
          <div className="flex flex-row gap-4  items-center justify-center font-medium">
            <div className="cursor-pointer">MINT</div>
            <div className="cursor-pointer">BACKGROUND</div>
            <div className="cursor-pointer">FUTURE</div>
          </div>
          <div className="grow"></div>
          <div className="flex flex-row gap-4 items-center justify-center">
            <div>T</div>
            <div>D</div>
            <div className="bg-black text-[#e60c14] py-2 px-2 rounded-md">Connect Wallet</div>
          </div>
        </div>
      </div>
      <div
        className="h-[32px] -mt-[24px] absolute w-full"
        style={{
          backgroundImage: 'url(https://static.peopletang.io/tang-dao/logo-peopletang-long.png)',
          backgroundSize: 'contain',
        }}
      ></div>

      <div className="h-[400px] -mt-[110px] w-full z-10">
        <div className="grid grid-cols-2">
          <div className="flex items-center justify-center">
            <img src="https://static.peopletang.io/tang-dao/logo-tang.png" className="w-full h-full" />
          </div>
          <div className="flex items-center justify-center">
            <div className="box-border">
              <div className="px-12">
                <img
                  src="https://static.peopletang.io/tang-dao/nft-flash.gif?a=1"
                  className="w-full h-full rounded-md"
                />
              </div>
              <div className="text-center py-2">从公元 618 年开始，往上或者往下</div>
              <div className="px-12">
                <div className="flex items-center justify-center bg-[#e70101] py-2 rounded-md cursor-pointer">MINT</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white h-[600px]">
        <div></div>
      </div>
    </div>
  );
}
