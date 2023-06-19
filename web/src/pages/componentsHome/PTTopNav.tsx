export default function PTTopNav() {
  return (
    <div>
      <div className="bg-[#e60c14] h-[300px] p-4">
        <div className="flex flex-row items-center justify-center">
          <div>logo</div>
          <div className="flex flex-row">
            <div>MINT</div>
            <div>BACKGROUND</div>
            <div>FUTURE</div>
          </div>
          <div className="grow"></div>
          <div className="flex flex-row items-center justify-center">
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
