"use client";
import { useEffect, useState } from "react";
import Web3 from "web3";

declare global {
  interface Window {
    ethereum: any;
  }
}

type ConnectButtonProps = {
  ownerAddress: string;
  setOwnerAddress: (address: string) => void;
};

export default function ConnectButton({
  ownerAddress,
  setOwnerAddress,
}: ConnectButtonProps) {
  const [web3, setWeb3] = useState<any>(null);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
    }
  }, []);

  const connectWallet = async () => {
    if (web3) {
      try {
        const accounts = await window.ethereum.enable();
        setOwnerAddress(accounts[0]);
        // notifyInfo("Wallet connected successfully");
      } catch (error) {
        console.log(error);
        alert("Wallet connection failed");
      }
    } else {
      alert("MetaMask is not installed");
    }
  };
  useEffect(() => {
    if (web3) {
      connectWallet();
    }
  }, [web3]);

  return (
    <>
      {/* <button className="" onClick={connectWallet}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/770cf850f9996e165b5b7acc49b8cf8a2474dfc8b91455902744a0b231c600e7?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
          className="my-auto max-w-full aspect-[2.86] w-[110px]"
        />
        {ownerAddress ? "wallet connected 👍" : "connect wallet"}
      </button> */}
      <button
        onClick={connectWallet}
        className="overflow-hidden max-md:mx-auto  max-md:text-[10px]  button-bg md:mx-0 relative flex-col justify-center items-center self-start px-4 py-8 text-xs md:text-sm leading-7 text-black whitespace-nowrap  aspect-[2.86]  fill-lime-400 "
      >
        {ownerAddress ? "wallet connected 👍" : "connect wallet"}
      </button>
    </>
  );
}
