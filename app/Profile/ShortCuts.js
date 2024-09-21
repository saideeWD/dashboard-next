import React from 'react'
import Title from '../ui/Title'
import { shortcutLink } from '../constants'
import { IoIosArrowForward } from 'react-icons/io'

export default function ShortCuts() {
  return (
    <div>
      <h1 className="flex gap-4 flex-col rounded-lg bg-white p-4  dark:bg-gray-600 " >ShortCurts</h1>
      <Title>Shortcutes</Title>
      {
        shortcutLink.map((list,index)=>(
            <div className=" flex justify-between items-center cursor-pointer  rounded-sm" key={index}>
                <div className="flex gap-4 mt-2 items-center ">
                    <span className="bg-blue-100 p-2 rounded-full w-8 h-8 flex items-center justify-center dark:bg-gray-800 dark:text-gray-300   ">
                        <list.icon/>
                    </span>
                    <h3 className="font-medium dark:text-gray-300 ">{list.title}</h3>
                </div>
                <span className="bg-gray-300 p-2 rounded-md dark:bg-gray-700 dark:text-gray-300 hover:mr-3 transition-all duration-500 "><IoIosArrowForward/></span>


            </div>
        ))
      }
    </div>
  )
}
