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
      <div className="bg-white h-[600px]"></div>
    </div>
  );
}
