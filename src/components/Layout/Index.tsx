import React from 'react'
import Header from "../Header/Index"

export default function Index({children} : {children : React.ReactNode}) {
  return (
    <main>  
        <Header/>
        {children}
    </main>
  )
}
