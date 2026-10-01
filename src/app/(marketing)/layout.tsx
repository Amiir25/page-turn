import React, { ReactNode } from 'react'

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className='w-full max-w-150 mx-auto'>
        {children}
    </div>
  )
}
