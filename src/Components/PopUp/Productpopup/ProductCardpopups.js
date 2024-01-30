import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import { FaTimes } from "react-icons/fa";
import { GoVideo } from "react-icons/go";
import { GoPulse } from "react-icons/go";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    maxWidth: "70%",
  },
  "& .MuiBackdrop-root": {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
}));
export default function CustomizedDialogs({
  openpop,
  handleOpenC,
  Productimg,
  imageSrc,
}) {
  const [open, setOpen] = React.useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "image/png") {
      setSelectedFile(file);
      console.log("Selected file:", file);
    } else {
      alert("Please select a valid PNG image.");
    }
  };

  const fileInputRef = React.createRef();

  return (
    <React.Fragment>
      {/* <h1>{Productimg}</h1> */}
      <button className="cursor-pointer" onClick={() => handleOpenC(imageSrc)}>
        <img src="images/Product/img-icon.png" alt="Icon" /> إضافة صورة او فيديو
      </button>
      <BootstrapDialog
        onClose={handleOpenC}
        aria-labelledby="customized-dialog-title"
        open={openpop}
      >
        <div className="flex items-start items-center modal-header justify-between px-4 py-2 rounded-t">
          <h3>صور وفيديوهات المنتج</h3>

          <button
            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            onClick={handleOpenC}
          >
            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
          </button>
          <button
            className="background-transparent font-bold uppercase text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={handleOpenC}
          >
            <FaTimes />
          </button>
        </div>
        <DialogContent>
          <h5>صور المنتج</h5>
          <Typography gutterBottom>
            <p
              className="text-gray-600 text-sm font-medium mb-3"
              style={{ color: "#999999" }}
            >
              المقاس لا يقل عن (100px ارتفاع * 250px عرض) من نوع ( jpg, jpeg,
              png , gif ) ولا يتجاوز 5 ميجابيت لكل صوره بحد اقصي 10 صور
            </p>
          </Typography>
          <div className="file-upload text-center cursor-pointer bg-[#F1F0EF] rounded-lg py-4">
            <div>
              <input
                type="file"
                accept="image/png"
                onChange={handleFileChange}
                style={{ display: "none" }}
                ref={fileInputRef}
              />
              <button
                className="w-full"
                onClick={() => fileInputRef.current.click()}
              >
                <h4 style={{ color: "#4f4f4f" }}>اسحب الصورة وأفلتها هنا </h4>
                <p style={{ color: "#999999" }}>او تصفح من جهازك </p>
              </button>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg pr-3 flex justify-between items-center my-5">
            <div className="flex gap-2 items-center">
              <GoVideo className="text-gray-400" />
              <input
                type="text"
                className="outline-none border-0 text-gray-400 font-light text-sm"
                placeholder="أضف رابط فيديو من اليوتيوب"
              />
            </div>
            <button className="flex gap-2 p-3 text-[#74A3A8] items-center bg-[#D2F7EF]  rounded-lg ">
              {" "}
              <GoPulse /> اضافة
            </button>
          </div>
        </DialogContent>

        <img
          src={Productimg}
          alt="product"
          style={{ width: "230px", height: "auto", marginTop: "-20px" }}
        />
        <DialogActions className="py-3 px-4 bg-gray-200 border-t py-2 border-solid border-blueGray-200 rounded-b">
          <button
            className="text-gray-100 bg-[#888888] hover:shadow-md px-6 py-2 rounded-md text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={handleClose}
          >
            إغلاق
          </button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
