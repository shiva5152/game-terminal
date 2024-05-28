// import React from "react";

// function Card() {
//   return (
//     <div className="flex overflow-hidden relative flex-col grow pb-5 aspect-[0.55] fill-neutral-900 max-md:mt-5">
//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/6097140c168b39e16d8e4f4aa10c7cb30b956f830b45a12e0a462c80e5fc0f7a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
//         className="object-cover absolute inset-0 size-full"
//       />
//       <div className="relative flex-col w-full fill-[url(/next.svg)_lightgray_0px_-3.588px_/_100%_123.567%_no-repeat]">
//         <img
//           loading="lazy"
//           srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/77ad3c93003f6964b5c99be9ce520eee01fee84de5329bd2ec8cc71c97490680?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/77ad3c93003f6964b5c99be9ce520eee01fee84de5329bd2ec8cc71c97490680?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/77ad3c93003f6964b5c99be9ce520eee01fee84de5329bd2ec8cc71c97490680?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/77ad3c93003f6964b5c99be9ce520eee01fee84de5329bd2ec8cc71c97490680?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/77ad3c93003f6964b5c99be9ce520eee01fee84de5329bd2ec8cc71c97490680?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/77ad3c93003f6964b5c99be9ce520eee01fee84de5329bd2ec8cc71c97490680?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/77ad3c93003f6964b5c99be9ce520eee01fee84de5329bd2ec8cc71c97490680?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/77ad3c93003f6964b5c99be9ce520eee01fee84de5329bd2ec8cc71c97490680?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
//           className="absolute inset-0 size-full"
//         />
//         <div className="box-border flex relative flex-col shrink-0 mt-5 h-[200px]" />
//       </div>
//       <div className="flex relative flex-col px-5 mt-6">
//         <div className="flex gap-3">
//           <div className="grow text-2xl font-bold leading-7 text-white">
//             Undead Blocks
//           </div>
//           <div className="flex-auto text-base leading-7 text-neutral-700">
//             (FPS)
//           </div>
//         </div>
//         <div className="mt-6 text-xs leading-4 text-lime-400">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua{" "}
//           <span className="text-lime-400">Read More</span>
//         </div>
//         <div className="flex gap-2 mt-4 max-md:pr-5">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/86397ceca30529c68721d762ef9c28c10b7af5bd5ffb1fb4c52762ace266023e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
//             className="shrink-0 aspect-[2.33] w-[72px]"
//           />
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/70483c1ff564e945c329e0afc99466633ceca16c2b4582987d7a29d5691e7ec7?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
//             className="shrink-0 aspect-[2.33] w-[72px]"
//           />
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/61440ef6500e43bebdbfe010e8b39d06d5369b4e9dd83db1f8e4b8b966de3aaa?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
//             className="shrink-0 aspect-[2.33] w-[72px]"
//           />
//         </div>
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fd92e904d65f45998eea98be13134c3eace4099ca23f9ba8d886f412e71830e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
//           className="mt-2 max-w-full aspect-[3.33] w-[102px]"
//         />
//         <div className="overflow-hidden relative flex-col justify-center items-center self-center px-16 py-5 mt-8 text-sm font-bold leading-7 aspect-[6.11] fill-lime-400 text-neutral-900 w-[287px] max-md:px-5">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/615da6e70d6c520451360430821ab8819bcb398bbd4b9193d9e62d7e98673ee3?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
//             className="object-cover absolute inset-0 size-full"
//           />
//           Learn More
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;

import Link from "next/link";
import React from "react";

interface CardProps {
  name: string;
  description: string;
  imageUrl: string;
}

