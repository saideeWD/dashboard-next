import Image from 'next/image'
import React from 'react'

export default function Member({users}) {
  return (
    <div className='flex justify-between items-center'>
      <div className="flex items-center gap-3">
        <Image src={users.image} alt={users.name} className='w-12 h-12 rounded-full flex' />
        <div className="">
            <h2 className="font-bold">{users.name}</h2>
            <span className="font-semibold text-gray-400 text-sm">{users.country}</span>

        </div>

      </div>
      <span className={`${users.bgColor} p-3 rounded-full text-xs text-gray-700  font-semibold dark:bg-gray-500 dark:text-gray-300 `} >{users.role}</span>
    </div>
  )
}
