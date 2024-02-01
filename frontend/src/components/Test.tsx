import React, { useState } from 'react';

const YourComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event :  any) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {

    console.log('Input value:', inputValue);
  };

  const buttonClass = inputValue !== '' ? 'active' : 'inactive';

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter text"
      />
      <button
        onClick={handleSubmit}
        className={buttonClass}
      >
        Submit
      </button>
    </div>
  );
};

export default YourComponent;
