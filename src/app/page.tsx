import Hero from "./components/Hero";
import Header from "./components/Header";
import Gaming from "./components/Gaming";
import Platform from "./components/Platform";
import Achievement from "./components/Achievement";
import Integration from "./components/Integration";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-9 py-11 bg-neutral-900 mx-auto max-md:px-5 w-full max-w-[90rem]">
      <Header />
      <Hero />
      <Gaming />
      <Platform />
      <Achievement />
      <Integration />

      <div className="self-stretch mt-40 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-2.5 max-md:mt-10 max-md:max-w-full">
              <div className="text-5xl font-bold text-white max-md:max-w-full max-md:text-4xl">
                Ecosystem
              </div>
              <div className="mt-4 text-xl font-light leading-7 text-zinc-600 max-md:max-w-full">
                Game Terminal focuses on rewarding all types of contributors in
                the ecosystem who are shaping the future of Web3 together.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow pt-2 pl-5 w-full rounded-3xl bg-neutral-900 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-[81%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                    <div className="text-xl font-semibold leading-7 text-white max-md:max-w-full">
                      Player Engagement Framework
                    </div>
                    <div className="mt-4 text-xs font-light leading-4 text-zinc-600 max-md:max-w-full">
                      Game Terminal employs a robust player incentivization
                      framework, stimulating sustained engagement, diversified
                      game exploration, and the organic expansion of community
                      networks.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d774abee6ea2284131a65ac5dadee77a51d85eca256039330c6cb8962ac7b60e?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d774abee6ea2284131a65ac5dadee77a51d85eca256039330c6cb8962ac7b60e?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d774abee6ea2284131a65ac5dadee77a51d85eca256039330c6cb8962ac7b60e?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d774abee6ea2284131a65ac5dadee77a51d85eca256039330c6cb8962ac7b60e?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d774abee6ea2284131a65ac5dadee77a51d85eca256039330c6cb8962ac7b60e?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d774abee6ea2284131a65ac5dadee77a51d85eca256039330c6cb8962ac7b60e?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d774abee6ea2284131a65ac5dadee77a51d85eca256039330c6cb8962ac7b60e?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d774abee6ea2284131a65ac5dadee77a51d85eca256039330c6cb8962ac7b60e?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                    className="grow max-w-full aspect-[1.09] w-[120px] max-md:mt-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between self-stretch mt-4 max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2018e84f49889a78e6ebe99b1d7e699d6f729ed1216ef7adf92aa4a3fef7c68d?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2018e84f49889a78e6ebe99b1d7e699d6f729ed1216ef7adf92aa4a3fef7c68d?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2018e84f49889a78e6ebe99b1d7e699d6f729ed1216ef7adf92aa4a3fef7c68d?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2018e84f49889a78e6ebe99b1d7e699d6f729ed1216ef7adf92aa4a3fef7c68d?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2018e84f49889a78e6ebe99b1d7e699d6f729ed1216ef7adf92aa4a3fef7c68d?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2018e84f49889a78e6ebe99b1d7e699d6f729ed1216ef7adf92aa4a3fef7c68d?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2018e84f49889a78e6ebe99b1d7e699d6f729ed1216ef7adf92aa4a3fef7c68d?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2018e84f49889a78e6ebe99b1d7e699d6f729ed1216ef7adf92aa4a3fef7c68d?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
          className="my-auto w-full aspect-[1.01]"
        />
        <div className="flex flex-col max-md:max-w-full">
          <div className="flex flex-col items-start py-5 pr-20 pl-5 rounded-3xl bg-neutral-900 max-md:pr-5 max-md:max-w-full">
            <div className="text-xl font-semibold leading-7 text-white max-md:max-w-full">
              Developer Reward Mechanism
            </div>
            <div className="mt-5 text-xs font-light leading-4 text-zinc-600 max-md:max-w-full">
              Innovators in game development are granted supplementary rewards
              correlated with the frequency and depth of engagements within
              their respective gaming domains, complemented by standard
              settlement fee allocations.
            </div>
          </div>
          <div className="flex flex-col items-start py-5 pr-20 pl-5 mt-4 rounded-3xl bg-neutral-900 max-md:pr-5 max-md:max-w-full">
            <div className="text-xl font-semibold leading-7 text-white max-md:max-w-full">
              Lifetime Incentives for Influencers
            </div>
            <div className="mt-5 text-xs font-light leading-4 text-zinc-600 max-md:max-w-full">
              Key Opinion Leaders (KOLs) and Ambassadors are offered perpetual
              incentives for each successfully onboarded player they refer,
              fostering enduring relationships and amplifying community growth
              trajectories.
            </div>
          </div>
          <div className="py-1 pl-5 mt-4 rounded-3xl bg-neutral-900 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-4/5 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto max-md:mt-8 max-md:max-w-full">
                  <div className="text-xl font-semibold leading-7 text-white max-md:max-w-full">
                    Tokenized Rewards for Node Operators
                  </div>
                  <div className="mt-4 text-xs font-light leading-4 text-zinc-600 max-md:max-w-full">
                    Node operators, serving as indispensable pillars of the
                    ecosystem, are duly compensated for their pivotal role in
                    facilitating gameplay and functioning ensuring the integrity
                    and transparency of gaming operations across our ecosystem
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5ea97bc4547fa760a44bdfe819f8bc6bcbbe1d65d016b1791d9a46baab16435a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ea97bc4547fa760a44bdfe819f8bc6bcbbe1d65d016b1791d9a46baab16435a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ea97bc4547fa760a44bdfe819f8bc6bcbbe1d65d016b1791d9a46baab16435a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ea97bc4547fa760a44bdfe819f8bc6bcbbe1d65d016b1791d9a46baab16435a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ea97bc4547fa760a44bdfe819f8bc6bcbbe1d65d016b1791d9a46baab16435a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ea97bc4547fa760a44bdfe819f8bc6bcbbe1d65d016b1791d9a46baab16435a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ea97bc4547fa760a44bdfe819f8bc6bcbbe1d65d016b1791d9a46baab16435a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ea97bc4547fa760a44bdfe819f8bc6bcbbe1d65d016b1791d9a46baab16435a?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                  className="grow max-w-full aspect-[1.12] w-[127px] max-md:mt-3.5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-44 text-5xl font-bold text-center text-lime-400 w-[582px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Start your journey with <span className="text-lime-400">Game</span>{" "}
        <span className="text-lime-400">Terminal</span>
      </div>
      <div className="mt-8 text-xl font-light leading-7 text-center whitespace-nowrap text-zinc-600">
        Join us to the next generation ofWeb3 gaming
      </div>
      <div className="mt-14 w-full max-w-[1247px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center items-start px-7 py-6 w-full text-xs font-bold rounded-3xl bg-neutral-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-2 text-3xl leading-7 text-white whitespace-nowrap">
                <div className="grow self-start mt-1.5">For Gamers</div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/671f96f0e143c00189bc9a51e8f4082463c8cbbd9912e9ad32aaf6d2fb35e3d6?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/671f96f0e143c00189bc9a51e8f4082463c8cbbd9912e9ad32aaf6d2fb35e3d6?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/671f96f0e143c00189bc9a51e8f4082463c8cbbd9912e9ad32aaf6d2fb35e3d6?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/671f96f0e143c00189bc9a51e8f4082463c8cbbd9912e9ad32aaf6d2fb35e3d6?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/671f96f0e143c00189bc9a51e8f4082463c8cbbd9912e9ad32aaf6d2fb35e3d6?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/671f96f0e143c00189bc9a51e8f4082463c8cbbd9912e9ad32aaf6d2fb35e3d6?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/671f96f0e143c00189bc9a51e8f4082463c8cbbd9912e9ad32aaf6d2fb35e3d6?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/671f96f0e143c00189bc9a51e8f4082463c8cbbd9912e9ad32aaf6d2fb35e3d6?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                  className="aspect-square w-[35px]"
                />
              </div>
              <div className="self-stretch mt-4 font-light leading-4 text-zinc-600 max-md:max-w-full">
                Experience the pinnacle of gaming innovation on Game Terminal,
                where cutting-edge crypto games feature tokenization and NFT
                functionalities. Enjoy seamless usability and dive into
                next-generation gaming experiences.
              </div>
              <div className="overflow-hidden relative flex-col justify-center px-12 py-6 mt-4 text-center text-black whitespace-nowrap aspect-[3.12] fill-lime-400 leading-[233%] max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/97a5cdb979f4f5715db20b62dc9c3436ae0d16cb80f4d5d7cf451c2e4826ed4d?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                  className="object-cover absolute inset-0 size-full"
                />
                Enroll Now
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center items-start px-7 py-6 w-full text-xs font-bold rounded-3xl bg-neutral-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-2 text-3xl leading-7 text-white whitespace-nowrap">
                <div className="grow self-start mt-1.5">For Developers</div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a72313f7ead4e3eb1e1a69dc7470c88093c3a9deea7359ca4c5c0520c3debd85?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a72313f7ead4e3eb1e1a69dc7470c88093c3a9deea7359ca4c5c0520c3debd85?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a72313f7ead4e3eb1e1a69dc7470c88093c3a9deea7359ca4c5c0520c3debd85?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a72313f7ead4e3eb1e1a69dc7470c88093c3a9deea7359ca4c5c0520c3debd85?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a72313f7ead4e3eb1e1a69dc7470c88093c3a9deea7359ca4c5c0520c3debd85?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a72313f7ead4e3eb1e1a69dc7470c88093c3a9deea7359ca4c5c0520c3debd85?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a72313f7ead4e3eb1e1a69dc7470c88093c3a9deea7359ca4c5c0520c3debd85?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a72313f7ead4e3eb1e1a69dc7470c88093c3a9deea7359ca4c5c0520c3debd85?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                  className="aspect-square w-[35px]"
                />
              </div>
              <div className="self-stretch mt-4 font-light leading-4 text-zinc-600 max-md:max-w-full">
                Unlock limitless possibilities, ranging from decentralized
                gaming marketplaces to tokenized assets and NFT functionalities,
                captivating the burgeoning audience of the next-generation
                ecosystem with cutting-edge technology and innovative solutions.
              </div>
              <div className="overflow-hidden relative flex-col justify-center px-12 py-5 mt-4 text-center text-black whitespace-nowrap aspect-[3.12] fill-lime-400 leading-[233%] max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/97a5cdb979f4f5715db20b62dc9c3436ae0d16cb80f4d5d7cf451c2e4826ed4d?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                  className="object-cover absolute inset-0 size-full"
                />
                Contact Us
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-44 text-5xl font-bold text-center text-lime-400 whitespace-nowrap max-md:mt-10 max-md:text-4xl">
        Our <span className="text-lime-400">Roadmap</span>
      </div>
      <div className="mt-11 w-full max-w-[1247px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[83%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-5 max-md:max-w-full">
              <div className="flex gap-1 justify-between text-3xl font-bold text-center text-white whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                <div className="grow justify-center items-center px-16 py-7 rounded-xl border border-lime-400 border-solid bg-neutral-900 max-md:px-5">
                  2022
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d302a6ab1b532cb8170d1c00b004942df83192a7423f555520df791149210aa1?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                  className="flex-1 my-auto w-full stroke-[1px] stroke-lime-400"
                />
                <div className="grow justify-center items-center px-16 py-7 rounded-xl border border-lime-400 border-solid bg-neutral-900 max-md:px-5">
                  2022
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c68cb304c806a003ba44a5a5a1fe0d3141300d37eff5ca6099bab40ed0d3a16d?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                  className="flex-1 my-auto w-full stroke-[1px] stroke-lime-400"
                />
              </div>
              <div className="flex gap-5 justify-between pr-20 mt-6 text-sm leading-6 text-white max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex flex-col">
                  <div className="text-2xl font-medium leading-9 whitespace-nowrap">
                    THIRD QUARTER
                  </div>
                  <div className="flex gap-2 justify-between mt-5 whitespace-nowrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4951710cd5797c7d2a452934638a66dc05d5cf324cf3f9b5080149f99dc5b4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                      className="w-6 aspect-square"
                    />
                    <div className="grow">Research on Web3 gaming</div>
                  </div>
                  <div className="flex gap-2 justify-between mt-4 whitespace-nowrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4951710cd5797c7d2a452934638a66dc05d5cf324cf3f9b5080149f99dc5b4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                      className="w-6 aspect-square"
                    />
                    <div className="grow">Idea and conceptualisation</div>
                  </div>
                  <div className="flex gap-2 justify-between mt-4">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4951710cd5797c7d2a452934638a66dc05d5cf324cf3f9b5080149f99dc5b4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                      className="w-6 aspect-square"
                    />
                    <div className="flex-auto">Core team building</div>
                  </div>
                  <div className="flex gap-2 justify-between mt-4 whitespace-nowrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4951710cd5797c7d2a452934638a66dc05d5cf324cf3f9b5080149f99dc5b4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                      className="w-6 aspect-square"
                    />
                    <div className="grow">Launch social handles </div>
                  </div>
                  <div className="flex gap-2 justify-between mt-4 whitespace-nowrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4951710cd5797c7d2a452934638a66dc05d5cf324cf3f9b5080149f99dc5b4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                      className="w-6 aspect-square"
                    />
                    <div className="grow">Releasing tokenomics </div>
                  </div>
                  <div className="flex gap-2 justify-between mt-4 whitespace-nowrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4951710cd5797c7d2a452934638a66dc05d5cf324cf3f9b5080149f99dc5b4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                      className="w-6 aspect-square"
                    />
                    <div className="grow">Pre seed round complete </div>
                  </div>
                </div>
                <div className="flex flex-col self-start font-light">
                  <div className="text-2xl font-medium leading-9 whitespace-nowrap">
                    FORTH QUARTER
                  </div>
                  <div className="flex gap-2 justify-between mt-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4951710cd5797c7d2a452934638a66dc05d5cf324cf3f9b5080149f99dc5b4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                      className="w-6 aspect-square"
                    />
                    <div className="flex-auto">AAA game designing</div>
                  </div>
                  <div className="flex gap-2 justify-between mt-4 whitespace-nowrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4951710cd5797c7d2a452934638a66dc05d5cf324cf3f9b5080149f99dc5b4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                      className="w-6 aspect-square"
                    />
                    <div className="grow">Growing users on social media </div>
                  </div>
                  <div className="flex gap-2 justify-between mt-4">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4951710cd5797c7d2a452934638a66dc05d5cf324cf3f9b5080149f99dc5b4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                      className="w-6 aspect-square"
                    />
                    <div className="flex-auto">WebGL version launch</div>
                  </div>
                  <div className="flex gap-2 justify-between mt-4">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4951710cd5797c7d2a452934638a66dc05d5cf324cf3f9b5080149f99dc5b4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                      className="w-6 aspect-square"
                    />
                    <div className="flex-auto">On-boarding advisors </div>
                  </div>
                </div>
              </div>
              <div className="mt-16 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-start text-sm font-light leading-6 text-white max-md:max-w-full">
                      <div className="flex gap-5 justify-between self-stretch text-3xl font-bold text-center whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                        <div className="grow justify-center items-center px-16 py-7 rounded-xl border border-lime-400 border-solid bg-neutral-900 max-md:px-5">
                          2023
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b553ab9359d4680fccc4f5b46f7904d10d5a7f7a5361314dfc20b1f4c162f915?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                          className="flex-1 my-auto w-full stroke-[1px] stroke-lime-400"
                        />
                      </div>
                      <div className="self-stretch mt-6 text-2xl font-medium leading-9 max-md:max-w-full">
                        SECOND QUARTER
                      </div>
                      <div className="flex gap-2 mt-5 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4951710cd5797c7d2a452934638a66dc05d5cf324cf3f9b5080149f99dc5b4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                          className="w-6 aspect-square"
                        />
                        <div className="grow">Mobile version beta testing</div>
                      </div>
                      <div className="flex gap-2 mt-4 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4951710cd5797c7d2a452934638a66dc05d5cf324cf3f9b5080149f99dc5b4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                          className="w-6 aspect-square"
                        />
                        <div className="grow">
                          Launching three hyper casual games
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4951710cd5797c7d2a452934638a66dc05d5cf324cf3f9b5080149f99dc5b4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                          className="w-6 aspect-square"
                        />
                        <div className="grow">
                          Game testing rewards and airdrops
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4951710cd5797c7d2a452934638a66dc05d5cf324cf3f9b5080149f99dc5b4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                          className="w-6 aspect-square"
                        />
                        <div className="grow">Token generation event</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-start text-sm font-light leading-6 text-white max-md:max-w-full">
                      <div className="flex gap-1 justify-between self-stretch text-3xl font-bold text-center whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                        <div className="grow justify-center items-center px-16 py-7 rounded-xl border border-lime-400 border-solid bg-neutral-900 max-md:px-5">
                          2023
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a435f70cf195d969007fc587a3e334a85da391d3d8b0c4221b41675613faf6ec?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                          className="flex-1 my-auto w-full stroke-[1px] stroke-lime-400"
                        />
                      </div>
                      <div className="self-stretch mt-6 text-2xl font-medium leading-9 max-md:max-w-full">
                        THIRD QUARTER
                      </div>
                      <div className="flex gap-2 mt-5 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4951710cd5797c7d2a452934638a66dc05d5cf324cf3f9b5080149f99dc5b4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                          className="w-6 aspect-square"
                        />
                        <div className="grow">NFT launch and INO</div>
                      </div>
                      <div className="flex gap-2 mt-4 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4951710cd5797c7d2a452934638a66dc05d5cf324cf3f9b5080149f99dc5b4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                          className="w-6 aspect-square"
                        />
                        <div className="grow">Renting portal pass</div>
                      </div>
                      <div className="flex gap-2 mt-4 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4951710cd5797c7d2a452934638a66dc05d5cf324cf3f9b5080149f99dc5b4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                          className="w-6 aspect-square"
                        />
                        <div className="grow">NFT marketplace launch </div>
                      </div>
                      <div className="flex gap-2 mt-4 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4951710cd5797c7d2a452934638a66dc05d5cf324cf3f9b5080149f99dc5b4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                          className="w-6 aspect-square"
                        />
                        <div className="grow">Mobile version final launch</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-sm font-light leading-6 text-white max-md:mt-5">
              <div className="justify-center items-center px-16 py-7 text-3xl font-bold text-center whitespace-nowrap rounded-xl border border-lime-400 border-solid bg-neutral-900 max-md:px-5">
                2023
              </div>
              <div className="mt-6 text-2xl font-medium leading-9 whitespace-nowrap">
                FIRST QUARTER
              </div>
              <div className="flex gap-2 justify-between mt-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4951710cd5797c7d2a452934638a66dc05d5cf324cf3f9b5080149f99dc5b4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                  className="self-start w-6 aspect-square"
                />
                <div>Release alpha version of game</div>
              </div>
              <div className="flex gap-2 justify-between mt-4 whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4951710cd5797c7d2a452934638a66dc05d5cf324cf3f9b5080149f99dc5b4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                  className="w-6 aspect-square"
                />
                <div className="grow">Gain live users on the game</div>
              </div>
              <div className="flex gap-2 justify-between mt-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4951710cd5797c7d2a452934638a66dc05d5cf324cf3f9b5080149f99dc5b4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                  className="self-start w-6 aspect-square"
                />
                <div>Custom character and skins building</div>
              </div>
              <div className="flex gap-2 justify-between mt-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4951710cd5797c7d2a452934638a66dc05d5cf324cf3f9b5080149f99dc5b4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                  className="w-6 aspect-square"
                />
                <div className="flex-auto">Arranging tournaments</div>
              </div>
              <div className="flex gap-2 justify-between mt-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4951710cd5797c7d2a452934638a66dc05d5cf324cf3f9b5080149f99dc5b4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                  className="w-6 aspect-square"
                />
                <div className="flex-auto">Private round complete</div>
              </div>
              <div className="justify-center items-center px-16 py-7 mt-14 text-3xl font-bold text-center whitespace-nowrap rounded-xl border border-lime-400 border-solid bg-neutral-900 max-md:px-5 max-md:mt-10">
                2023
              </div>
              <div className="mt-6 text-2xl font-medium leading-9 whitespace-nowrap">
                FORTH QUARTER
              </div>
              <div className="flex gap-2 justify-between mt-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4951710cd5797c7d2a452934638a66dc05d5cf324cf3f9b5080149f99dc5b4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                  className="w-6 aspect-square"
                />
                <div className="flex-auto">Move to earn launch</div>
              </div>
              <div className="flex gap-2 justify-between mt-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4951710cd5797c7d2a452934638a66dc05d5cf324cf3f9b5080149f99dc5b4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                  className="w-6 aspect-square"
                />
                <div className="flex-auto">New roadmap launch</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-4 text-sm font-light leading-6 text-white whitespace-nowrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4951710cd5797c7d2a452934638a66dc05d5cf324cf3f9b5080149f99dc5b4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
          className="w-6 aspect-square"
        />
        <div className="grow">Move to earn beta testing</div>
      </div>
      <div className="flex flex-col items-center self-stretch px-14 py-9 mt-24 text-base leading-6 bg-neutral-900 rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start w-full max-w-[1179px] text-zinc-600 max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/652ef0bd8b29068a9dd31b8d437c7d8d5d11e13b8637e42b96d1226f4bc908c4?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
            className="aspect-square w-[92px]"
          />
          <div className="flex flex-col flex-1 mt-2.5 whitespace-nowrap">
            <div className="text-2xl font-bold text-white">PRODUCT</div>
            <div className="mt-8">GAMES</div>
            <div className="mt-5">NFT MARKETPLACE</div>
            <div className="mt-5">LEADERBOARD</div>
            <div className="mt-5">UGC MARKETPLACE</div>
          </div>
          <div className="flex flex-col flex-1 mt-2.5">
            <div className="text-2xl font-bold text-center text-white">
              COMPANY
            </div>
            <div className="mt-8 text-center">ABOUT US</div>
            <div className="mt-5">TEAM</div>
            <div className="mt-5">ADVISORS</div>
            <div className="mt-5">PARTNERS</div>
            <div className="mt-5">BACKERS</div>
          </div>
          <div className="flex flex-col flex-1 mt-2.5">
            <div className="text-2xl font-bold text-white">LEGAL</div>
            <div className="mt-8 whitespace-nowrap">PRIVACY POLICY</div>
            <div className="mt-5 whitespace-nowrap">TERMS OF SERVICE</div>
            <div className="mt-5">FAQs</div>
            <div className="mt-5">LEARN MORE</div>
          </div>
          <div className="flex flex-col flex-1 mt-2.5 whitespace-nowrap">
            <div className="text-2xl font-bold text-white">COMMUNITY</div>
            <div className="mt-8">TWITTER</div>
            <div className="mt-5">TELEGRAM</div>
            <div className="mt-5">DISCORD</div>
            <div className="mt-5">YOUTUBE</div>
            <div className="mt-5">MEDIUM</div>
            <div className="mt-5">LINKEDIN</div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4191b9d9412efba6de765885009f6306bcee59d425a8230636eeff2112e2258f?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
          className="self-stretch mt-14 w-full stroke-[2px] stroke-white max-md:mt-10 max-md:max-w-full"
        />
        <div className="mt-9 text-white whitespace-nowrap">
          © 2024 GameTerminal.com. All Rights Reserved.
        </div>
      </div>
    </main>
  );
}
