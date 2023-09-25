"use client"

import React from 'react'
import Link from 'next/link';



//components
import Button from './Button';

const Nav = () => {

  return (
    <div className='flex sticky top-0 items-center md:flex-row justify-between h-20 lg:min-w-full mx-auto px-4 '>
      <Link href='/Allmeeting'><Button className='button' buttonName="All metting"/></Link>
      <Link href='/addmeeting'><Button className='button' buttonName="Add metting"/></Link>
      <Link href='/Allmeeting'><Button className='button' buttonName="Add to favorite"/></Link>
    </div>
    
  )
}

export default Nav