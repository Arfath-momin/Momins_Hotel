'use client'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateRangePicker({ setStartDate, setEndDate }) {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  const handleStartDateChange = (date) => {
    setStart(date);
    setStartDate(date); // Update parent component's state
    if (end && date > end) {
      setEnd(null);
      setEndDate(null); // Update parent component's state
    }
  };

  const handleEndDateChange = (date) => {
    setEnd(date);
    setEndDate(date); // Update parent component's state
  };

  return (
    <div className="flex flex-col lg:flex-row lg:gap-6">
      <DatePicker
        selected={start}
        onChange={handleStartDateChange}
        selectsStart
        startDate={start}
        endDate={end}
        minDate={new Date()}
        placeholderText="Select start date"
        className="pl-2 text-black py-2 mb-2 border border-[#c0c6c7] border-1 bg-white w-full"
      />
      <DatePicker
        selected={end}
        onChange={handleEndDateChange}
        selectsEnd
        startDate={start}
        endDate={end}
        minDate={start}
        placeholderText="Select end date"
        className="pl-2 text-black py-2 mb-2 border border-[#c0c6c7] border-1 bg-white w-full"
      />
    </div>
  );
}

export default DateRangePicker;
