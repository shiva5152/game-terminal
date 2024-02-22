import React from "react";

const Header = () => {
  return (
    <div className="header-bg w-full">
      <div className="overflow-hidden self-stretch px-20 py-7 fill-neutral-900 stroke-[1px] stroke-lime-400 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[60%] max-md:ml-0 max-md:w-full">
            <div className="flex gap-12 justify-between self-stretch my-auto text-xs text-white whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                alt="Game Terminal Logo"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8f243d9febcc8e464a8fd9568eaa354f8d4ea179818b187adb86ab1c136e82d?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                className="max-w-full aspect-[4.55] w-[188px]"
              />
              <div className="flex flex-col flex-1 self-start mt-3.5 font-thin text-gray-200">
                <div className="flex gap-10 justify-start">
                  <div>Home</div>
                  <div className="font-medium text-lime-400">Games</div>
                  <div>Marketplace</div>
                  <div>Tournament</div>
                  <div>Nodes</div>
                </div>
                {/* <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cff63361c1b2623d1e8df0f0bb190cc89072f31700fce960334670460465d02?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                    className="mt-2 ml-20 w-3.5 aspect-[3.45] stroke-[1px] stroke-lime-400 max-md:ml-2.5"
                  /> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[40%] max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-5 justify-between text-xs font-medium text-gray-200 whitespace-nowrap max-md:mt-10">
              <div className="flex gap-2 w-[50%] font-thin py-1 my-auto border border-solid border-[color:var(--Dark-Dark-Gray,#292929)] rounded-[50px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a552e136fc580f0eddb887f9032879991b6d46a79773ef459c42f60b6ef47ff?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                  className="aspect-square w-[34px]"
                />
                <div className="flex-auto my-auto">Search...</div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/82790d8804b70cb598af07bdb0eed5f2979f1ec2fd09aac5c56bbc08e53ad1a8?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                className="aspect-square w-[50px]"
              />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1df3c39f279a286a6983bfb37e3bed373aab7e9c67136a9f5ead3404d3792b64?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1df3c39f279a286a6983bfb37e3bed373aab7e9c67136a9f5ead3404d3792b64?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1df3c39f279a286a6983bfb37e3bed373aab7e9c67136a9f5ead3404d3792b64?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1df3c39f279a286a6983bfb37e3bed373aab7e9c67136a9f5ead3404d3792b64?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1df3c39f279a286a6983bfb37e3bed373aab7e9c67136a9f5ead3404d3792b64?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1df3c39f279a286a6983bfb37e3bed373aab7e9c67136a9f5ead3404d3792b64?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1df3c39f279a286a6983bfb37e3bed373aab7e9c67136a9f5ead3404d3792b64?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1df3c39f279a286a6983bfb37e3bed373aab7e9c67136a9f5ead3404d3792b64?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                className="rounded-full aspect-square w-[50px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
