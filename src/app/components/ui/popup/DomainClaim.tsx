"use client";
import React, { use, useEffect, useState } from "react";
import { contractABI, contractAddress } from "@/utils/abi";
import { ethers } from "ethers";
import { useAppDispatch } from "@/redux/hooks";
import { setIsDomainCLaim } from "@/redux/features/ui/slice";
import { setUser } from "@/redux/features/user/slice";
import instance from "@/config/axios";

type ConnectButtonProps = {
  ownerAddress: string;
  userId: string;
};

const ClaimDomain = ({ ownerAddress, userId }: ConnectButtonProps) => {
  const dispatch = useAppDispatch();
  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

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
    validateDomainName();
    fetchDomainName();
  }, []);
  const validateDomainName = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    const isNameAvailable = await contract.validateName(input);
    return isNameAvailable;
  };
  const saveDomainName = async () => {
    const { data } = await instance.patch(`/auth/user/${userId}`, {
      domainName: input,
    });
    dispatch(setUser(data.user));
    console.log(data);
  };
  const isValidDomainName = (name: string) => {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(name);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if (error) setError("");
  };

  const transaction = async () => {
    setIsProcessing(true);
    const isNameAvailable = await validateDomainName();
    console.log(isNameAvailable);
    if (!isNameAvailable) {
      console.log(isNameAvailable, "isNameAvailable");
      setError("Domain Name is already exist");
      setIsProcessing(false);
      return;
    }
    if (!isValidDomainName(input)) {
      setError("Invalid Domain Name");
      setIsProcessing(false);
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    const price = await contract.getPrice(input);
    console.log(price);
    const approveTx = await contract.register(input, {
      value: price,
    });
    try {
      await approveTx.wait();
      await saveDomainName();
      dispatch(setIsDomainCLaim(false));
      console.log("Domain Claimed");
      //   await saveDomainName();
    } catch (error) {
      console.log(error);
    }

    setIsProcessing(false);
    console.log(approveTx);
  };

  return (
    <>
      {/* <button
        className="text-neutral-900 block text-base font-medium leading-5 tracking-normal justify-center items-stretch shadow-sm bg-white self-center max-w-full px-3 py-2.5 rounded-[30px]"
        onClick={transaction}
      >
        Claim
      </button> */}
      <div className=" h-screen fixed inset-0 backdrop-blur-md w-full  flex justify-center items-center">
        {true && (
          <div className="flex  flex-col px-8 py-10 rounded-2xl bg-neutral-950 max-w-[484px]">
            <div className="flex gap-5 flex-col justify-between self-center w-full text-2xl font-bold leading-9  text-white whitespace-nowrap max-w-[371px]">
              <div className="flex justify-between">
                <div>
                  Claim Domain
                  <br />
                </div>
                <button onClick={() => dispatch(setIsDomainCLaim(false))}>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/140ac067d56c5885222bf298146f2a7505a185f61ce57a61090f7445e433a519?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                    className="shrink-0 self-start aspect-square w-[27px]"
                  />
                </button>
              </div>

              <div className=" flex flex-col my-4">
                <label className="text-white my-4 tex start text-base font-normal leading-5">
                  Domain Name
                </label>
                <input
                  name="domainName"
                  value={input}
                  onChange={handleChange}
                  className="bg-gray-800 text-white text-xl placeholder-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#00ff00]"
                  type="text"
                  placeholder="Enter Domain Name"
                />
                {error ? (
                  <p className="text-red-500 text-sm my-2">*{error} </p>
                ) : null}
              </div>
              <div className=" justify-center items-center w-full">
                <button
                  disabled={!!error || isProcessing}
                  onClick={transaction}
                  className="overflow-hidden mx-auto  max-md:text-[10px]  button-bg md:mx-0 relative flex-col justify-center items-center self-start px-4 py-8 text-xs md:text-sm leading-7 text-black whitespace-nowrap  aspect-[2.86]  fill-lime-400 "
                >
                  {isProcessing ? "Processing..." : "Claim"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ClaimDomain;
