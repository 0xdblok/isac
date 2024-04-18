import React from "react";

export default function Buy() {
  return (
    <div>
      {" "}
      <div className="pt-36 font-sans">
        <h1 className="lg:text-4xl font-extrabold font-sans text-2xl text-center  ">
          HOW TO BUY
        </h1>
        <div className="lg:flex lg:gap-8 space-y-8 lg:space-y-0 pt-4 font-medium ">
          <div className="border-2 border-yellow-400 shadow-xl bg-[#ffd29d] p-8 rounded-lg lg:w-1/4">
            Image
            <h1 className="text-center font-semibold">Create a Wallet</h1>
            <p className="text-sm text-center">
              Download Metamask wallet from the app store or google play store
              for free. Desktop users, download the google chrome extension by
              going to metamask.io
            </p>
          </div>
          <div className="border-2 border-yellow-400 shadow-xl bg-[#ffd29d] p-8 rounded-lg lg:w-1/4">
            Image
            <h1 className="text-center font-semibold">Get Some ETH</h1>
            <p className="text-sm text-center break-words">
              Have ETH in your wallet to switch to $AAPL. If you don’t have any
              ETH, you can buy ETH from an exchange and send it to ZkSync or
              cross chain swap here https://zkswap.finance/zkbridge/bridge
            </p>
          </div>
          <div className="border-2 border-yellow-400 shadow-xl bg-[#ffd29d] p-8 rounded-lg lg:w-1/4">
            Image
            <h1 className="text-center font-semibold">Go to SyncSwap</h1>
            <p className="text-sm text-center">
              Google syncswap.xyz website. Connect your wallet. Paste the $AAPL
              token address into SyncSwap and then confirm the swap. Then sign.
            </p>
          </div>
          <div className="border-2 border-yellow-400 shadow-xl bg-[#ffd29d] p-8 rounded-lg lg:w-1/4 ">
            Image
            <h1 className="text-center font-semibold">Ride the wave</h1>
            <p className="text-sm text-center">
              ZkSync Season is at its early stages. Just sit back and relax. The
              worst thing most people do, is they sell their bags early
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
