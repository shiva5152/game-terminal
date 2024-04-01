"use client";
import React, { use, useEffect, useState } from "react";
import { contractABI, contractAddress } from "@/utils/abi";
import { ethers } from "ethers";

type ConnectButtonProps = {
  ownerAddress: string;
};

const ClaimDomain = ({ ownerAddress }: ConnectButtonProps) => {
  const [input, setInput] = useState<string>("monu");

  useEffect(() => {
    const fetchDomainName = async () => {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      const domainName = await contract.getName();
      console.log(domainName);
    };
    const validateDomainName = async () => {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      const isNameAvailable = await contract.validateName("xyz");
      console.log(isNameAvailable);
    };
    validateDomainName();
    fetchDomainName();
  }, []);

  const transaction = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    const price = await contract.getPrice("ponu");
    console.log(price);
    const approveTx = await contract.register("ponu", {
      value: price,
    });
    await approveTx.wait();
    console.log(approveTx);
  };

  return (
    <button
      className="text-neutral-900 block text-base font-medium leading-5 tracking-normal justify-center items-stretch shadow-sm bg-white self-center max-w-full px-3 py-2.5 rounded-[30px]"
      onClick={transaction}
    >
      Claim
    </button>
  );
};

export default ClaimDomain;
