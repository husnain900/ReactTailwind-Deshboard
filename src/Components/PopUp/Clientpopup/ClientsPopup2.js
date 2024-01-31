import React, { useState } from 'react';
import {
  FaUsers,
  FaChevronDown,
  FaChevronRight,
  FaChevronLeft,
  FaBuilding,
  FaBell,
  FaShoppingCart,
  FaTimes,
} from 'react-icons/fa';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { clientData } from '../../DevData/DevData';
import ClientPopup from './Clientspopup';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const [selectedClientTitle, setSelectedClientTitle] = useState('');
  const handleClickOpen = (clientTitle) => {
    setSelectedClientTitle(clientTitle);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [recordCount, setRecordCount] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedRecordIcon, setSelectedRecordIcon] = useState(<FaUsers />);

  const addNewRecord = () => {
    setRecordCount((prevCount) => prevCount + 1);

    const recordIcon = document.getElementById(`record-${recordCount}`);
    if (recordIcon) {
      recordIcon.innerHTML = selectedRecordIcon;
    }
  };

  const removeRecord = (id) => {
    const records = document.querySelectorAll('.tech-client-popup-fields-rec');
    const recordToRemove = document.getElementById(`record-${id}`);
    recordToRemove.parentNode.removeChild(recordToRemove);

    if (records.length === 2) {
      const removeRecButtons = document.querySelectorAll('.removeRec');
      removeRecButtons.forEach((button) => {
        button.style.display = 'none';
      });

      records.forEach((record) => {
        record.classList.add('first-rec');
      });
    }

    if (records.length > 0) {
      const removeRecButtons = document.querySelectorAll('.removeRec');
      removeRecButtons.forEach((button) => {});

      records.forEach((record) => {
        record.classList.remove('first-rec');
      });
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const [age, setAge] = React.useState('');
  const [conditions, setConditions] = useState([
    { id: 1, option: '', statement: '', value: '' },
  ]);

  const handleChangeCondition = (event, index, field) => {
    const updatedConditions = [...conditions];
    updatedConditions[index][field] = event.target.value;
    setConditions(updatedConditions);
  };

  const addNewCondition = () => {
    setConditions((prevConditions) => [
      ...prevConditions,
      { id: prevConditions.length + 1, option: '', statement: '', value: '' },
    ]);
  };

  const removeCondition = (id) => {
    setConditions((prevConditions) =>
      prevConditions.filter((condition) => condition.id !== id)
    );
  };

  const addIconToDropdown = (iconName) => {
    setDropdownOpen(false);

    switch (iconName) {
      case 'fa-building':
        setSelectedRecordIcon(<FaBuilding />);
        break;
      case 'fa-bell':
        setSelectedRecordIcon(<FaBell />);
        break;
      case 'fa-shopping-cart':
        setSelectedRecordIcon(<FaShoppingCart />);
        break;
      case 'fa-users':
        setSelectedRecordIcon(<FaUsers />);
        break;
      default:
        break;
    }
  };

  return (
    <React.Fragment>
      <section className="client-box grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2  gap-5 mb-16">
        <ClientPopup />
        {clientData.map((client) => (
          <div key={client.id} className="">
            <div
              className="client-bx cursor-pointer py-4 lg:py-7 lg:px-14"
              // onClick={handleClickOpen}
              onClick={() => handleClickOpen(client.title)}
            >
              <div className="client-sub-bx text-center">
                <img className="mx-auto" src={client.icon} alt={client.title} />
                <h2>{client.title}</h2>
                <p>{client.count}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{
          style: {
            width: '57%',
            maxWidth: 'none',
          },
        }}
      >
        <div className="flex items-start items-center modal-header justify-between px-4 py-2 rounded-t">
          {/* <h3>{client.title}</h3> */}
          <h3>{selectedClientTitle}</h3>
          {/* <h3>جميع العملاء</h3> */}
          <button
            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            onClick={handleClose}
          >
            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
          </button>
          <button
            className="background-transparent font-bold uppercase text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={handleClose}
          >
            <FaTimes />
          </button>
        </div>
        <DialogContent dividers className="scrollstyle">
          <div className="tech-client-popup-box-content">
            <div className="client_selected_icon">
              <button onClick={toggleDropdown}>
                {selectedRecordIcon}
                <span>
                  <FaChevronDown />
                </span>
              </button>
              <input
                id="tech_top_inputWithTitle"
                type="text"
                name=""
                // placeholder="اسم المجموعة"
                value={selectedClientTitle}
                // "العملاء الاكثر شرائاً"
              />
            </div>

            {dropdownOpen && (
              <div className="tech-icons-popup-dropdown-main ">
                <div className="tech-icons-popup-dropdown-pagination">
                  <a href="#" onClick={addNewRecord}>
                    <FaChevronRight />
                  </a>
                  <span id="pageNumber"></span>
                  <a href="#" onClick={removeRecord}>
                    <FaChevronLeft />
                  </a>
                </div>
                <div className="tech-icons-popup-dropdown" id="iconList">
                  <a onClick={() => addIconToDropdown('fa-building')}>
                    <FaBuilding />
                  </a>
                  <a onClick={() => addIconToDropdown('fa-bell')}>
                    <FaBell />
                  </a>
                  <a onClick={() => addIconToDropdown('fa-shopping-cart')}>
                    <FaShoppingCart />
                  </a>
                  <a onClick={() => addIconToDropdown('fa-users')}>
                    <FaUsers />
                  </a>
                </div>
              </div>
            )}

            <div className="tech-client-popup-fields-main">
              <label>
                إضافة العملاء تلقائياً للمجموعة عند تحقق الشرط التالي ({' '}
                <small>اختياري</small>)
              </label>
            </div>
            <div>
              {conditions.map((condition, index) => (
                <div
                  key={condition.id}
                  id={`record-${condition.id}`}
                  className="tech-client-popup-fields-rec"
                >
                  <ul>
                    <li className="options1">
                      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id={`option-label-${condition.id}`}>
                          الخيار
                        </InputLabel>
                        <Select
                          labelId={`option-label-${condition.id}`}
                          value={condition.option}
                          label="الخيار"
                          onChange={(e) =>
                            handleChangeCondition(e, index, 'option')
                          }
                        >
                          {/* Your MenuItem options here */}
                        </Select>
                      </FormControl>
                    </li>
                    <li className="statement">
                      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id={`statement-label-${condition.id}`}>
                          البيان
                        </InputLabel>
                        <Select
                          labelId={`statement-label-${condition.id}`}
                          value={condition.statement}
                          label="البيان"
                          onChange={(e) =>
                            handleChangeCondition(e, index, 'statement')
                          }
                        ></Select>
                      </FormControl>
                    </li>
                    <li className="condition-value">
                      <input
                        className="border border-gray-400 rounded"
                        type="text"
                        name=""
                        placeholder="قيمة الشرط"
                        value={condition.value}
                        onChange={(e) =>
                          handleChangeCondition(e, index, 'value')
                        }
                      />
                    </li>
                  </ul>
                  {conditions.length > 1 && (
                    <button
                      className="removeRec"
                      onClick={() => removeCondition(condition.id)}
                    >
                      <FaTimes size={22} className="text-red-500 mr-2" />
                    </button>
                  )}
                </div>
              ))}
              <div className="tech-customer-addrecord">
                <button id="techAdd_newRecord" onClick={addNewCondition}>
                  + إضافة شرط جديد
                </button>
              </div>
              <div className="tech-client-popup-bottom-content">
                <h1>مزايا المجموعة</h1>
                <p>
                  يمكنك تخصيص مزايا لمجموعة العملاء عبر اعدادات المتجر, من خلال
                  قيود شركات الشحن يمكنك التحكم في اي شركة شحن تظهر لعملاء
                  المجموعة ومن خلال قيود طرق الدفع يمكنك التحكم في اي طرق دفع
                  تظهر لعملاء المجموعة
                </p>
                <ul>
                  <li>
                    <a href="#">الحماية من الإحتيال</a>
                  </li>
                  <li>
                    <a href="#">قيود شركات الشحن</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions
          style={{ justifyContent: 'start' }}
          className="py-3 px-4 bg-gray-200 border-t py-2 border-solid border-blueGray-200 rounded-b"
        >
          <button
            className="bg-[#baf3e6] text-[#004d5a] active:bg-emerald-600 uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={handleClose}
          >
            حفظ
          </button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
