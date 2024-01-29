import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { CiText } from 'react-icons/ci';
import Productdrop from './Dropdown';

export default function Modal({ addDataToToggle }) {
  const [showModal, setShowModal] = useState(false);
  const [addToMainCategory, setAddToMainCategory] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleCheckboxChange = (event) => {
    setAddToMainCategory(event.target.checked);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setButtonClicked(true);

    if (inputValue.trim() === '') {
      return;
    }
    addDataToToggle({ value: inputValue, label: inputValue });
    setShowModal(false);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const handleModalClick = (event) => {
    event.stopPropagation(); // Prevent click inside modal from closing it
  };

  return (
    <>
      <span onClick={() => setShowModal(true)}>اضف تصنيف</span>
      {showModal && (
        <>
          <div
            className="justify-center product-1 text-right items-center  flex overflow-x-hidden slideIn overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={closeModal}
          >
            <div
              className="relative w-1/2 my-6 mx-auto"
              onClick={handleModalClick}
            >
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start items-center modal-header justify-between px-4 py-2 rounded-t">
                  <h3>اضافة تصنيف جديد</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
                  </button>
                  <button
                    className="background-transparent font-bold uppercase text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <FaTimes />
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form action="">
                    <label>اسم التصنيف</label>
                    <div
                      className={`flex items-center border ${
                        buttonClicked && inputValue.trim() === ''
                          ? 'border-red-500'
                          : 'border-gray-200'
                      } rounded p-1`}
                    >
                      <span>
                        <CiText
                          style={{
                            color:
                              buttonClicked && inputValue.trim() === ''
                                ? 'red'
                                : 'inherit',
                          }}
                        />
                      </span>
                      <input
                        className={`w-full outline-0 p-1 ${
                          buttonClicked && inputValue.trim() === ''
                            ? 'text-red-500 placeholder-red-500'
                            : ''
                        }`}
                        type="text"
                        placeholder="ادخل اسم التصنيف"
                        value={inputValue}
                        onChange={handleInputChange}
                      />
                    </div>

                    <label className="flex gap-2 my-3" htmlFor="">
                      <input
                        className="w-5"
                        type="checkbox"
                        checked={addToMainCategory}
                        onChange={handleCheckboxChange}
                      />
                      اضافة الى تصنيف رئيسي
                    </label>

                    {addToMainCategory && <Productdrop />}
                  </form>
                </div>
                <div className="flex items-center justify-between py-3 px-4 bg-gray-200 border-t py-2 border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-[#baf3e6] text-[#004d5a] active:bg-emerald-600 uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleButtonClick}
                  >
                    اضافة التصنيف
                  </button>
                  <button
                    className="text-gray-500 bg-gray-300 hover:shadow-md px-6 py-2 rounded-md text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    إلغاء
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-animation fixed inset-0 z-40"></div>
        </>
      )}
    </>
  );
}
