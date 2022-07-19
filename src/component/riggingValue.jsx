import React from "react";

const RiggingValue = ({ value, onValueChange, label }) => {

  const handleInput = (event) => {
    onValueChange(event.target.value);
  };

  return (
    <>
        <label className="block text-white text-sm font-bold mb-2" htmlFor="birth">{label}</label>
        <input
            value={value}
            onChange={handleInput}
            className="bg-white p-3 rounded mb-3 focus:outline-none focus:ring-2 ring-blue-500 w-full"
            id={label}
            name={label}
            placeholder={label}
            type="text"
            inputMode="numeric"
            required
            autoComplete="off"
        />
    </>
  );
};

export default RiggingValue;