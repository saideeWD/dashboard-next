import React from 'react'
import Title from '../ui/Title'
import {FiSend} from "react-icons/fi"
import BarChart from './BarChart'
export default function Balance({darkMode}) {
  return (
    <div className="bg-white p-5 rounded-2xl dark:text-gray-300 flex-1 dark:bg-gray-600 ">
        <div className="flex justify-between items-center" >
            <Title>Balance</Title>
          <FiSend className="bg-gray-500 p-2 rounded-full w-8 h-8  text-gray-300 " />
        </div>
        <div className="">
            <h1 className="font-bold text-2xl"> $800,00 <span className="font-medium text-xl">USD</span> </h1>
        <span>21 September 2024</span>


        </div>
        <BarChart darkMode={darkMode}/>
      
    </div>
  )
}
