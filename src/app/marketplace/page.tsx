import React from 'react'
import Header from '../components/Header'
import Sideprop from '../components/marketplace/Sideprops'
import ProfileCard from '../components/marketplace/ProfileCard'
import Cardholder from '../components/games/Cardholder'
import Kolscard from '../components/marketplace/Kolscard'

const page = () => {
  return (
    <div className='p-4'>
      <div className="flex gap-5 mt-16 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex-auto text-5xl font-bold text-lime-400 max-md:max-w-full max-md:text-4xl">
          KOLs<span className="text-lime-400"> Marketplace</span>
        </div>
        <div className="flex gap-5 justify-between p-4 text-sm font-medium text-white rounded-xl bg-neutral-900" style={{marginLeft: '600px'}}>
          <div>Defualt Sorting</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8c6b123727647ceb3dd3323a93ccdee7b8499bd4ce14ac225956e69974db501?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="shrink-0 w-5 aspect-square"
          />
        </div>
      </div>
      
      <div className="flex gap-3 mt-16 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex-auto w-[140%]">
          <Sideprop />
        </div>
        <div className="flex-auto">
         <Kolscard />

        </div>
      </div>

    </div>
  )
}

export default page
