import React, { ReactNode } from 'react'

export default function BookLayout({ children }: { children: ReactNode }) {
  return (
    <div>
        <div className='border-b p-3 text-sm text-center'>Browsing the library</div>
        {children}
    </div>
  )
}
