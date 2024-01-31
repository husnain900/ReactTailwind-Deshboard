import React, { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

const App = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log('newValue:', newValue);
    setValue(newValue);
  };

  return (
    <>
      <Datepicker
        useRange={false}
        asSingle={true}
        value={value}
        placeholder={'نهاية التخفيض (اختياري) '}
        onChange={handleValueChange}
      />
    </>
  );
};

export default App;
