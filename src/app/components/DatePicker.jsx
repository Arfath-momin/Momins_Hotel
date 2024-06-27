'use client'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { formatDistanceStrict } from 'date-fns';

function DateRangePicker() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    if (endDate && date > endDate) {
      setEndDate(null);
    }
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const calculateDays = (start, end) => {
    if (start && end) {
      return formatDistanceStrict(start, end, { unit: 'day' }).split(' ')[0];
    }
    return 0;
  };

  return (
   
      <div className="flex flex-col lg:flex-row lg:gap-6">
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          placeholderText="Select start date"
          className="pl-2 text-black py-2 mb-2 border border-[#c0c6c7] border-1 bg-white w-full"
        />
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate || new Date()}
          placeholderText="Select end date"
          className="pl-2 text-black py-2 border border-[#c0c6c7] border-1 bg-white w-full"
        />
      </div>
    
  );
}

export default DateRangePicker;
