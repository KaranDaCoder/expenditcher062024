'use client'
import React, { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

const DatePickerTest = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

 
  const handleValueChange = (newValue) => {
    console.log('newValue:', newValue);
    setValue(newValue);
  };

  return (
    <Datepicker
      value={value}
      onChange={handleValueChange}
      useRange={false}
      asSingle={true}
      containerClassName='w-full relative text-center border rounded-md outline-none cursoe-pointer'
      primaryColor={'lime'}
      showShortcuts={false}
    />
  );
};
export default DatePickerTest;
