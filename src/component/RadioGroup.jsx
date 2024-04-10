import React from 'react';

function RadioGroup({ setSelectedOption, setIsdisabled, radioData }) {

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setIsdisabled(false)
  };

  // console.log(radioData[0].value.split(" ")[0],"+",radioData[0].value.split(" ").slice(1).join(' '))

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
          <div><label className='label1' htmlFor={item.id}>
            <div className="flex h-12">
              <img className='h-10' src={item.img} alt="" />
              <p className='pl-4 my-auto text-sm'><span className='font-medium'>{item.value.split(" ")[0]}&nbsp;</span>{item.value.split(" ").slice(1).join(' ')}</p>
            </div>
          </label></div>
        </div>
      })}
    </div>
  );
}

export default RadioGroup;
