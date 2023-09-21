import React from 'react'


// First define an interface for the props
interface ButtonProps {
    button: string;
    
}


// The ButtonProps interface is use as a Parameter for React.FC

const Button: React.FC<ButtonProps> = ({button}) => {
  return (
    // Declare the property using interface or type
    // assign the "Data type" of the property
    // this property can now be use to the other component, see NAV.TSX
    <button className='button border-2 border-solid hover:bg-orange-400 px-4 py-3 mt-8 mx-auto rounded-lg lg:font-semibold'>{button}</button>
  )
}

export default Button;