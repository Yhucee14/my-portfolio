import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full inline-block sm:px-20 sm:py-5 xx:p-5  dark:bg-black  ${className}`}>
        {children}
    </div>
  )
}

export default Layout