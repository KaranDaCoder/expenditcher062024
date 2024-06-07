import React from 'react'

const Footer = () => {
  return (
    <div className='h-16 lg:h-20'>
      <div className='flex flex-row justify-between h-full'>
        <h2 className='text-sm'>created for web</h2>
        <div className='flex flex-col gap-1'>
          <p className='text-sm font-thin capitalize text-slate-800'>about</p>
          <p className='text-sm font-thin capitalize text-slate-800'>careers</p>
          <p className='text-sm font-thin capitalize text-slate-800'>support</p>
        </div>
      </div>
    </div>
  );
}

export default Footer