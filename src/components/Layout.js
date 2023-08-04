import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full inline-block p-32 bg-white z-0 ${className}`}>
        {children}
    </div>
  )
}

export default Layout