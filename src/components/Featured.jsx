import Link from 'next/link'
import React from 'react'

const Featured = () => {
  return (
    <div className='w-full mt-2 bg-white border shadow-lg rounded-2xl h-1/2'>
      <div className='flex flex-col justify-around w-auto h-full p-2'>
        <h2 className='text-5xl lg:text-7xl text-slate-700'>
          Welcome,{' '}
          <span className='text-5xl lg:text-7xl text-fuchsia-800'>
            Karan Khot.
          </span>
        </h2>
        <h2 className='text-2xl'>
          You have spent
          <span className='px-2 py-1 font-semibold text-slate-600'>
            $123.45
          </span>
          <span className='tracking-wider text-slate-600'>as of today,</span>
          <span>June 07,2024.</span>
        </h2>
        <Link href={"/"} className='w-1/2 py-2 text-xl tracking-wider text-center text-white uppercase transition-all duration-300 bg-green-800 rounded-xl lg:w-1/4 hover:bg-green-900'>
        View All
        </Link>
      </div>
    </div>
  );
}

export default Featured