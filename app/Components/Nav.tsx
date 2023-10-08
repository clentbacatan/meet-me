"use client"

import React from 'react'
import Link from 'next/link';



//components
import Button from './Button';

const Nav = () => {

  return (
    <div className='flex flex-row-reverse h-20 mx-14 gap-4 pe-36'>
      <Link href='/Simulation/list'><Button className='button' buttonName="All metting"/></Link>
      <Link href='/Simulation/form'><Button className='button' buttonName="Add metting"/></Link>
      <Link href='/'><Button className='button' buttonName="Add to favorite"/></Link>
    </div>
    
  )
}

export default Nav