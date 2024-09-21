import React from 'react'
import Title from '../ui/Title'
import { users } from '../constants'
import Member from './Member'

export default function Team() {
  return (
    <div className="bg-white p-2 rounded-2xl dark:bg-gray-600 flex-1 flex gap-5 flex-col  dark:text-gray-300 ">
      <Title>Team</Title>
      {
        users.map((users,index)=>(
          <Member key={index} users={users}/>
        ))
      }
    </div>
  )
}
