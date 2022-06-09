import React from 'react'

export default function Header() {
  return (
    <div className="px-4 py-7 flex bg-darkblue justify-between items-center">
        <div className="text-white font-[800]">Where in the world?</div>
        <div className="flex text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="white" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <div className="text-sm cursor-pointer">Dark Mode</div>
        </div>

    </div>
  )
}

