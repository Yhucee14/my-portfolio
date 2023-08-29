import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full inline-block sm:p-32 xx:p-5 bg-white dark:bg-black z-0 ${className}`}>
        {children}
    </div>
  )
}

export default Layout