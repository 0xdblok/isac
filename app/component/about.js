import React from "react";

export default function About() {
  return (
    <div>
      <h1 className="lg:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-[#ffd29d] to-neutral-400 font-extrabold font-sans text-2xl text-center  ">
        ABOUT ME
      </h1>
      <div>
        <p className="pt-8 px-12 text-center font-sans">
          {" "}
          Because while the original Newton was all about that gravity life,
          discovering laws and whatnot, I’m all about chasing the highs and lows
          of the crypto world{" "}
        </p>
      </div>
      <h1 className="lg:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-[#ffd29d] to-neutral-400   font-extrabold font-sans text-2xl text-center  pt-20 ">
        TOKENOMICS
      </h1>
      <h1 className="rotate-180 c bg-clip-text text-transparent bg-gradient-to-b from-[#ffd29d] to-neutral-400 lg:text-4xl opacity-20 l font-extrabold font-sans text-2xl text-center  ">
        TOKENOMICS
      </h1>
      <div className="pt-8 px-10 gap-6 flex font-sans  text-gray-700 font-extrabold justify-center">
        <div>
          {" "}
          <h1 className="">TOTAL SUPPLY : 1B</h1>
          <h1 className=" ">DEV 5%</h1>
          <h1 className="">MARKETING 15%</h1>
          <h1 className="">LP LOCK 80%</h1>
          <h1 className="text-center pt-12">CONTRACT ADDRESS</h1>
          <h1 className="text-center">
            0xe5697e57AF494d22aBF1884482d09ae47E27537c
          </h1>
        </div>
      </div>
    </div>
  );
}