function Card({ name, description, imageUrl }: CardProps) {
  return (
    <div>
      <div className="sm:flex  sm:w-full overflow relative flex-col grow pb-5  fill-neutral-900 max-md:mt-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6097140c168b39e16d8e4f4aa10c7cb30b956f830b45a12e0a462c80e5fc0f7a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative flex-col w-full fill-[url(/next.svg)_lightgray_0px_-3.588px_/_100%_123.567%_no-repeat]">
          <img
            loading="lazy"
            src={imageUrl}
            className="relative  inset-0 size-full"
          />
          {/* <div className="box-border flex relative flex-col shrink-0 mt-5  h-[200px] sm:h-[200px]" /> */}
        </div>
        <div className="flex relative flex-col sm:px-5 px-2 sm:mt-6 mt-4">
          <div className="flex sm:gap-3 gap-1">
            <div className=" sm:text-2xl text-s font-bold leading-7 text-white">
              {name}
            </div>
            <div className="flex-auto sm:text-base text-xs leading-7 text-neutral-700">
              (FPS)
            </div>
          </div>
          <div className="mt-6 text-xs leading-4 text-lime-400">
            {description} <span className="text-lime-400">Read More</span>
          </div>
          <div className="flex gap-2 w-1/3 sm:mt-4 ">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/86397ceca30529c68721d762ef9c28c10b7af5bd5ffb1fb4c52762ace266023e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 aspect-[2.33] sm:w-[72px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/70483c1ff564e945c329e0afc99466633ceca16c2b4582987d7a29d5691e7ec7?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 aspect-[2.33] sm:w-[72px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/61440ef6500e43bebdbfe010e8b39d06d5369b4e9dd83db1f8e4b8b966de3aaa?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 aspect-[2.33] sm:w-[72px]"
            />
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fd92e904d65f45998eea98be13134c3eace4099ca23f9ba8d886f412e71830e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="mt-2 max-w-full sm:aspect-[3.33] w-[52px] sm:w-[102px]"
          />

          {/* <div className="overflow-hidden relative flex flex-col justify-center items-center self-center px-16 py-5 mt-8 text-sm font-bold leading-7 aspect-[6.11] fill-lime-400 text-neutral-900 w-[287px] max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/615da6e70d6c520451360430821ab8819bcb398bbd4b9193d9e62d7e98673ee3?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="object-cover absolute inset-0 size-full"
          /> */}
          <Link
            href="/games/open"
            className=" flex flex-col justify-center p-6 text-center text-xs sm:text-base text-bold text-neutral-900 max-md:px-5"
            style={{
              backgroundImage: `url('/greenrect.png')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "100%",
            }}
          >
            Learn More
          </Link>
          {/* </div> */}
        </div>
      </div>

      <div className="hidden sm:hidden gap-3.5 mt-5">
        <div className="flex overflow-hidden relative flex-col items-center pb-2.5 aspect-[0.55] fill-neutral-900 w-[158px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8527b7d6ebf7e413715b6e06522cbe2e2a15eccd7dcbc31ba9cfd82a6a4fc8cb?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="object-cover absolute inset-0 size-full"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ff0aa269bdfd57731160d0277e4cec153cc3dc938a9f9d14d737f06bdae57211?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff0aa269bdfd57731160d0277e4cec153cc3dc938a9f9d14d737f06bdae57211?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff0aa269bdfd57731160d0277e4cec153cc3dc938a9f9d14d737f06bdae57211?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff0aa269bdfd57731160d0277e4cec153cc3dc938a9f9d14d737f06bdae57211?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff0aa269bdfd57731160d0277e4cec153cc3dc938a9f9d14d737f06bdae57211?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff0aa269bdfd57731160d0277e4cec153cc3dc938a9f9d14d737f06bdae57211?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff0aa269bdfd57731160d0277e4cec153cc3dc938a9f9d14d737f06bdae57211?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff0aa269bdfd57731160d0277e4cec153cc3dc938a9f9d14d737f06bdae57211?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="w-full aspect-[1.09] "
          />
          <div className="flex relative flex-col self-stretch px-3 mt-3.5">
            <div className="flex gap-1.5">
              <div className="grow text-xs font-bold leading-3 text-white">
                Undead Blocks
              </div>
              <div className="text-xs leading-3 text-neutral-700">(FPS)</div>
            </div>
            <div className="mt-2.5 text-xs leading-loose text-lime-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua{" "}
              <span className="text-lime-400">Read More</span>
            </div>
            <div className="flex gap-1 mt-2.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e463a5ef40a637ef65e35a441311cee4b62e775364d51f4419073ee31cf46e64?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="shrink-0 aspect-[2.33] w-[35px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee17529b7a5cc4947ba64216f0d79929827f2f7e6fe58fee0c69a41340f5d07a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="shrink-0 aspect-[2.33] w-[35px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/57006eaad488d36cbbe8d5ea1a908da9397601c42562d18f384ab82bf456ae8d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="shrink-0 aspect-[2.33] w-[35px]"
              />
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9300ad3d53fbd98681f56e4621598b45eb8e316dc2ca2028fcee48d49331f4be?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="mt-1 aspect-[3.23] w-[49px]"
            />
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/91d3829ad6f321f1a825cb8f2de5004c978e52597f372c47e795e7175cc93cfe?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="mt-4 w-full aspect-[6.67]"
          />
        </div>
        <div className="flex overflow-hidden relative flex-col items-center pb-2.5 aspect-[0.55] fill-neutral-900 w-[157px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccd2f36fcb64eab3a2d60e7d05e83cedafeaf6815991dfa2e00345d796880226?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="object-cover absolute inset-0 size-full"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ff0aa269bdfd57731160d0277e4cec153cc3dc938a9f9d14d737f06bdae57211?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff0aa269bdfd57731160d0277e4cec153cc3dc938a9f9d14d737f06bdae57211?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff0aa269bdfd57731160d0277e4cec153cc3dc938a9f9d14d737f06bdae57211?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff0aa269bdfd57731160d0277e4cec153cc3dc938a9f9d14d737f06bdae57211?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff0aa269bdfd57731160d0277e4cec153cc3dc938a9f9d14d737f06bdae57211?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff0aa269bdfd57731160d0277e4cec153cc3dc938a9f9d14d737f06bdae57211?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff0aa269bdfd57731160d0277e4cec153cc3dc938a9f9d14d737f06bdae57211?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff0aa269bdfd57731160d0277e4cec153cc3dc938a9f9d14d737f06bdae57211?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="w-full aspect-[1.08] "
          />
          <div className="flex relative flex-col self-stretch px-2.5 mt-3.5">
            <div className="flex gap-1.5">
              <div className="grow text-xs font-bold leading-4 text-white">
                Undead Blocks
              </div>
              <div className="text-xs leading-4 text-neutral-700">(FPS)</div>
            </div>
            <div className="mt-2.5 text-xs leading-loose text-lime-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua{" "}
              <span className="text-lime-400">Read More</span>
            </div>
            <div className="flex gap-1 mt-2.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1b79b72e462867f7ce976b517e6b972b53ea78d549b9db6a4c5c7adcc92ed9e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="shrink-0 aspect-[2.33] w-[35px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/745da68f1d959a739d1f2317d65a8ec128d8a09e23e8d35f3acf0d2da91d2c1e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="shrink-0 aspect-[2.33] w-[35px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/78e64aa6318979ce30b424e6ebb92d963fffd2c38f8bc86ab823bac5c58660e5?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="shrink-0 aspect-[2.33] w-[35px]"
              />
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4f57c6e7fe0f84b93f4ef4bd5432b53df706b0d944d1c619cfd14d8744d6d29?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="mt-1 aspect-[3.23] w-[49px]"
            />
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/91d3829ad6f321f1a825cb8f2de5004c978e52597f372c47e795e7175cc93cfe?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="mt-4 w-full aspect-[6.67]"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
