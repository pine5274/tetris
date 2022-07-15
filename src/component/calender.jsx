import React from "react";

const Calender = ({ day, onDayChange, label }) => {

  const handleDayInput = (event) => {
    onDayChange(event.target.value);
  };
  return (
    <>
        <label className="block text-white text-sm font-bold mb-2" htmlFor="birth">{label}</label>
        <input
            value={day}
            onChange={handleDayInput}
            className="bg-white p-3 rounded mb-3 focus:outline-none focus:ring-2 ring-blue-500 w-full"
            id={label}
            name={label}
            placeholder={label}
            type="date"
            required
            autoComplete="off"
        />
    </>
  );
};

export default Calender;