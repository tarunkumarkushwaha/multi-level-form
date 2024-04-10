import React from 'react';

function RadioGroup({ setSelectedOption, setIsdisabled, radioData }) {

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setIsdisabled(false)
  };

  return (
    <div className='flex flex-col items-center smooth-entry'>
      {radioData.map((item, i) => {
        return <div key={i}>
          <input
            type="radio"
            id={item.id}
            name="options"
            value={item.value}
            onChange={handleOptionChange}
          />
          <div><label className='label1' htmlFor={item.id}>{item.value}</label></div>
        </div>
      })}
    </div>
  );
}

export default RadioGroup;
