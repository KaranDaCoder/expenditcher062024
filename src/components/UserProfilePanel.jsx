import Link from 'next/link'
import React from 'react'

const UserProfilePanel = () => {
  return (
    <div className='absolute flex flex-col items-start justify-around w-3/4 h-auto gap-4 px-10 py-4 text-sm bg-white border rounded-lg shadow-md lg:hidden top-14 right-2'>
     <Link href={'/'}>Profile</Link>
     <Link href={'/dashboard'}>Dashboard</Link>
     <Link href={'/'}>Accounts</Link>
     <Link href={'/'}>Logout</Link>
    </div>
  )
}

export default UserProfilePanel