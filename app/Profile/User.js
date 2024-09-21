import Image from "next/image"
import userLogin from "../../public/assets/user01.png"

export default function User() {
  return (
    <div className='flex gap-3 items-center bg-white p-4 rounded-full dark:bg-gray-600  dark:text-gray-300 '>
       <Image
        src={userLogin}
        className="w-14 h-14 rounded-full"
      
        alt="Picture of the author"
      />
      <div >
        <h3 className="font-semibold text-2xl  ">Saidee Hasan</h3>
        <p>Developers </p>

      </div>
    </div>
  )
}
