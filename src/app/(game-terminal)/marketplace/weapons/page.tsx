import React from 'react'
import Header from '@/app/components/marketplace/weapons/header'
import Sidepropweapons from '@/app/components/marketplace/weapons/sidepropweapons'
import Weaponcard from '@/app/components/marketplace/weapons/weaponcard'
import Cardholder from '@/app/components/games/Cardholder'
import Test from '@/app/components/marketplace/weapons/weapondetails'

const page = () => {
  return (
    <div>
      <Header />
      <div className='flex flex-row'>
        <div className='w-1/4'><Sidepropweapons /></div>
        <div className='relative'><Weaponcard /></div>
       
      </div>
      <div className=''><Weaponcard/></div>
      
    </div>
  )
}

export default page
