import React, { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

const App = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log('newValue:', newValue);
    setValue(newValue);
  };

  return (
    <div className="relative">
      <h5 className="text-[14px] leading-normal text-[#003C47] absolute top-[11px] right-10 z-50 font-normal">
        تاريخ التقرير
      </h5>
      <Datepicker
        classNames="text-right"
        primaryColor={'teal'}
        value={value}
        onChange={handleValueChange}
        showShortcuts={true}
        format="yyyy-MM-dd" // Customize the format as needed
        locale="ar"
      />
    </div>
  );
};
export default App;
