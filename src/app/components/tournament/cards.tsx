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


import React from "react";

interface CardProps {
  name: string;
  description: string;
  imageUrl: string;
}

function Card({ name, description, imageUrl }: CardProps) {
  return (
    <div className="flex overflow-hidden relative flex-col grow pb-5 aspect-[0.55] fill-neutral-900 max-md:mt-5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6097140c168b39e16d8e4f4aa10c7cb30b956f830b45a12e0a462c80e5fc0f7a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="relative flex-col w-full fill-[url(/next.svg)_lightgray_0px_-3.588px_/_100%_123.567%_no-repeat]">
        <img
          loading="lazy"
          src={imageUrl}
          className="absolute inset-0 size-full"
        />
        <div className="box-border flex relative flex-col shrink-0 mt-5 h-[200px]" />
      </div>
      <div className="flex relative flex-col px-5 mt-6">
        <div className="flex gap-3">
          <div className="grow text-2xl font-bold leading-7 text-white">
            {name}
          </div>
          <div className="flex-auto text-base leading-7 text-neutral-700">
            (FPS)
          </div>
        </div>
        <div className="mt-6 text-xs leading-4 text-lime-400">
          {description} <span className="text-lime-400">Read More</span>
        </div>
        <div className="flex gap-2 mt-4 max-md:pr-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/86397ceca30529c68721d762ef9c28c10b7af5bd5ffb1fb4c52762ace266023e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="shrink-0 aspect-[2.33] w-[72px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/70483c1ff564e945c329e0afc99466633ceca16c2b4582987d7a29d5691e7ec7?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="shrink-0 aspect-[2.33] w-[72px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/61440ef6500e43bebdbfe010e8b39d06d5369b4e9dd83db1f8e4b8b966de3aaa?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="shrink-0 aspect-[2.33] w-[72px]"
          />
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fd92e904d65f45998eea98be13134c3eace4099ca23f9ba8d886f412e71830e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="mt-2 max-w-full aspect-[3.33] w-[102px]"
        />
        <div className="overflow-hidden relative flex flex-col justify-center items-center self-center px-16 py-5 mt-8 text-sm font-bold leading-7 aspect-[6.11] fill-lime-400 text-neutral-900 w-[287px] max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/615da6e70d6c520451360430821ab8819bcb398bbd4b9193d9e62d7e98673ee3?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="object-cover absolute inset-0 size-full"
          />
          <a href="" className="relative flex justify-center text-black text-sm">Go</a>
        </div>
      </div>
    </div>
  );
}

export default Card;

