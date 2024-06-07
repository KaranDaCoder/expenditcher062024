import Link from 'next/link';
import UserProfile from './UserProfile';
import { DashboardIcon, LogoutIcon, PaymentAccountsIcon, PlusIcon, SettingsIcon } from './AllSvgs';


const Navbar = () => {
 const isUserLoggedIn = true;
  return (
    <div className='sticky top-0 flex items-center justify-center w-full h-12 bg-white lg:h-16'>
      <div className='flex items-center w-full h-full'>
        <Link
          href='/'
          className='flex items-center justify-start w-1/2 h-full text-2xl underline lg:text-3xl underline-offset-4 text-slate-600'
        >
          Expenditcher
        </Link>

        <div className='flex items-center justify-end w-1/2 h-full px-2 text-end'>
          {isUserLoggedIn === false ? (
            <Link
              href='/login'
              className='inline-flex px-4 py-2 text-xs font-semibold tracking-widest text-white bg-green-700 rounded-full lg:py-3 hover:bg-green-800 w-fit'
            >
              Sign in/Register
            </Link>
          ) : (
            <UserProfile isUserLoggedIn />
          )}
        </div>

        {isUserLoggedIn && <div className='items-center justify-end hidden mt-2 lg:w-full lg:gap-4 lg:space-x-2 lg:flex'>
          <Link
            href='/dashboard'
            className='flex flex-col items-center justify-center gap-1 transition-all duration-300 hover:scale-105'
          >
            <DashboardIcon />
            Dashboard
          </Link>
          <Link
            href='/add'
            className='flex flex-col items-center justify-center gap-1 transition-all duration-300 hover:scale-105'
          >
            {' '}
            <PlusIcon /> Add Expense
          </Link>
          <Link
            href='/'
            className='flex flex-col items-center justify-center gap-1 transition-all duration-300 hover:scale-105'
          >
            {' '}
            <PaymentAccountsIcon />
            Accounts
          </Link>
          <Link
            href='/'
            className='flex flex-col items-center justify-center gap-1 transition-all duration-300 hover:scale-105'
          >
            {' '}
            <SettingsIcon /> Profile
          </Link>
          <Link
            href='/'
            className='flex flex-col items-center justify-center gap-1 text-red-600 transition-all duration-300 hover:scale-105'
          >
            {' '}
            <LogoutIcon /> Logout
          </Link>
        </div>}
      </div>
    </div>
  );
}

export default Navbar