import * as React from 'react';
import { FaAngleLeft, FaTimes, FaStar, FaAngleDown } from 'react-icons/fa';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import PopUpAccordian from './PopUpAccordian';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiPaper-root': {
    width: '60%',
    maxWidth: 'none',
    height: 'calc(100% - 50px)',
    maxHeight: 'none',
    margin: '50px auto 0 auto',
  },
}));
const items = [
  {
    title: 'جميع مزايا باقة (سلة بلس)',
    description: 'تقدم لك هذه الباقة كافة مميزات سلة بلس',
  },
  {
    title: 'دعم الضريبة',
    description:
      'فعل خيار احتساب الضريبة المضافة في متجرك واعرض أسعار المنتجات شاملة الضريبة لكل منتج',
  },
  {
    title: 'تصنيف مجموعة عملاء',
    description:
      'تمكنك من تصنيف عملائك الى مجموعات و وضع مزايا مستقلة لكل مجموعة بشكل خاص مثل ارسال كوبونات التخفيض',
  },
  {
    title: 'إدارة المتجر والموظفين',
    description:
      'أضف عدد من موظفي متجرك لإدارة المتجر بشكل متكامل عبر تحديد صلاحيات معينة و إسنادها تلقائياً لكل موظف',
  },
  {
    title: 'كوبونات التسويق بالعمولة',
    description:
      'ميزة تمكنك من مضاعفة مبيعات متجرك بتوسيع نوافذ التسويق لمتجرك، عبر كود تسويقي يعطى للمسوقين بنظام العمولة',
  },
  {
    title: 'تفعيل خدمات SEO (تحسين الظهور على محركات البحث)',
    description:
      'تحسين ظهور متجرك في النتائج الأولى في محرك جوجل عبر مجموعة أدوات توفرها لك منصة سلة',
  },
  {
    title: 'الربط مع الخدمات الإعلانية',
    description:
      'الربط مع الخدمات الإعلانية عبر منصات التواصل الاجتماعي يساعدك على قياس تأثير وفعالية الحملات الإعلانية',
  },
  {
    title: 'الربط مع Google tag Manager',
    description:
      'هي أدوات و خدمات جاهزة توفرها قوقل لإدراج وربط الخدمات بمتجرك بدون الحاجة لتعاملك مع الاكواد',
  },
  {
    title: 'خدمة زابير Zapier',
    description:
      'هي أداة لربط جميع التطبيقات تساعدك في تأدية المهام المتكررة بشكل تلقائي',
  },
];

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  // const [isOpen, setIsOpen] = React.useState(false);
  const [openItems, setOpenItems] = React.useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleItem = (index) => {
    setOpenItems(openItems.map((item, i) => (i === index ? !item : item)));
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button
        className="border border-1 border-[#BBF3E5] rounded-full text-[#003C47] text-12 font-light p-2"
        onClick={handleClickOpen}
      >
        استكشف مزايا الباقة
      </button>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div className="flex items-start items-center modal-header justify-between px-4 py-2 rounded-t">
          <h3>انشاء عميل جديد</h3>
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
        <DialogContent
          dividers
          className="hide-scrollbar"
          style={{ overflowY: 'auto' }}
        >
          <style>
            {`
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .hide-scrollbar {
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scrollbar-width: none;  /* Firefox */
      }
    `}
          </style>
          <div className="p-5">
            <button className="text-black bg-[#baf3e6] py-2 px-6 text-base font-bold">
              سلة برو
            </button>
            <div className="p-5 border border-[#baf3e6] border-t-2">
              <div className="flex gap-8 items-center justify-between">
                <div className="flex flex-col" style={{ paddingLeft: '50px' }}>
                  <div className="pb-5 border-b border-gray-200">
                    <h1 className="text-[#73E7CC] text-3xl mb-3">سلة برو</h1>
                    <p className="text-gray-700 text-base">
                      باقة التجارة الاحترافية للشركات
                    </p>
                  </div>
                  <p className="text-gray-700 text-base mt-4">
                    الباقة المثالية لإدارة متكاملة لمتجرك بخدمات لا محدودة،
                    مصممة لتقدم تجربة استثنائية وإدارة تفصيلية بأحدث الأدوات
                    التسويقية والربط مع خدمات الحملات الإعلانية لمنصات التواصل
                    الإجتماعي والربط مع خدمات التحليل ومزايا أكثر تدعم توسُّع
                    تجارتك بدون قيود
                  </p>
                </div>
                <div>
                  <img
                    src="images/PopUp/xeJklDBbhGaXTyC43Gpe3z0K22oYQHODhtVT8XZL.webp"
                    alt="Package"
                    style={{ width: '250px' }}
                  />
                </div>
              </div>
              <div className="mt-5">
                <h2 className="flex items-center gap-5 text-gray-700 text-2xl mb-5 pl-5">
                  مزايا الباقة
                  <span className="bg-gray-300 h-px w-87%"></span>
                </h2>

                {items.map((item, index) => (
                  <div
                    className="rounded-md"
                    style={{ marginTop: index > 0 ? '15px' : '0' }}
                    key={index}
                  >
                    <div
                      className="rounded-md py-2 px-5 flex justify-between items-center cursor-pointer"
                      style={{
                        width: '100%',
                        backgroundColor: openItems[index]
                          ? '#baf3e6'
                          : '#f8f8f8',
                      }}
                      onClick={() => toggleItem(index)}
                    >
                      <div className="flex gap-2 items-center">
                        <FaStar />
                        <h3 className="text-[#004d5a] text-base font-bold m-0">
                          {item.title}
                        </h3>
                      </div>
                      {openItems[index] ? <FaAngleDown /> : <FaAngleLeft />}
                    </div>
                    {openItems[index] && (
                      <div
                        className="border border-[#76e8cd] border-t-0 p-5 rounded-b-md"
                        style={{ width: '100%', overflow: 'hidden' }}
                      >
                        <p className="text-gray-700 text-base m-0">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>
                ))}

                {/* <div className="rounded-md">
                  <div
                    className="rounded-md py-2 px-5 flex justify-between items-center cursor-pointer"
                    style={{
                      width: '100%',
                      backgroundColor: isOpen ? '#baf3e6' : '#f8f8f8', // Conditional background color
                    }}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <div className="flex gap-2 items-center">
                      <FaStar />
                      <h3 className="text-[#004d5a] text-base font-bold m-0">
                        جميع مزايا باقة (سلة بلس)
                      </h3>
                    </div>
                    {isOpen ? <FaAngleDown /> : <FaAngleLeft />}
                  </div>
                  {isOpen && (
                    <div
                      className="border border-[#76e8cd] border-t-0 p-5 rounded-b-md"
                      style={{ width: '100%', overflow: 'hidden' }}
                    >
                      <p className="text-gray-700 text-base m-0">
                        تقدم لك هذه الباقة كافة مميزات سلة بلس
                      </p>
                    </div>
                  )}
                </div>
                {/* <PopUpAccordian /> */}
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions
          style={{ justifyContent: 'space-between' }}
          className="py-3 px-4 bg-gray-200 border-t py-2 rounded-b"
        >
          <button
            className="bg-[#baf3e6] text-[#004d5a] active:bg-emerald-600 uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={handleClose}
          >
            حفظ
          </button>
          <button
            className="text-gray-500 bg-gray-300 hover:shadow-md px-6 py-2 rounded-md text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={handleClose}
          >
            إلغاء
          </button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
