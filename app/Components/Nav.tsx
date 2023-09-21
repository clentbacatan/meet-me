"use client"

import React from 'react'
import Link from 'next/link';

//components
import Button from './Button';



const Nav = () => {

  return (
    <div>
        <Link href='/home'><Button button='All meetings'/></Link>
        <Link href='/addmeeting'><Button button='Add new meetings'/></Link>
        <Link href='/favorites'><Button button='Add My favorites'/></Link>
    </div>
    
  )
}

export default Nav