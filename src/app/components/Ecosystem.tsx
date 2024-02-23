import React from "react";
import Image from "next/image";

const Ecosystem = () => {
  return (
    <div className="self-stretch mt-40 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow mt-2.5 max-md:mt-10 max-md:max-w-full">
            <div className="text-5xl font-bold text-white max-md:max-w-full max-md:text-4xl">
              Ecosystem
            </div>
            <div className="mt-4 text-xl font-light leading-7 tracking-wide text-zinc-600 max-md:max-w-full">
              Game Terminal focuses on rewarding all types of contributors in
              the ecosystem who are shaping the future of Web3 together.
            </div>
            <Image
              height={361}
              width={365}
              alt="ecosystem"
              loading="lazy"
              src={"/images/ecosystem.svg"}
              className="my-auto max-w-[60%] aspect-[1.01]"
            />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="grow pt-2 pl-5 w-full rounded-3xl bg-neutral-900 max-md:mt-10 max-md:max-w-full">
            <div className="py-1 pl-5 mt-4 rounded-3xl bg-neutral-900 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-4/5 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto max-md:mt-8 max-md:max-w-full">
                    <div className="text-xl font-semibold leading-7 text-white max-md:max-w-full">
                      Player Engagement Framework
                    </div>
                    <div className="mt-4 text-xs font-light leading-4 tracking-wider text-zinc-600 max-md:max-w-full">
                      Game Terminal employs a robust player incentivization
                      framework, stimulating sustained engagement, diversified
                      game exploration, and the organic expansion of community
                      networks.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d774abee6ea2284131a65ac5dadee77a51d85eca256039330c6cb8962ac7b60e?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d774abee6ea2284131a65ac5dadee77a51d85eca256039330c6cb8962ac7b60e?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d774abee6ea2284131a65ac5dadee77a51d85eca256039330c6cb8962ac7b60e?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d774abee6ea2284131a65ac5dadee77a51d85eca256039330c6cb8962ac7b60e?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d774abee6ea2284131a65ac5dadee77a51d85eca256039330c6cb8962ac7b60e?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d774abee6ea2284131a65ac5dadee77a51d85eca256039330c6cb8962ac7b60e?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d774abee6ea2284131a65ac5dadee77a51d85eca256039330c6cb8962ac7b60e?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d774abee6ea2284131a65ac5dadee77a51d85eca256039330c6cb8962ac7b60e?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                    className="grow max-w-full aspect-[1.09] rounded-br-lg w-[120px] max-md:mt-8"
                  />
                </div>
              </div>
            </div>

            <div className="py-1 pl-5 mt-4 rounded-3xl bg-neutral-900 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-4/5 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto max-md:mt-8 max-md:max-w-full">
                    <div className="text-xl font-semibold leading-7 text-white max-md:max-w-full">
                      Developer Reward Mechanism
                    </div>
                    <div className="mt-4 text-xs font-light leading-4 text-zinc-600 tracking-wider max-md:max-w-full">
                      Innovators in game development are granted supplementary
                      rewards correlated with the frequency and depth of
                      engagements within their respective gaming domains,
                      complemented by standard settlement fee allocations.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
                  <Image
                    height={131}
                    width={131}
                    src={"/images/developer.svg"}
                    alt="coin"
                    loading="lazy"
                    className="grow max-w-full aspect-[1.12] rounded-br-lg w-[127px] max-md:mt-3.5"
                  />
                </div>
              </div>
            </div>

            <div className="py-1 pl-5 mt-4 rounded-3xl bg-neutral-900 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-4/5 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto max-md:mt-8 max-md:max-w-full">
                    <div className="text-xl font-semibold leading-7 text-white max-md:max-w-full">
                      Lifetime Incentives for Influencers
                    </div>
                    <div className="mt-4 text-xs font-light leading-4 text-zinc-600 tracking-wider max-md:max-w-full">
                      Key Opinion Leaders (KOLs) and Ambassadors are offered
                      perpetual incentives for each successfully onboarded
                      player they refer, fostering enduring relationships and
                      amplifying community growth trajectories.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
                  <Image
                    height={131}
                    width={131}
                    src={"/images/calendar.svg"}
                    alt="coin"
                    loading="lazy"
                    className="grow max-w-full aspect-[1.12] rounded-br-lg w-[127px] max-md:mt-3.5"
                  />
                </div>
              </div>
            </div>
            <div className="py-1 pl-5 mt-4 rounded-3xl bg-neutral-900 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-4/5 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto max-md:mt-8 max-md:max-w-full">
                    <div className="text-xl font-semibold leading-7 text-white max-md:max-w-full">
                      Tokenized Rewards for Node Operators
                    </div>
                    <div className="mt-4 text-xs font-light leading-4 text-zinc-600 tracking-wider max-md:max-w-full">
                      Node operators, serving as indispensable pillars of the
                      ecosystem, are duly compensated for their pivotal role in
                      facilitating gameplay and functioning ensuring the
                      integrity and transparency of gaming operations across our
                      ecosystem
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
                  <Image
                    height={131}
                    width={131}
                    src={"/images/coin.svg"}
                    alt="coin"
                    loading="lazy"
                    className="grow max-w-full aspect-[1.12] rounded-br-lg w-[127px] max-md:mt-3.5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
