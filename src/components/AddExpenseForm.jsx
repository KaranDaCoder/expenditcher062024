'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

const AddExpenseForm = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  const [expenseObject, setExpenseObject] = useState({
    name: '',
    category: '',
    amount: '',
    payment_account: '',
    status: '',
    state: '',
    description: '',
    date: '',
  });

  const handleFormSubmision = (e) => {
    setExpenseObject((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCreateExpense = (e) => {
    e.preventDefault();
    const newExpenseObject = {
      ...expenseObject,
      date: value?.endDate,
    };
    console.log(`Expense Object Created ${JSON.stringify(newExpenseObject)}`);
  };

  return (
    <div className='w-full h-auto bg-white border shadow-lg lg:py-10 lg:w-3/4 rounded-xl'>
      <h2 className='text-lg font-medium text-center text-green-700 lg:text-2xl'>
        Add New Expense
      </h2>
      <div className='mt-4 lg:mt-10'>
        <form onSubmit={handleCreateExpense}>
          <div className='flex flex-col items-center justify-center h-full gap-6 p-2 text-sm font-semibold text-slate-500'>
            <select
              name='category'
              id='cat'
              className='w-3/4 h-10 text-center bg-white border rounded-md outline-none cursor-pointer focus:border-green-900 text-slate-600'
              value={expenseObject.category}
              onChange={handleFormSubmision}
              required
            >
              <option value='' disabled='disabled'>
                Categoryss
              </option>
              <option value='Other'>Other</option>
              <option value='travel'>Travel</option>
              <option value='grocery'>Grocery</option>
            </select>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Transaction name'
              className='w-3/4 h-10 px-2 text-sm font-medium bg-white border rounded-md outline-none text-slate-600 cursor-text focus:border-green-900 placeholder:italic placeholder:text-sm placeholder:font-light'
              minLength='5'
              maxLength='60'
              required
              role='presentation'
              autoComplete='off'
              value={expenseObject.name}
              onChange={handleFormSubmision}
            />
            <div className='flex flex-col items-center justify-between w-3/4 gap-2 outline-none lg:flex-row'>
              <select
                name='payment_account'
                id='payment_account'
                className='w-full h-10 text-sm font-semibold text-center bg-white border rounded-md outline-none cursor-pointer text-slate-500 focus:ring-1 focus:ring-green-600'
                value={expenseObject.payment_account}
                onChange={handleFormSubmision}
                required
              >
                <option  disabled='disabled' value={''}>
                  Payment Mode
                </option>
                <option  value='account1'>Wells Fargo Card Ending 2222</option>
                <option  value='account2'>Account2</option>
                <option  value='cash'>Cash</option>
              </select>
              <Datepicker
                useRange={false}
                asSingle={true}
                inputClassName='py-2 w-full text-center border rounded-md outline-none cursor-pointer font-medium h-10'
                primaryColor={'lime'}
                showShortcuts={false}
                value={value}
                onChange={(newValue) => setValue(newValue)}
                placeholder='Transaction Date'
                required={true}
              />
            </div>

            <div className='flex flex-col items-center justify-between w-3/4 gap-2 lg:flex-row'>
              <input
                type='number'
                name='amount'
                id='amount'
                placeholder='$$.$$'
                className='w-full px-2 py-2 font-medium text-center border rounded-md outline-none lg:w-3/4 cursor-text focus:border-green-900 placeholder:italic placeholder:text-sm placeholder:font-light text-slate-600'
                inputMode='decimal'
                pattern='[0-9]*'
                min={0.01}
                max={9999999}
                step='any'
                required={true}
                value={expenseObject.amount}
                onChange={handleFormSubmision}
              />
              <input
                type='text'
                name='state'
                id='state'
                placeholder='State'
                minLength='2'
                maxLength='2'
                role='presentation'
                autoComplete='off'
                className='w-full px-2 py-2 font-medium text-center uppercase border rounded-md outline-none placeholder:font-light lg:w-3/4 cursor-text focus:border-green-900 placeholder:italic placeholder:text-sm focus:bg-transparent placeholder:lowercase'
                value={expenseObject.state}
                onChange={handleFormSubmision}
              />
              <select
                name='status'
                id='status'
                className='w-full h-10 text-sm font-semibold text-center bg-white border rounded-md outline-none cursor-pointer lg:w-3/4 focus:border-green-900 text-slate-500'
                value={expenseObject.status}
                onChange={handleFormSubmision}
                required
              >
                <option value='' disabled='disabled'>
                  Status
                </option>
                <option value='completed'>Completed</option>
                <option value='pending'>Pending</option>
                <option value='canceled'>Canceled</option>
              </select>
            </div>
            <textarea
              name='description'
              id='desc'
              cols='5'
              rows='5'
              placeholder='Description'
              className='w-3/4 px-2 text-sm font-medium border rounded-lg outline-none resize-none text-slate-600 lg:w-3/4 focus:ring-1 focus:ring-green-800 placeholder:italic placeholder:font-light'
              value={expenseObject.description}
              onChange={handleFormSubmision}
            />
            <span className='w-full text-xs italic font-light text-center text-slate-400'>
              Not seeing your payment account? Manage them{' '}
              <Link href={'/'} className='text-blue-700'>
                here
              </Link>
            </span>
            <div className='flex flex-col items-center justify-around order-4 w-3/4 gap-2 lg:flex-row'>
              <button
                type='reset'
                className='w-1/2 py-1 text-center transition-all duration-300 bg-white border rounded-lg text-slate-600 font-extralight hover:bg-slate-600 hover:text-white lg:text-lg lg:w-1/4'
                // onClick={handleFormCancelation}
              >
                Cancel
              </button>
              <button
                className='w-1/2 py-1 text-center transition-all duration-300 bg-white border rounded-lg text-slate-600 font-extralight hover:bg-green-800 hover:text-white lg:text-lg lg:w-1/4'
                type='submit'
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExpenseForm;
