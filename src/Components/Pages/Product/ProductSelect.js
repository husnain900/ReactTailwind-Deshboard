import React, { useState } from 'react';
import Select from 'react-select';

export default ({ colorsOption }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      maxHeight: '40px',
      minHeight: '40px',
      height: '40px',
    }),
    valueContainer: (provided) => ({
      ...provided,
      height: '40px',
      padding: '5px 6px',
    }),
    clearIndicator: (provided) => ({
      ...provided,
      padding: '10px',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: '10px',
    }),
    placeholder: (provided) => ({
      ...provided,
      fontSize: '13px',
    }),
    input: (provided) => ({
      ...provided,
      caretColor: 'transparent',
    }),
    option: (provided) => ({
      ...provided,
      fontSize: '13px',
    }),
    menuList: (provided) => ({
      ...provided,
      '::-webkit-scrollbar': {
        width: '5px',
      },
      '::-webkit-scrollbar-track': {
        background: '#f1f1f1',
      },
      '::-webkit-scrollbar-thumb': {
        background: '#888',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: '#555',
      },
    }),
  };

  return (
    <Select
      className="basic-multi-select"
      classNamePrefix="select"
      isDisabled={isDisabled}
      isLoading={isLoading}
      isClearable={false}
      isRtl={isRtl}
      isSearchable={true}
      isMulti={true}
      name="color"
      options={colorsOption}
      styles={customStyles}
      hideSelectedOptions={false}
      placeholder="اختر تصنيف المنتج"
    />
  );
};
