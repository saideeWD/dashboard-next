import Link from 'next/link'
import React from 'react'
import { IoMoonOutline } from "react-icons/io5";
import { AiOutlineMenuUnfold } from "react-icons/ai";
export default function Header({darkMode , toggleDarkMode,toggleSidebar}) {
  return (
   <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
<div className="px-3 py-3 lg:px-5 lg:pl-3 ">
    <div className="flex items-center justify-between">
        <div className="flex items-center justify-center rtl:justify-end md:gap-6 gap-2">
            <button onClick={toggleSidebar}  className='inline-flex items-center p-2 text-md text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-slate-700 dark:focus:ring-gray-600'>< AiOutlineMenuUnfold />   </button>
          
            <Link className='sm:text-2xl whitespace-nowrap dark:text-white' href='/'>Dash<span className='text-orange-500'>Board</span></Link>
        </div>
        <button onClick={toggleDarkMode} className="dark:bg-slate-50 dark:text-slate-700 rounded-full p-2 "><IoMoonOutline /></button>
    </div>
</div>
   </nav>
  )
}
