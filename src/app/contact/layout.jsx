import React from 'react'

export default function ContactLayout({children}) {
  return (
    <div className='border-2 border-purple-500 mt-8'>
    <h1>This is our Contact layout and children page is given below</h1>
      {children}
    </div>
  )
}
