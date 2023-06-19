export default function PTTopNav() {
  return (
    <div className="bg-white">
      <div className="bg-[#e60c14] p-4 flex flex-row items-center justify-center">
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
          <div>
            <a href="https://twitter.com/TangDAO_" target="_blank">
              <img
                className="w-[40px] h-[40px]  cursor-pointer select-none transition duration-500 ease-in-out transform hover:scale-110"
                src="https://static.peopletang.io/tang-dao/tw.png"
              />
            </a>
          </div>
          <div>
            <a href="https://linktr.ee/tangdao" target="_blank">
              <img
                className="w-[40px] h-[40px]  cursor-pointer select-none transition duration-500 ease-in-out transform hover:scale-110"
                src="https://static.peopletang.io/tang-dao/discord.png"
              />
            </a>
          </div>
          <div className="bg-black text-[#e60c14] py-2 px-2 rounded-md cursor-pointer select-none transition duration-500 ease-in-out transform hover:scale-110">
            Connect Wallet
          </div>
        </div>
      </div>

      <div className="flex flex-col relative">
        <div className="bg-[#e60c14] h-[50%] absolute w-full">
          <div
            className="h-[32px] -bottom-[8px] w-full absolute"
            style={{
              backgroundImage: 'url(https://static.peopletang.io/tang-dao/logo-peopletang-long.png)',
              backgroundSize: 'contain',
            }}
          ></div>
        </div>

        <div className="mt-[8%] w-full z-10">
          <div className="grid grid-cols-2">
            <div className="flex items-center justify-center">
              <img src="https://static.peopletang.io/tang-dao/logo-tang.png" className="w-full object-cover" />
            </div>
            <div className="flex items-center justify-center">
              <div className="box-border">
                <div className="px-12 md:px-16 lg:px-24 xl:px-32">
                  <img
                    src="https://static.peopletang.io/tang-dao/nft-flash.gif?a=1"
                    className="w-full h-full rounded-md"
                  />
                </div>
                <div className="text-center py-2">从公元 618 年开始，往上或者往下</div>
                <div className="px-12 md:px-16 lg:px-24 xl:px-32">
                  <div className="flex items-center justify-center bg-[#e70101] py-2 rounded-md cursor-pointer select-none	">
                    MINT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
