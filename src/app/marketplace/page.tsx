// import React from 'react'
// import Header from '../components/Header'
// import Sideprop from '../components/marketplace/Sideprops'
// import ProfileCard from '../components/marketplace/ProfileCard'
// import Cardholder from '../components/games/Cardholder'
// import Kolscard from '../components/marketplace/Kolscard'

// const page = () => {
//   return (
//     <div className='p-4'>
//       <div className="flex gap-5 mt-16 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
//         <div className="flex-auto text-5xl font-bold text-lime-400 max-md:max-w-full max-md:text-4xl">
//           KOLs<span className="text-lime-400"> Marketplace</span>
//         </div>
//         <div className="flex gap-5 justify-between p-4 text-sm font-medium text-white rounded-xl bg-neutral-900" style={{marginLeft: '600px'}}>
//           <div>Defualt Sorting</div>
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8c6b123727647ceb3dd3323a93ccdee7b8499bd4ce14ac225956e69974db501?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
//             className="shrink-0 w-5 aspect-square"
//           />
//         </div>
//       </div>
      
//       <div className="flex gap-3 mt-16 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
//         <div className="flex-auto w-[140%]">
//           <Sideprop />
//         </div>
//         <div className="flex-auto">
//          <Kolscard />

//         </div>
//       </div>

//     </div>
//   )
// }

// export default page

"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from next/router
import Header from '../components/Header';
import Sideprop from '../components/marketplace/Sideprops';
import ProfileCard from '../components/marketplace/ProfileCard';
import Cardholder from '../components/games/Cardholder';
import Kolscard from '../components/marketplace/Kolscard';

const Page = () => {
  const [sortingOption, setSortingOption] = useState('Default');
  const router = useRouter(); 

  const handleSortingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;
    setSortingOption(selectedOption);
    router.push(`?sorting=${selectedOption}`);
  };

  return (
    <div className='sm:p-4 p-2'>
      <div className="flex gap-5 mt-16 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex-auto text-5xl font-bold text-lime-400 max-md:max-w-full max-md:text-4xl">
          KOLs<span className="text-lime-400"> Marketplace</span>
        </div>
        <div className="flex gap-5 justify-between px-10 py-3  text-m cursor pointer font-medium text-white rounded-xl bg-neutral-900  " 
        style={{ backgroundImage: `url('/defaultbox.png')`, backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'100%', paddingBottom: '0.25rem'}}
        >
          <select
            value={sortingOption}
            onChange={handleSortingChange}
            className="bg-neutral-900 text-white l outline-none cursor-pointer"
          >
            <option className='cursor-pointer hover:bg-lime-400' value="Default">Default Sorting</option>
            <option value="Option1">Option 1</option>
            <option value="Option2">Option 2</option>
          </select>
        </div>
      </div>
      
      <div className="flex gap-3 mt-16 w-full flex-row  flex-wrap sm:flex-nowrap max-md:mt-10 ">
        <div className="flex-auto hidden sm:flex sm:w-[100%]">
          <Sideprop />
        </div>
        <div className="flex-auto flex">
         <Kolscard />
        </div>
      </div>
    </div>
  );
};

export default Page;
