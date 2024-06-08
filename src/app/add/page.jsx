import React from 'react';
import AddExpenseForm from '@/components/AddExpenseForm';
import Link from 'next/link';

export const metadata = {
  title: 'Ecpenditcher | Add Expense',
  description: 'Generated by create next app',
};

const AddExpense = () => {
  return (
    <div className='w-full h-[calc(100vh-4rem)]'>
      <div className='flex items-center justify-center w-full gap-2 lg:justify-start'>
        <Link href={'/dashboard'} className='text-base text-fuchsia-800 hover:underline underline-offset-2'>
          Dashboard{' '}
        </Link>
        <span className='text-base'>{'>'} Add Expense</span>
      </div>
      <div className='flex items-center justify-center w-full h-full p-1 bg-white'>
        <AddExpenseForm />
      </div>
    </div>
  );
};

export default AddExpense;
