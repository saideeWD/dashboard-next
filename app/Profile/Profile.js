import React from 'react'
import User from './User'
import ShortCuts from './ShortCuts'
import Chart from './Chart'

export default function Profile() {
  return (
    <div className='px-2 py-4 mt-2 bg-slate-200 rounded-lg w-full dark:bg-gray-700 lg-w-60 xl:w-80 flex flex-col justify-between gap-4 '>
      <User/>
      <ShortCuts/>
      <Chart/>

      
    </div>
  )
}
