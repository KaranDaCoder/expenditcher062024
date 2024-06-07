'use client';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowIconDown, ArrowIconUp } from './AllSvgs';
import UserProfilePanel from './UserProfilePanel';


const UserProfile = (isUserLoggedIn) => {
 console.log(isUserLoggedIn)
 const [userPanel, setUserPanel] = useState(false);
 const user = {
   fName: 'Karan',
   lName: 'Khot',
   pic: 'https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
 };
  return (
   <>
    <div className='relative flex items-center w-auto h-full gap-1 py-1 transition-all duration-200 rounded-full cursor-pointer hover:scale-105 lg:hidden'>
      <Image
        src={user.pic}
        height={1920}
        width={1080}
        alt={'profile'}
        className={`w-8 h-8 rounded-full lg:h-14 lg:w-14`}
        onClick={() => setUserPanel(!userPanel)}
      />
      {userPanel ? <ArrowIconUp /> : <ArrowIconDown />}
    </div>
      {userPanel && <UserProfilePanel setUserPanel={setUserPanel}/>}
   </>
  );
}

export default UserProfile