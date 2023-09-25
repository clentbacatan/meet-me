import React from 'react'


const buttonLayout: Layout = {
  className: "border-2 border-solid hover:bg-orange-400 px-4 py-3 mt-8 mx-auto rounded-lg lg:font-semibold",
  buttonName: ""
}


const Button: React.FC<Layout> = ({buttonName}) => {

  return (
    <div>
        <button className={buttonLayout.className}>{buttonName}</button>
    </div>
    
  )
}

export default Button;