import { cn } from "@/utils/cn";
import { sectionHeading, sectionSubHeading } from "@/utils/styles";

const terminalData = [
  {
    id: 1,
    title: "For Gamers",
    titleIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/671f96f0e143c00189bc9a51e8f4082463c8cbbd9912e9ad32aaf6d2fb35e3d6?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/671f96f0e143c00189bc9a51e8f4082463c8cbbd9912e9ad32aaf6d2fb35e3d6?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/671f96f0e143c00189bc9a51e8f4082463c8cbbd9912e9ad32aaf6d2fb35e3d6?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/671f96f0e143c00189bc9a51e8f4082463c8cbbd9912e9ad32aaf6d2fb35e3d6?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/671f96f0e143c00189bc9a51e8f4082463c8cbbd9912e9ad32aaf6d2fb35e3d6?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/671f96f0e143c00189bc9a51e8f4082463c8cbbd9912e9ad32aaf6d2fb35e3d6?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/671f96f0e143c00189bc9a51e8f4082463c8cbbd9912e9ad32aaf6d2fb35e3d6?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/671f96f0e143c00189bc9a51e8f4082463c8cbbd9912e9ad32aaf6d2fb35e3d6?apiKey=caf73ded90744adfa0fe2d98abed61c0&",
    description:
      "Experience the pinnacle of gaming innovation on Game Terminal, where cutting-edge crypto games feature tokenization and NFT functionalities. Enjoy seamless usability and dive into next-generation gaming experiences.",
    buttonText: "Enroll Now",
  },
  {
    id: 2,
    title: "For Developers",
    titleIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a72313f7ead4e3eb1e1a69dc7470c88093c3a9deea7359ca4c5c0520c3debd85?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a72313f7ead4e3eb1e1a69dc7470c88093c3a9deea7359ca4c5c0520c3debd85?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a72313f7ead4e3eb1e1a69dc7470c88093c3a9deea7359ca4c5c0520c3debd85?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a72313f7ead4e3eb1e1a69dc7470c88093c3a9deea7359ca4c5c0520c3debd85?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a72313f7ead4e3eb1e1a69dc7470c88093c3a9deea7359ca4c5c0520c3debd85?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a72313f7ead4e3eb1e1a69dc7470c88093c3a9deea7359ca4c5c0520c3debd85?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a72313f7ead4e3eb1e1a69dc7470c88093c3a9deea7359ca4c5c0520c3debd85?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a72313f7ead4e3eb1e1a69dc7470c88093c3a9deea7359ca4c5c0520c3debd85?apiKey=caf73ded90744adfa0fe2d98abed61c0&",
    description:
      "Unlock limitless possibilities, ranging from decentralized gaming marketplaces to tokenized assets and NFT functionalities, captivating the burgeoning audience of the next-generation ecosystem with cutting-edge technology and innovative solutions.",
    buttonText: "Contact Us",
  },
];

const Terminal = () => {
  return (
    <div className="flex items-center mx-auto flex-col my-12 md:mt-32 mb-2 md:mb-20">
      <div className={cn(sectionHeading, "font-bold")}>
        {/* mt-32 text-5xl font-bold text-center leading-tight text-white  max-md:mt-10 max-md:max-w-full max-md:text-4xl */}
        Start your journey with <span className="text-lime-400">Game</span>{" "}
        <span className="text-lime-400">Terminal</span>
      </div>

      <div className={cn(sectionSubHeading)}>
        Join us to the next generation ofWeb3 gaming
      </div>
      <div className="mt-8 w-full max-w-[1247px] max-md:mt-6 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          {terminalData.map((data) => (
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div
                key={data.id}
                className="flex terminal-bg flex-col overflow-hidden grow justify-center items-start px-7 py-6 w-full text-xs font-bold rounded-3xl bg-neutral-900 max-md:px-3 max-md:py-3 max-md:mt-2 max-md:max-w-full"
              >
                <div className="flex mt-0 md:mt-4 justify-center items-center gap-2 text-xl md:text-3xl leading-7 text-white whitespace-nowrap">
                  <div className="grow self-start mt-1.5">{data.title}</div>
                  <img
                    loading="lazy"
                    srcSet={data.titleIcon}
                    className="aspect-square w-[35px]"
                  />
                </div>
                <div className="self-stretch mt-4 text-xs font-light leading-5 tracking-wider text-zinc-600 max-md:max-w-full">
                  {data.description}
                </div>
                <button className="overflow-hidden text-[0.65rem] max-w-[118px] md:max-w-[159px] relative button-bg flex-col justify-center font-bold items-center px-8 py-8 mt-4 text-center text-black whitespace-nowrap aspect-[3.12] fill-lime-400 leading-[233%] max-md:px-5">
                  {data.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
