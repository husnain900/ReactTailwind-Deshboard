import React, { useState, useEffect, useRef } from "react";
import {
  FaBuilding,
  FaBell,
  FaShoppingCart,
  FaUsers,
  FaChevronDown,
  FaChevronRight,
  FaChevronLeft,
  FaTimes,
} from "react-icons/fa";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiDialog-paper": {
    maxWidth: "60%", // Adjust the percentage as needed
  },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(<FaUsers />);

  const addIconToDropdown = (iconName) => {
    setDropdownOpen(false);

    // Set the selected icon based on the clicked icon
    switch (iconName) {
      case "fa-building":
        setSelectedIcon(<FaBuilding />);
        break;
      case "fa-bell":
        setSelectedIcon(<FaBell />);
        break;
      case "fa-shopping-cart":
        setSelectedIcon(<FaShoppingCart />);
        break;
      case "fa-users":
        setSelectedIcon(<FaUsers />);
        break;
      // Add more cases for other icons if needed
      default:
        break;
    }
  };

  const itemsPerPage = 5;
  const iconListRef = useRef(null);

  useEffect(() => {
    // Move selectOption into useEffect if needed
    const selectOption = (optionValue, iconClass) => {
      const selectedOption = document.getElementById("techclientselectedicon");
      selectedOption.innerText = optionValue;
      selectedOption.className = "";
      selectedOption.classList.add("fa", iconClass);

      closeIconPopup();
    };

    updatePageNumber();
    showCurrentPage();
  }, [currentPage]);

  const closeIconPopup = () => {
    setDropdownOpen(false);
  };

  const updatePageNumber = () => {
    if (iconListRef.current) {
      const totalItems = iconListRef.current.children.length;
      const totalPages = Math.ceil(totalItems / itemsPerPage);
      document.getElementById("pageNumber").innerText =
        totalPages + " / " + currentPage;
    }
  };

  const showCurrentPage = () => {
    if (iconListRef.current) {
      for (let i = 0; i < iconListRef.current.children.length; i++) {
        iconListRef.current.children[i].style.display = "none";
      }

      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;

      for (
        let i = start;
        i < end && i < iconListRef.current.children.length;
        i++
      ) {
        iconListRef.current.children[i].style.display = "flex";
      }

      const activeIcon = iconListRef.current.querySelector(".active");
      if (activeIcon) {
        activeIcon.scrollIntoView();
      }
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const nextPage = () => {
    if (iconListRef.current) {
      const totalItems = iconListRef.current.children.length;
      const totalPages = Math.ceil(totalItems / itemsPerPage);
      if (currentPage < totalPages) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    }
  };

  return (
    <React.Fragment>
      <div className="">
        <div
          className="client-bx dark-border cursor-pointer py-4 lg:py-7 lg:px14"
          onClick={() => setOpen(true)}
        >
          <div className="client-sub-bx text-center">
            <img className="mx-auto" src="images/Clients/Users.png" alt="" />
            <h2>جميع العملاء</h2>
            <p>7817 عميل</p>
          </div>
        </div>
      </div>
      <BootstrapDialog
        onClose={() => setOpen(false)}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div className="flex items-start items-center modal-header justify-between px-4 py-2 rounded-t">
          <h3>جميع العملاء</h3>
          <button
            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            onClick={() => setOpen(false)}
          >
            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
          </button>
          <button
            className="background-transparent font-bold uppercase text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setOpen(false)}
          >
            <FaTimes />
          </button>
        </div>
        <DialogContent dividers>
          <div className="tech-client-popup-box-content">
            <div className="client_selected_icon">
              <button
                id="techOpeniconsDiolag"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {selectedIcon}
                <span>
                  <FaChevronDown />
                </span>
              </button>
              {dropdownOpen && (
                <div className="tech-icons-popup-dropdown-main top-16">
                  <div className="tech-icons-popup-dropdown-pagination">
                    <a href="#" onClick={nextPage}>
                      <FaChevronRight />
                    </a>
                    <span id="pageNumber"></span>
                    <a href="#" onClick={prevPage}>
                      <FaChevronLeft />
                    </a>
                  </div>
                  <div className="tech-icons-popup-dropdown" ref={iconListRef}>
                    <a onClick={() => addIconToDropdown("fa-building")}>
                      <FaBuilding />
                    </a>
                    <a onClick={() => addIconToDropdown("fa-bell")}>
                      <FaBell />
                    </a>
                    <a onClick={() => addIconToDropdown("fa-shopping-cart")}>
                      <FaShoppingCart />
                    </a>
                    <a onClick={() => addIconToDropdown("fa-users")}>
                      <FaUsers />
                    </a>
                  </div>
                </div>
              )}
              <input
                id="tech_top_inputWithTitle"
                type="text"
                name=""
                placeholder="اسم المجموعة"
                value="جميع العملاء"
                disabled="disabled"
              />
            </div>
            <div className="tech-client-popup-bottom-content">
              <h1>مزايا المجموعة</h1>
              <p>
                يمكنك تخصيص مزايا لمجموعة العملاء عبر اعدادات المتجر, من خلال
                قيود شركات الشحن يمكنك التحكم في اي شركة شحن تظهر لعملاء
                المجموعة ومن خلال قيود طرق الدفع يمكنك التحكم في اي طرق دفع تظهر
                لعملاء المجموعة
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
        </DialogContent>
        <DialogActions
          style={{ justifyContent: "start" }}
          className="py-3 px-4 bg-gray-200 border-t py-2 border-solid border-blueGray-200 rounded-b"
        >
          <button
            className="bg-[#baf3e6] text-[#004d5a] active:bg-emerald-600 uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setOpen(false)}
          >
            حفظ
          </button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
