"use client";
import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import ConnectButton from "./component/collectWallet";
// import ClaimDomain from "./component/claimDomain";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setIsDomainCLaim } from "@/redux/features/ui/slice";
import ClaimDomain from "../ui/popup/DomainClaim";

const Setting = () => {
  // const params = useParams();
  // console.log("params:", params);
  // const { email } = params;
  // console.log("email:", email);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const { isCalmingDomain } = useAppSelector((state) => state.ui);
  const [userEmail, setUserEmail] = useState("");
  const [ownerAddress, setOwnerAddress] = useState("");

  // useEffect(() => {
  //   if (typeof email === "string") {
  //     setUserEmail(email);
  //     localStorage.setItem("email", email);
  //   } else {
  //     const storedEmail = localStorage.getItem("email");
  //     if (storedEmail) {
  //       setUserEmail(storedEmail);
  //     }
  //   }
  // }, [email]);

  const saveDataToBackend = async () => {
    try {
      console.log("Attempting to save data to the backend..."); // Add this line
      const storedEmail = localStorage.getItem("email");
      if (storedEmail) {
        await axios.post(
          `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/save-user-data`,
          {
            email: storedEmail,
          }
        );
        console.log("Data saved to the backend successfully.");
      } else {
        console.log("Email is missing.");
      }
    } catch (error) {
      console.error("Error occurred while saving data:", error);
    }
  };

  useEffect(() => {
    saveDataToBackend();
  }, []);

  const handleTwitterAuth = async () => {
    window.location.href = `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/auth/twitter`;
  };

  const handleDiscordAuth = () => {
    window.location.href =
      "https://discord.com/oauth2/authorize?client_id=1222398580518686791&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fauth%2Fdiscord%2Fcallback&scope=identify";
  };

  const handleDisconnectTwitter = () => {
    // Code to handle disconnecting Twitter
    console.log("Disconnecting Twitter...");
  };

  const handleDisconnectDiscord = () => {
    // Code to handle disconnecting Discord
    console.log("Disconnecting Discord...");
  };

  return (
    <>
      <div className="flex flex-col px-9 py-10 bg-neutral-900 max-md:px-5">
        <Header />
        <div className="flex flex-col items-start px-11 pt-12 pb-7 mt-12 text-xl whitespace-nowrap rounded-3xl bg-neutral-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 justify-between">
            <div className="font-medium text-lime-400">Account</div>
            <div className="flex-auto text-white">Notifications</div>
          </div>
          {/* <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b3dde745815f959f0df0dc0b0eaeeaacbd588e1a41a2c545638c1a1bb3e9ad3?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
          className="mt-3 ml-6 aspect-[3.57] fill-lime-400 w-[25px] max-md:ml-2.5"
        /> */}
        </div>
        <div className="flex sm:gap-5 justify-between p-8 mt-5 whitespace-nowrap rounded-xl border border-t-0 border-b-0 border-lime-400 border-solid bg-neutral-800  max-md:max-w-full">
          <div className="flex flex-col my-auto text-base text-zinc-600">
            <div>Email account</div>
            <div className="mt-10">Wallet address</div>
            <div className="mt-10">Domain Name</div>
          </div>
          <div className="flex flex-col text-lg font-medium text-right text-white">
            <div>{user ? user.email : "example@gmail.com"} </div>
            <div className="flex gap-1 justify-between mt-7">
              <div className="grow my-auto">
                {ownerAddress.slice(0, 6)}****{ownerAddress.slice(-4)}
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc89565e472f611643acdf2ab43f0ef97a6b3477de7edd2f9f634727ef05e735?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                className="w-6 aspect-square"
              />
            </div>
            <div className="flex gap-1 self-end mt-7">
              <div className="grow self-start mt-2">
                {user && user.domainName ? (
                  user.domainName + ".game"
                ) : user &&
                  user.discordUsername &&
                  user.twitterUsername &&
                  ownerAddress ? (
                  <button
                    className="overflow-hidden mx-auto  max-md:text-[10px] font-bold  button-bg md:mx-0 relative flex-col justify-center items-center self-start px-4 py-8 text-xs md:text-sm leading-7 text-black whitespace-nowrap  aspect-[2.86]  fill-lime-400 "
                    onClick={() => dispatch(setIsDomainCLaim(true))}
                  >
                    Claim
                  </button>
                ) : (
                  "-"
                )}
              </div>
              {/* <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc89565e472f611643acdf2ab43f0ef97a6b3477de7edd2f9f634727ef05e735?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
              className="w-6 aspect-square"
            /> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:px-8 py-9 mt-5 font-semibold text-white whitespace-nowrap rounded-3xl bg-neutral-900 max-md:max-w-full">
          <div className="flex gap-5 justify-between text-xl items-center  max-md:max-w-full">
            <div className="flex flex-col">
              <div className="text-3xl">Connections</div>
              <div className="flex gap-4 justify-between mt-10 text-xl">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/22fb7b32f12cfd8b14792261f83ecd7e6c408585ea6e328281d0c24cd843ce84?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/22fb7b32f12cfd8b14792261f83ecd7e6c408585ea6e328281d0c24cd843ce84?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/22fb7b32f12cfd8b14792261f83ecd7e6c408585ea6e328281d0c24cd843ce84?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/22fb7b32f12cfd8b14792261f83ecd7e6c408585ea6e328281d0c24cd843ce84?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/22fb7b32f12cfd8b14792261f83ecd7e6c408585ea6e328281d0c24cd843ce84?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/22fb7b32f12cfd8b14792261f83ecd7e6c408585ea6e328281d0c24cd843ce84?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/22fb7b32f12cfd8b14792261f83ecd7e6c408585ea6e328281d0c24cd843ce84?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/22fb7b32f12cfd8b14792261f83ecd7e6c408585ea6e328281d0c24cd843ce84?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                  className="aspect-square w-[60px]"
                />
                <div className="grow my-auto">Twitter</div>
              </div>
            </div>
            <button
              disabled={!user || !!user?.twitterUsername}
              onClick={handleTwitterAuth}
            >
              {!!user?.twitterUsername ? (
                <div className="mt-16">{user.twitterUsername}</div>
              ) : (
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f186ae5cc68847722426869f74ab75ba4cd7517ae58c825126b2f6a72402062e?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                  className="self-end mt-10 max-w-full aspect-[2.86] w-[110px] max-md:mt-10"
                />
              )}
            </button>
          </div>
          <div className="flex gap-5 justify-between items-center mt-8 w-full text-xl max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-4 justify-between">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/765fcdd02ab90a4f667168831a356edfab92042a9efa0065e656be42b868ed5a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/765fcdd02ab90a4f667168831a356edfab92042a9efa0065e656be42b868ed5a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/765fcdd02ab90a4f667168831a356edfab92042a9efa0065e656be42b868ed5a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/765fcdd02ab90a4f667168831a356edfab92042a9efa0065e656be42b868ed5a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/765fcdd02ab90a4f667168831a356edfab92042a9efa0065e656be42b868ed5a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/765fcdd02ab90a4f667168831a356edfab92042a9efa0065e656be42b868ed5a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/765fcdd02ab90a4f667168831a356edfab92042a9efa0065e656be42b868ed5a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/765fcdd02ab90a4f667168831a356edfab92042a9efa0065e656be42b868ed5a?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                className="aspect-square w-[60px]"
              />
              <div className="my-auto">Discord</div>
            </div>
            <a>
              <button
                disabled={!user || !!user?.discordUsername}
                onClick={handleDiscordAuth}
              >
                {!!user?.discordUsername ? (
                  <div className="mt-10">{user.discordUsername}</div>
                ) : (
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/770cf850f9996e165b5b7acc49b8cf8a2474dfc8b91455902744a0b231c600e7?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                    className="my-auto max-w-full aspect-[2.86] w-[110px]"
                  />
                )}
              </button>
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:px-8 py-9 mt-5 font-semibold text-white rounded-3xl bg-neutral-900  max-md:max-w-full">
          <div className="text-3xl max-md:max-w-full">Wallet</div>
          <div className="mt-6 text-sm text-zinc-600 max-md:max-w-full">
            Your wallet address will not be displayed on your public profile.
          </div>
          <div className="flex gap-5 justify-between mt-8 w-full text-xl whitespace-nowrap  max-md:max-w-full">
            <div className="flex gap-4 justify-between">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/57f6f97ac4fae55fca3e737a115ee78ad9fa76fb664cb2079f224e1f194ae350?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/57f6f97ac4fae55fca3e737a115ee78ad9fa76fb664cb2079f224e1f194ae350?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/57f6f97ac4fae55fca3e737a115ee78ad9fa76fb664cb2079f224e1f194ae350?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/57f6f97ac4fae55fca3e737a115ee78ad9fa76fb664cb2079f224e1f194ae350?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/57f6f97ac4fae55fca3e737a115ee78ad9fa76fb664cb2079f224e1f194ae350?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/57f6f97ac4fae55fca3e737a115ee78ad9fa76fb664cb2079f224e1f194ae350?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/57f6f97ac4fae55fca3e737a115ee78ad9fa76fb664cb2079f224e1f194ae350?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/57f6f97ac4fae55fca3e737a115ee78ad9fa76fb664cb2079f224e1f194ae350?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                className="aspect-square w-[60px]"
              />
              <div className="grow my-auto">Metamask</div>
            </div>
            {/* <button>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/90402a84b00eb324f0fed1992db7387b7fc3d3f9b8922ba67efbd7b118dbb6f0?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
              className="my-auto max-w-full aspect-[2.86] w-[110px]"
            />         
          </button> */}
            <ConnectButton
              setOwnerAddress={setOwnerAddress}
              ownerAddress={ownerAddress}
            />
          </div>
        </div>
        <div className="flex mb-6 gap-5 justify-between mt-5 text-xl font-semibold text-white max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 justify-between px-8 py-7 rounded-3xl bg-neutral-900 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <div className="flex-auto self-start mt-5">Change Password</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/97b51222f86179d204dba9248600e2b4b5bf8af011f72cfb0a5dd27e7bf09474?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
              className="aspect-[1.79] w-[70px]"
            />
          </div>
          <div className="flex gap-5 justify-between px-8 py-7 rounded-3xl bg-neutral-900 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <div className="self-start mt-5">Log out</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/39783b397bfa415ca02d10594aa4c40391e8aaf9ca22227c9fe6c69035063096?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
              className="aspect-[1.79] w-[70px]"
            />
          </div>
        </div>
        <Footer />
      </div>
      {isCalmingDomain && (
        <ClaimDomain userId={user?._id || ""} ownerAddress={ownerAddress} />
      )}
    </>
  );
};

export default Setting;
