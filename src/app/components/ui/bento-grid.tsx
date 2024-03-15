import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[14rem] max-md:auto-rows-[200px] grid-cols-1 md:grid-cols-3 gap-4 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  item,
}: {
  className?: string;
  item: {
    title: string;
    button: string;
    bg: string;
  };
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${item.bg})` }}
      className={cn(
        "row-span-1 min-w-[33%] rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  justify-end p-6 flex flex-col items-baseline space-y-4",
        className
      )}
    >
      <div className="group-hover/bento:translate-x-2  transition duration-200 ">
        <div className="font-sans text-2xl max-md:text-xl font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {item.title}
        </div>
        <button className="justify-center max-md:text-[8px] max-md:px-6 px-10 py-1 text-[10px] font-bold leading-7 text-lime-400 whitespace-nowrap border border-lime-400 border-solid rounded-[110px]">
          {item.button}
        </button>
      </div>
      {/* <div className="flex bento-grid-border flex-col justify-center font-bold whitespace-nowrap rounded-3xl border border-solid bg-neutral-900 border-lime-400 border-opacity-0 max-w-full">
        <div className="flex  p-1 overflow-hidden relative flex-col items-start pt-20 pr-20 pb-8 pl-7 w-full h-auto">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6deb829b41abbdfc014d79cb8ebebf9c94abc97c09f1e868aac512c45aa9bb59?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6deb829b41abbdfc014d79cb8ebebf9c94abc97c09f1e868aac512c45aa9bb59?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6deb829b41abbdfc014d79cb8ebebf9c94abc97c09f1e868aac512c45aa9bb59?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6deb829b41abbdfc014d79cb8ebebf9c94abc97c09f1e868aac512c45aa9bb59?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6deb829b41abbdfc014d79cb8ebebf9c94abc97c09f1e868aac512c45aa9bb59?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6deb829b41abbdfc014d79cb8ebebf9c94abc97c09f1e868aac512c45aa9bb59?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6deb829b41abbdfc014d79cb8ebebf9c94abc97c09f1e868aac512c45aa9bb59?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6deb829b41abbdfc014d79cb8ebebf9c94abc97c09f1e868aac512c45aa9bb59?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
            className="object-cover absolute inset-0 size-fit"
          />
          <div className="relative mt-20 text-3xl leading-7 text-white">
            Game Terminal
          </div>
          <div className="relative justify-center px-7 py-3.5 mt-6 text-xs leading-7 text-lime-400 border border-lime-400 border-solid rounded-[110px]">
            LOGIN
          </div>
        </div>
      </div> */}
    </div>
  );
};
