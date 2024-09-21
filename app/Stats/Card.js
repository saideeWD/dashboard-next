import React from 'react'

export default function Card({data}) {
  return (
    <div className="bg-white p-6 float-left rounded-s-2xl flex items-center gap-4 dark:bg-slate-600 dark:text-gray-400  ">
      <span className={`${data.bgColor} px-3 py-6 text-2xl rounded-2xl dark:bg-slate-500`}><data.icon/></span>
      <div className="">
        <h2 className="text-xl"><span className="text-2xl font-bold">{data.count}</span>250 </h2>
        <p className="font-bold">{data.title}</p>
      </div>
    </div>
  )
}
