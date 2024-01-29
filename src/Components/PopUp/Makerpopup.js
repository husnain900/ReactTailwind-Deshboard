import React, { useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('default');
  const modalContent = useRef();

  const handleRadioChange = (event) => {
    setSelectedTemplate(event.target.value);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const handleOverlayClick = (event) => {
    if (modalContent.current && !modalContent.current.contains(event.target)) {
      closeModal();
    }
  };

  return (
    <>
      <button className="maker-btn" onClick={() => setShowModal(true)}>
        تغيير
      </button>

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            style={{ paddingTop: '100px', marginTop: '10px', zIndex: '1000' }}
            onClick={handleOverlayClick}
          >
            <div
              className="relative w-auto my-6 mx-auto max-w-3xl"
              ref={modalContent}
            >
              onClick={(e) => e.stopPropagation()}
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start items-center modal-header justify-between px-4 py-2 rounded-t">
                  <div>
                    {' '}
                    <h3>تحديد قالب التطبيق</h3>
                  </div>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
                  </button>
                  <button
                    className="background-transparent font-bold uppercase text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={closeModal}
                  >
                    <FaTimes />
                  </button>
                </div>
                <div
                  className="radio-buttons"
                  style={{ display: 'flex', paddingTop: '30px' }}
                >
                  <div
                    style={{
                      maxWidth: '50%',
                      padding: '0 20px',
                      textAlign: 'center',
                    }}
                  >
                    <input
                      type="radio"
                      id="defaultTemplate"
                      name="template"
                      value="default"
                      checked={selectedTemplate === 'default'}
                      onChange={handleRadioChange}
                      style={{ marginLeft: '10px', float: 'right' }}
                    />
                    <label
                      htmlFor="defaultTemplate"
                      style={{
                        color:
                          selectedTemplate === 'default'
                            ? '#003C47'
                            : 'inherit',
                        float: 'right',
                      }}
                    >
                      قالب الافتراضي
                    </label>
                    <br></br>
                    <p
                      style={{
                        color:
                          selectedTemplate === 'default'
                            ? '#003C47'
                            : 'inherit',
                        fontSize: '15px',
                        padding: '0 30px 20px 30px ',
                        textAlign: 'right',
                      }}
                    >
                      قالب المتجر يسمح لك بالتحكم الشريط العلوي والتبويبات كما
                      يسمح لك بالتحكم بعناصر الشاشة الرئيسية بخيارات مميزة
                      وحصرية لتطبيقك لعرض متجرك بشكل احترافي.{' '}
                    </p>
                    <img
                      style={{ width: '190px', margin: '0 auto' }}
                      src="./images/mobile1.jpg"
                      alt="mobile"
                    />
                  </div>
                  <div
                    style={{
                      maxWidth: '50%',
                      padding: '0 20px',
                      textAlign: 'center',
                    }}
                  >
                    <input
                      type="radio"
                      id="menuTemplate"
                      name="template"
                      value="menu"
                      checked={selectedTemplate === 'menu'}
                      onChange={handleRadioChange}
                      style={{ marginLeft: '10px', float: 'right' }}
                    />
                    <label
                      htmlFor="menuTemplate"
                      style={{
                        color:
                          selectedTemplate === 'menu' ? '#003C47' : 'inherit',
                        float: 'right',
                      }}
                    >
                      قالب المنيو
                    </label>
                    <br></br>
                    <p
                      style={{
                        color:
                          selectedTemplate === 'menu' ? '#003C47' : 'inherit',

                        fontSize: '15px',
                        padding: '0 30px 65px 30px ',
                        textAlign: 'right',
                      }}
                    >
                      اجعل عملية التصفح لعملائك سلسة ومركزة على استعراض منتجاتك
                      بطريقة مميزة.
                    </p>
                    <img
                      style={{ width: '190px', margin: '0 auto' }}
                      src="./images/mobile.jpg"
                      alt="mobile"
                    />
                  </div>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto"></div>
                {/*footer*/}
                <div className="flex items-center justify-between py-3 px-4 bg-gray-200 border-t py-2 border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-[#baf3e6] text-[#004d5a] active:bg-emerald-600 uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    إغلاق
                  </button>
                  <button
                    className="text-gray-500 bg-gray-300 hover:shadow-md px-6 py-2 rounded-md text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    حفظ
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-animation fixed inset-0 z-40"></div>
        </>
      ) : null}
    </>
  );
}
