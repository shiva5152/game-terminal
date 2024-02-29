import React from "react";

const UserDropDown = () => {
  return (
    <div className="flex flex-col px-3 pt-3 pb-6 text-white rounded-2xl bg-neutral-900 w-full md:max-w-[255px]">
      <div className="flex gap-2 justify-between py-3 font-bold border-solid border-b-[0.5px] border-b-[color:var(--Dark-Dark-Gray,#292929)]">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d04673a8f381b54916444e116243712cec31214467fcaa59d35b57d7a8551c37?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d04673a8f381b54916444e116243712cec31214467fcaa59d35b57d7a8551c37?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d04673a8f381b54916444e116243712cec31214467fcaa59d35b57d7a8551c37?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d04673a8f381b54916444e116243712cec31214467fcaa59d35b57d7a8551c37?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d04673a8f381b54916444e116243712cec31214467fcaa59d35b57d7a8551c37?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d04673a8f381b54916444e116243712cec31214467fcaa59d35b57d7a8551c37?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d04673a8f381b54916444e116243712cec31214467fcaa59d35b57d7a8551c37?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d04673a8f381b54916444e116243712cec31214467fcaa59d35b57d7a8551c37?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
          className="rounded-full aspect-square w-[38px]"
        />
        <div className="flex flex-col flex-1 my-auto">
          <div className="text-xs">Arshya Moghimi</div>
          <div className="mt-1.5 text-xs">
            <span className="font-medium text-white">ID :</span>{" "}
            <span className="">1234567890</span>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between px-2 py-3.5 mt-4 w-full text-xs whitespace-nowrap rounded-md bg-neutral-900">
        <div className="flex gap-2 justify-between">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dff21130ed4077d484c4d7755a13819db9efa612f194494c26272b3861e647ea?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
            className="aspect-square w-[18px]"
          />
          <div className="my-auto">Profile</div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ebc452817a4e165a8d1f97f17b2abcada2a695c3e031a19009d22179d759ac1?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
          className="self-start w-4 aspect-square"
        />
      </div>
      <div className="flex gap-5 justify-between px-2 py-3.5 mt-2 w-full text-xs rounded-md bg-neutral-900">
        <div className="flex gap-2 justify-between">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/be08f707588b73bb779d368c53d1eebd4a1f375429f70c435121d953247d2830?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
            className="aspect-square w-[18px]"
          />
          <div className="my-auto">My Wallet</div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ebc452817a4e165a8d1f97f17b2abcada2a695c3e031a19009d22179d759ac1?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
          className="self-start w-4 aspect-square"
        />
      </div>
      <div className="flex gap-5 justify-between px-2 py-3.5 mt-2 w-full text-xs whitespace-nowrap rounded-md bg-neutral-900">
        <div className="flex gap-2 justify-between">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/680a31e4425ca24a0927849dbf8d804f95bbb8848989f35a6dfa3e4bc71b2c66?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
            className="aspect-square w-[18px]"
          />
          <div className="my-auto">History</div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e421b0bd76911f04f47d4f87bfbf41a912e160e7fb212194c06682999c25ac6?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
          className="self-start w-4 aspect-square"
        />
      </div>
      <div className="flex gap-5 justify-between px-2 py-3.5 mt-2 w-full text-xs whitespace-nowrap rounded-md bg-neutral-900">
        <div className="flex gap-2 justify-between">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec746e389cfc5cb640132af57b04e96a4181e43f5ccfd86aece371832c4afb6b?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
            className="aspect-square w-[18px]"
          />
          <div className="my-auto">Settings</div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ebc452817a4e165a8d1f97f17b2abcada2a695c3e031a19009d22179d759ac1?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
          className="self-start w-4 aspect-square"
        />
      </div>
      <div className="mx-auto mt-8 ">
        <button>Log Out</button>
      </div>
    </div>
  );
};

export default UserDropDown;
