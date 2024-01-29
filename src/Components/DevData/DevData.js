import React from 'react';
import { HiOutlineHome } from 'react-icons/hi2';
import { RiShirtLine } from 'react-icons/ri';
import { FiInbox } from 'react-icons/fi';
import { FaRegUser } from 'react-icons/fa6';
import { LuPieChart } from 'react-icons/lu';
import { MdOutlineMessage } from 'react-icons/md';
import { CiViewList } from 'react-icons/ci';
//
import { RiCoupon3Line } from 'react-icons/ri';
import { AiOutlineDollar } from 'react-icons/ai';
import { RiWaterPercentFill } from 'react-icons/ri';
import { FiSend } from 'react-icons/fi';
import { BiSolidShoppingBagAlt } from 'react-icons/bi';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa6';
//
import { RiFileReduceLine } from 'react-icons/ri';

//
import { FaStore } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { RiWalletFill } from 'react-icons/ri';
//
import { MdOutlineWaterDrop } from 'react-icons/md';
import { MdPhonelinkLock } from 'react-icons/md';
//
import { RiKeyboardFill } from 'react-icons/ri';
import { MdDashboard } from 'react-icons/md';
import { RiCamera2Line } from 'react-icons/ri';

// orders
import { TiWatch } from 'react-icons/ti';
import { RiTimer2Line } from 'react-icons/ri';
import { RiGiftLine } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa6';
import { RiTruckLine } from 'react-icons/ri';
import { GoInbox } from 'react-icons/go';
import { BiBox } from 'react-icons/bi';
import { LiaTimesSolid } from 'react-icons/lia';
import { MdCurrencyExchange } from 'react-icons/md';
import { VscRefresh } from 'react-icons/vsc';
import { RiMoneyDollarBoxFill } from 'react-icons/ri';

// settingPage

import { LuSettings } from 'react-icons/lu';
// import { RiTruckLine } from "react-icons/ri";
import { LuWallet2 } from 'react-icons/lu';
// import { LuWallet2 } from "react-icons/lu";
import { BiDollarCircle } from 'react-icons/bi';
import { IoToggleSharp } from 'react-icons/io5';
import { RiNumber1 } from 'react-icons/ri';
// import { RiNumber1 } from "react-icons/ri";

import { CiGlobe } from 'react-icons/ci';
import { CiCircleMinus } from 'react-icons/ci';
import { LuCompass } from 'react-icons/lu';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BsShieldPlus } from 'react-icons/bs';
import { RiFileTextLine } from 'react-icons/ri';
import { RiFileLockLine } from 'react-icons/ri';
//
// import { IoMdNotificationsOutline } from "react-icons/io";
import { TfiMedall } from 'react-icons/tfi';
import { CiGift } from 'react-icons/ci';
import { RiInbox2Line } from 'react-icons/ri';
//
import { LuUser2 } from 'react-icons/lu';
import { PiPuzzlePieceLight } from 'react-icons/pi';
// import { PiPuzzlePieceLight } from "react-icons/pi";
import { MdOutlineGroup } from 'react-icons/md';
import { BsShopWindow } from 'react-icons/bs';
import { BsBag } from 'react-icons/bs';
import { BsMegaphone } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { RiArticleLine } from 'react-icons/ri';
import { IoAnalyticsOutline } from 'react-icons/io5';
import { RiCornerUpRightDoubleFill } from 'react-icons/ri';
import { CiCircleAlert } from 'react-icons/ci';
import { RiChatUploadLine } from 'react-icons/ri';
// import { RiArticleLine } from "react-icons/ri";
import { FiTruck } from 'react-icons/fi';
import { CiChat1 } from 'react-icons/ci';
import { RiDeleteBin6Line } from 'react-icons/ri';

// header
import { LuUser } from 'react-icons/lu';
import { PiNotification } from 'react-icons/pi';
import { LuPartyPopper } from 'react-icons/lu';
import { FaPenAlt } from 'react-icons/fa';
import { IoIosLogOut } from 'react-icons/io';

// header
export const headerItems = [
  { icon: <LuUser size={18} />, text: 'الملف الشخصي' },
  { icon: <PiNotification size={18} />, text: 'التنبيهات' },
  { icon: <LuPartyPopper size={18} />, text: 'تحديثات المنصة' },
  { icon: <FaPenAlt size={18} />, text: 'الاقتراحات' },
  { icon: <IoIosLogOut size={18} />, text: 'تسجيل الخروج' },
];

// sidebar
export const menuItems = [
  { label: 'الرئيسية', link: '/', icon: <HiOutlineHome /> },
  { label: 'المنتجات', link: '/product', icon: <RiShirtLine /> },
  { label: 'الطلبات', link: '/orders', icon: <FiInbox /> },
  { label: 'العملاء', link: '/clients', icon: <FaRegUser /> },
  { label: 'التقارير', link: '/reports', icon: <LuPieChart /> },
  { label: 'الأسئلة والتقييمات', link: '/Q&A', icon: <MdOutlineMessage /> },
  { label: 'الصفحات التعريفية', link: '/static', icon: <CiViewList /> },
  //
  { label: 'التسويق', isTitle: true },
  //
  { label: 'كوبونات التخفيض', link: '/coupons', icon: <RiCoupon3Line /> },
  { label: 'التسويق بالعمولة', link: '/commision', icon: <AiOutlineDollar /> },
  {
    label: 'العروض الخاصة',
    link: '/abandondcart',
    icon: <RiWaterPercentFill />,
  },
  { label: 'الحملات التسويقية', link: '/loyalty', icon: <FiSend /> },
  {
    label: 'السلات المتروكة',
    link: '/mahally',
    icon: <BiSolidShoppingBagAlt />,
  },
  { label: 'نظام الولاء', link: '/Desktop23', icon: <FaHandHoldingHeart /> },
  //
  { label: 'قنوات البيع', isTitle: true },
  { label: 'محلي', link: '/mahally', icon: <RiFileReduceLine /> },

  //
  { label: 'الاعدادات', isTitle: true },
  { label: 'باقة المتجر', link: '/storepackage', icon: <FaStore /> },
  {
    label: 'إعدادات المتجر',
    link: '/SettingsPage',
    icon: <IoSettingsOutline />,
  },
  { label: 'المحفظة والفواتير', link: '/Wallet', icon: <RiWalletFill /> },
  //
  { label: 'مظهر المتجر', isTitle: true },
  //
  { label: 'تصميم المتجر', link: '/Storedesign', icon: <MdOutlineWaterDrop /> },
  { label: 'صانع التطبيقات', link: '/Maker', icon: <MdPhonelinkLock /> },
  //
  { label: 'متجر التطبيقات', isTitle: true },
  //
  { label: 'التطبيقات المثبتة', link: '/Appmaker', icon: <RiKeyboardFill /> },
  { label: 'زيارة متجر التطبيقات', link: '/Affiliate', icon: <MdDashboard /> },
  { label: 'جدولة التقاط الصور', link: '/Affiliate2', icon: <RiCamera2Line /> },
];

// Homepage

export const chartsData = [
  { icon: 'images/Home/Users.svg', value: '_', label: 'الزيارات' },
  { icon: 'images/Home/Group 23.svg', value: '125', label: 'المبيعات' },
  { icon: 'images/Home/box.svg', value: '6', label: 'الطلبات' },
  {
    icon: 'images/Home/cup.svg',
    value: '5000',
    arrow: <FaAngleLeft />,
    label: 'هدف الشهر',
  },
];
export const ordersData = [
  {
    id: 1,
    name: 'ثابت بني سرح',
    orderNumber: '70322877#',
    status: 'تم الشحن',
    amount: '٠ ر.س',
    timeElapsed: 'منذ 20 ساعة',
  },
  {
    id: 2,
    name: 'ثابت بني سرح',
    orderNumber: '70322877#',
    status: 'تم الشحن',
    amount: '٠ ر.س',
    timeElapsed: 'منذ 20 ساعة',
  },
  {
    id: 3,
    name: 'ثابت بني سرح',
    orderNumber: '70322877#',
    status: 'تم الشحن',
    amount: '٠ ر.س',
    timeElapsed: 'منذ 20 ساعة',
  },
  {
    id: 4,
    name: 'ثابت بني سرح',
    orderNumber: '70322877#',
    status: 'تم الشحن',
    amount: '٠ ر.س',
    timeElapsed: 'منذ 20 ساعة',
  },
  {
    id: 5,
    name: 'ثابت بني سرح',
    orderNumber: '70322877#',
    status: 'تم الشحن',
    amount: '٠ ر.س',
    timeElapsed: 'منذ 20 ساعة',
  },
  {
    id: 6,
    name: 'ثابت بني سرح',
    orderNumber: '70322877#',
    status: 'تم الشحن',
    amount: '٠ ر.س',
    timeElapsed: 'منذ 20 ساعة',
  },
  {
    id: 7,
    name: 'ثابت بني سرح',
    orderNumber: '70322877#',
    status: 'تم الشحن',
    amount: '٠ ر.س',
    timeElapsed: 'منذ 20 ساعة',
  },
  {
    id: 8,
    name: 'ثابت بني سرح',
    orderNumber: '70322877#',
    status: 'تم الشحن',
    amount: '٠ ر.س',
    timeElapsed: 'منذ 20 ساعة',
  },
  {
    id: 9,
    name: 'ثابت بني سرح',
    orderNumber: '70322877#',
    status: 'تم الشحن',
    amount: '٠ ر.س',
    timeElapsed: 'منذ 20 ساعة',
  },
  {
    id: 10,
    name: 'ثابت بني سرح',
    orderNumber: '70322877#',
    status: 'تم الشحن',
    amount: '٠ ر.س',
    timeElapsed: 'منذ 20 ساعة',
  },
  {
    id: 11,
    name: 'ثابت بني سرح',
    orderNumber: '70322877#',
    status: 'تم الشحن',
    amount: '٠ ر.س',
    timeElapsed: 'منذ 20 ساعة',
  },
  {
    id: 12,
    name: 'ثابت بني سرح',
    orderNumber: '70322877#',
    status: 'تم الشحن',
    amount: '٠ ر.س',
    timeElapsed: 'منذ 20 ساعة',
  },
  {
    id: 13,
    name: 'ثابت بني سرح',
    orderNumber: '70322877#',
    status: 'تم الشحن',
    amount: '٠ ر.س',
    timeElapsed: 'منذ 20 ساعة',
  },
  {
    id: 14,
    name: 'ثابت بني سرح',
    orderNumber: '70322877#',
    status: 'تم الشحن',
    amount: '٠ ر.س',
    timeElapsed: 'منذ 20 ساعة',
  },
];
export const notificationsData = [
  {
    id: 1,
    itemName: 'أضاف روج مات ميك اوفر22 درجه M636 للسلة',
    timeElapsed: 'منذ ساعة',
    imageSrc: 'images/Home/rectangle_21.png',
    userImageSrc: 'images/Home/user_22.png',
  },
  {
    id: 2,
    itemName: 'أضاف روج مات ميك اوفر22 درجه M636 للسلة',
    timeElapsed: 'منذ ساعة',
    imageSrc: 'images/Home/rectangle_22 .png',
    userImageSrc: 'images/Home/user_22.png',
  },
  {
    id: 3,
    itemName: 'أضاف روج مات ميك اوفر22 درجه M636 للسلة',
    timeElapsed: 'منذ ساعة',
    imageSrc: 'images/Home/rectangle_22 .png',
    userImageSrc: 'images/Home/user_22.png',
  },
  {
    id: 4,
    itemName: 'أضاف روج مات ميك اوفر22 درجه M636 للسلة',
    timeElapsed: 'منذ ساعة',
    imageSrc: 'images/Home/rectangle_22 .png',
    userImageSrc: 'images/Home/user_22.png',
  },
  {
    id: 5,
    itemName: 'أضاف روج مات ميك اوفر22 درجه M636 للسلة',
    timeElapsed: 'منذ ساعة',
    imageSrc: 'images/Home/rectangle_22 .png',
    userImageSrc: 'images/Home/user_22.png',
  },
  {
    id: 6,
    itemName: 'أضاف روج مات ميك اوفر22 درجه M636 للسلة',
    timeElapsed: 'منذ ساعة',
    imageSrc: 'images/Home/rectangle_22 .png',
    userImageSrc: 'images/Home/user_22.png',
  },
  {
    id: 7,
    itemName: 'أضاف روج مات ميك اوفر22 درجه M636 للسلة',
    timeElapsed: 'منذ ساعة',
    imageSrc: 'images/Home/rectangle_22 .png',
    userImageSrc: 'images/Home/user_22.png',
  },
  {
    id: 8,
    itemName: 'أضاف روج مات ميك اوفر22 درجه M636 للسلة',
    timeElapsed: 'منذ ساعة',
    imageSrc: 'images/Home/rectangle_22 .png',
    userImageSrc: 'images/Home/user_22.png',
  },
  {
    id: 9,
    itemName: 'أضاف روج مات ميك اوفر22 درجه M636 للسلة',
    timeElapsed: 'منذ ساعة',
    imageSrc: 'images/Home/rectangle_22 .png',
    userImageSrc: 'images/Home/user_22.png',
  },
  {
    id: 10,
    itemName: 'أضاف روج مات ميك اوفر22 درجه M636 للسلة',
    timeElapsed: 'منذ ساعة',
    imageSrc: 'images/Home/rectangle_22 .png',
    userImageSrc: 'images/Home/user_22.png',
  },
];
export const expiredProductsData = [
  {
    id: 1,
    itemName: 'أضاف روج مات ميك اوفر22 درجه M636',
    price: '١٬١١٠ ر.س',
    productImageSrc: 'images/Home/rectangle23.png',
  },
  {
    id: 2,
    itemName: 'أضاف روج مات ميك اوفر22 درجه M636',
    price: '١٬١١٠ ر.س',
    productImageSrc: 'images/Home/rectangle23.png',
  },
  {
    id: 3,
    itemName: 'أضاف روج مات ميك اوفر22 درجه M636',
    price: '١٬١١٠ ر.س',
    productImageSrc: 'images/Home/rectangle23.png',
  },
  {
    id: 4,
    itemName: 'أضاف روج مات ميك اوفر22 درجه M636',
    price: '١٬١١٠ ر.س',
    productImageSrc: 'images/Home/rectangle23.png',
  },
  {
    id: 5,
    itemName: 'أضاف روج مات ميك اوفر22 درجه M636',
    price: '١٬١١٠ ر.س',
    productImageSrc: 'images/Home/rectangle23.png',
  },
  {
    id: 6,
    itemName: 'أضاف روج مات ميك اوفر22 درجه M636',
    price: '١٬١١٠ ر.س',
    productImageSrc: 'images/Home/rectangle23.png',
  },
  {
    id: 7,
    itemName: 'أضاف روج مات ميك اوفر22 درجه M636',
    price: '١٬١١٠ ر.س',
    productImageSrc: 'images/Home/rectangle23.png',
  },
  {
    id: 8,
    itemName: 'أضاف روج مات ميك اوفر22 درجه M636',
    price: '١٬١١٠ ر.س',
    productImageSrc: 'images/Home/rectangle23.png',
  },
  {
    id: 9,
    itemName: 'أضاف روج مات ميك اوفر22 درجه M636',
    price: '١٬١١٠ ر.س',
    productImageSrc: 'images/Home/rectangle23.png',
  },
  {
    id: 10,
    itemName: 'أضاف روج مات ميك اوفر22 درجه M636',
    price: '١٬١١٠ ر.س',
    productImageSrc: 'images/Home/rectangle23.png',
  },
];
// productpage

export const data = [
  {
    id: 1,
    imgSrc: 'images/Product/fm-product.png',
    barcodeSrc: 'images/Product/Group 56.svg',
    coinsSrc: 'images/Product/Coins.png',
    basketSrc: 'images/Product/basket.png',
    bellSrc: 'images/Product/bell.png',
    groupSrc: 'images/Product/group-11.png',
    moreSrc: 'images/Product/group-54.png',
  },
  {
    id: 2,
    imgSrc: 'images/Product/photo.png',
    barcodeSrc: 'images/Product/Group 56.svg',
    coinsSrc: 'images/Product/Coins.png',
    basketSrc: 'images/Product/basket.png',
    bellSrc: 'images/Product/bell.png',
    groupSrc: 'images/Product/group-11.png',
    moreSrc: 'images/Product/group-54.png',
  },
  {
    id: 3,
    imgSrc: 'images/Product/photo.png',
    barcodeSrc: 'images/Product/Group 56.svg',
    coinsSrc: 'images/Product/Coins.png',
    basketSrc: 'images/Product/basket.png',
    bellSrc: 'images/Product/bell.png',
    groupSrc: 'images/Product/group-11.png',
    moreSrc: 'images/Product/group-54.png',
  },
  {
    id: 4,
    imgSrc: 'images/Product/photo.png',
    barcodeSrc: 'images/Product/Group 56.svg',
    coinsSrc: 'images/Product/Coins.png',
    basketSrc: 'images/Product/basket.png',
    bellSrc: 'images/Product/bell.png',
    groupSrc: 'images/Product/group-11.png',
    moreSrc: 'images/Product/group-54.png',
  },
  {
    id: 5,
    imgSrc: 'images/Product/fm-product.png',
    barcodeSrc: 'images/Product/Group 56.svg',
    coinsSrc: 'images/Product/Coins.png',
    basketSrc: 'images/Product/basket.png',
    bellSrc: 'images/Product/bell.png',
    groupSrc: 'images/Product/group-11.png',
    moreSrc: 'images/Product/group-54.png',
  },
  {
    id: 6,
    imgSrc: 'images/Product/photo.png',
    barcodeSrc: 'images/Product/Group 56.svg',
    coinsSrc: 'images/Product/Coins.png',
    basketSrc: 'images/Product/basket.png',
    bellSrc: 'images/Product/bell.png',
    groupSrc: 'images/Product/group-11.png',
    moreSrc: 'images/Product/group-54.png',
  },
  {
    id: 7,
    imgSrc: 'images/Product/photo.png',
    barcodeSrc: 'images/Product/Group 56.svg',
    coinsSrc: 'images/Product/Coins.png',
    basketSrc: 'images/Product/basket.png',
    bellSrc: 'images/Product/bell.png',
    groupSrc: 'images/Product/group-11.png',
    moreSrc: 'images/Product/group-54.png',
  },
  {
    id: 8,
    imgSrc: 'images/Product/photo.png',
    barcodeSrc: 'images/Product/Group 56.svg',
    coinsSrc: 'images/Product/Coins.png',
    basketSrc: 'images/Product/basket.png',
    bellSrc: 'images/Product/bell.png',
    groupSrc: 'images/Product/group-11.png',
    moreSrc: 'images/Product/group-54.png',
  },
  {
    id: 9,
    imgSrc: 'images/Product/fm-product.png',
    barcodeSrc: 'images/Product/Group 56.svg',
    coinsSrc: 'images/Product/Coins.png',
    basketSrc: 'images/Product/basket.png',
    bellSrc: 'images/Product/bell.png',
    groupSrc: 'images/Product/group-11.png',
    moreSrc: 'images/Product/group-54.png',
  },
  {
    id: 10,
    imgSrc: 'images/Product/photo.png',
    barcodeSrc: 'images/Product/Group 56.svg',
    coinsSrc: 'images/Product/Coins.png',
    basketSrc: 'images/Product/basket.png',
    bellSrc: 'images/Product/bell.png',
    groupSrc: 'images/Product/group-11.png',
    moreSrc: 'images/Product/group-54.png',
  },
  {
    id: 11,
    imgSrc: 'images/Product/photo.png',
    barcodeSrc: 'images/Product/Group 56.svg',
    coinsSrc: 'images/Product/Coins.png',
    basketSrc: 'images/Product/basket.png',
    bellSrc: 'images/Product/bell.png',
    groupSrc: 'images/Product/group-11.png',
    moreSrc: 'images/Product/group-54.png',
  },
  {
    id: 12,
    imgSrc: 'images/Product/photo.png',
    barcodeSrc: 'images/Product/Group 56.svg',
    coinsSrc: 'images/Product/Coins.png',
    basketSrc: 'images/Product/basket.png',
    bellSrc: 'images/Product/bell.png',
    groupSrc: 'images/Product/group-11.png',
    moreSrc: 'images/Product/group-54.png',
  },
];

// orderpage

export const orderItems = [
  {
    id: 1,
    statusColor: '#BBF3E5',
    icon: <TiWatch size={24} />,
    text: 'بإنتظار الدفع',
    count: 12,
  },
  {
    id: 2,
    statusColor: '#BBF3E5',
    icon: <RiTimer2Line size={24} />,
    text: 'بإنتظار المراجعة',
    count: 0,
  },
  {
    id: 3,
    statusColor: '#BBF3E5',
    icon: <RiGiftLine size={24} />,
    text: 'قيد التنفيذ',
    count: 2,
  },
  {
    id: 4,
    statusColor: '#BBF3E5',
    icon: <FaCheck size={24} />,
    text: 'تم التنفيذ',
    count: 0,
  },
  {
    id: 5,
    statusColor: '#BBF3E5',
    icon: <RiTruckLine size={24} />,
    text: 'جاري التوصيل',
    count: 4,
  },
  {
    id: 6,
    statusColor: '#BBF3E5',
    icon: <GoInbox size={24} />,
    text: 'تم التوصيل',
    count: 0,
  },
  {
    id: 7,
    statusColor: '#BBF3E5',
    icon: <BiBox size={24} />,
    text: 'تم الشحن',
    count: 0,
  },
  {
    id: 8,
    statusColor: '#BBF3E5',
    icon: <LiaTimesSolid size={24} />,
    text: 'ملغي',
    count: 0,
  },
  {
    id: 9,
    statusColor: '#BBF3E5',
    icon: <MdCurrencyExchange size={24} />,
    text: 'مسترجع',
    count: 0,
  },
  {
    id: 10,
    statusColor: '#BBF3E5',
    icon: <VscRefresh size={24} />,
    text: 'قيد الإسترجاع',
    count: 0,
  },
  {
    id: 11,
    statusColor: '#BBF3E5',
    icon: <RiMoneyDollarBoxFill size={24} />,
    text: 'طلب عرض سعر',
    count: 0,
  },
];

export const ordersTable = [
  {
    id: 1,
    userName: 'ابو عمر',
    userImageSrc: 'images/Orders/User.png',
    orderDetails: '70695068#  مستعرض كمبيوتر ● بإنتظار المراجعة',
    price: '٥ ر.س',
    timeElapsed: 'منذ ساعة',
  },
  {
    id: 2,
    userName: 'ابو عمر',
    userImageSrc: 'images/Orders/User.png',
    orderDetails: '70695068#  مستعرض كمبيوتر ● بإنتظار المراجعة',
    price: '٥ ر.س',
    timeElapsed: 'منذ ساعة',
  },
  {
    id: 3,
    userName: 'ابو عمر',
    userImageSrc: 'images/Orders/User.png',
    orderDetails: '70695068#  مستعرض كمبيوتر ● بإنتظار المراجعة',
    price: '٥ ر.س',
    timeElapsed: 'منذ ساعة',
  },
  {
    id: 4,
    userName: 'ابو عمر',
    userImageSrc: 'images/Orders/User.png',
    orderDetails: '70695068#  مستعرض كمبيوتر ● بإنتظار المراجعة',
    price: '٥ ر.س',
    timeElapsed: 'منذ ساعة',
  },
  {
    id: 5,
    userName: 'ابو عمر',
    userImageSrc: 'images/Orders/User.png',
    orderDetails: '70695068#  مستعرض كمبيوتر ● بإنتظار المراجعة',
    price: '٥ ر.س',
    timeElapsed: 'منذ ساعة',
  },
  {
    id: 6,
    userName: 'ابو عمر',
    userImageSrc: 'images/Orders/User.png',
    orderDetails: '70695068#  مستعرض كمبيوتر ● بإنتظار المراجعة',
    price: '٥ ر.س',
    timeElapsed: 'منذ ساعة',
  },
  {
    id: 7,
    userName: 'ابو عمر',
    userImageSrc: 'images/Orders/User.png',
    orderDetails: '70695068#  مستعرض كمبيوتر ● بإنتظار المراجعة',
    price: '٥ ر.س',
    timeElapsed: 'منذ ساعة',
  },
  {
    id: 8,
    userName: 'ابو عمر',
    userImageSrc: 'images/Orders/User.png',
    orderDetails: '70695068#  مستعرض كمبيوتر ● بإنتظار المراجعة',
    price: '٥ ر.س',
    timeElapsed: 'منذ ساعة',
  },
  {
    id: 9,
    userName: 'ابو عمر',
    userImageSrc: 'images/Orders/User.png',
    orderDetails: '70695068#  مستعرض كمبيوتر ● بإنتظار المراجعة',
    price: '٥ ر.س',
    timeElapsed: 'منذ ساعة',
  },
  {
    id: 10,
    userName: 'ابو عمر',
    userImageSrc: 'images/Orders/User.png',
    orderDetails: '70695068#  مستعرض كمبيوتر ● بإنتظار المراجعة',
    price: '٥ ر.س',
    timeElapsed: 'منذ ساعة',
  },
  {
    id: 11,
    userName: 'ابو عمر',
    userImageSrc: 'images/Orders/User.png',
    orderDetails: '70695068#  مستعرض كمبيوتر ● بإنتظار المراجعة',
    price: '٥ ر.س',
    timeElapsed: 'منذ ساعة',
  },
  {
    id: 12,
    userName: 'ابو عمر',
    userImageSrc: 'images/Orders/User.png',
    orderDetails: '70695068#  مستعرض كمبيوتر ● بإنتظار المراجعة',
    price: '٥ ر.س',
    timeElapsed: 'منذ ساعة',
  },
];

// clientspage
export const clientData = [
  {
    id: 2,
    icon: 'images/Clients/group-99.png',
    title: 'العملاء الاكثر شرائاً',
    count: '70 عميل',
  },
  {
    id: 3,
    icon: 'images/Clients/group-101.png',
    title: 'عملاء اصحاب ولاء مرتفع',
    count: 'لايوجد عملاء',
  },
  {
    id: 4,
    icon: 'images/Clients/money-bag.png',
    title: 'الفئة الماسية',
    count: '44 عميل',
  },
  { id: 5, icon: 'images/Clients/plus.png', title: 'الفئة الماسية', count: '' },
];

export const clientsTables = [
  {
    id: 1,
    userName: 'ابو عمر',
    userImageSrc: 'images/Orders/User.png',
    timeElapsed: 'بريدة',
  },
  {
    id: 2,
    userName: 'ابو عمر',
    userImageSrc: 'images/Orders/User.png',
    timeElapsed: 'بريدة',
  },
  {
    id: 3,
    userName: 'ابو عمر',
    userImageSrc: 'images/Orders/User.png',
    timeElapsed: 'بريدة',
  },
  {
    id: 4,
    userName: 'ابو عمر',
    userImageSrc: 'images/Orders/User.png',
    timeElapsed: 'بريدة',
  },
  {
    id: 5,
    userName: 'ابو عمر',
    userImageSrc: 'images/Orders/User.png',
    timeElapsed: 'بريدة',
  },
  {
    id: 6,
    userName: 'ابو عمر',
    userImageSrc: 'images/Orders/User.png',
    timeElapsed: 'بريدة',
  },
  {
    id: 7,
    userName: 'ابو عمر',
    userImageSrc: 'images/Orders/User.png',
    timeElapsed: 'بريدة',
  },
  {
    id: 8,
    userName: 'ابو عمر',
    userImageSrc: 'images/Orders/User.png',
    timeElapsed: 'بريدة',
  },
  {
    id: 9,
    userName: 'ابو عمر',
    userImageSrc: 'images/Orders/User.png',
    timeElapsed: 'بريدة',
  },
  {
    id: 10,
    userName: 'ابو عمر',
    userImageSrc: 'images/Orders/User.png',
    timeElapsed: 'بريدة',
  },
];

// Report page
export const reportTypesbox = [
  { id: 1, icon: 'images/report/wallet.png', label: 'المبيعات' },
  { id: 2, icon: 'images/report/wallet.png', label: 'المنتجات' },
  { id: 3, icon: 'images/report/wallet.png', label: 'الزيارات' },
  { id: 4, icon: 'images/report/wallet.png', label: 'الاكثر طلبا' },
  { id: 5, icon: 'images/report/wallet.png', label: 'المبيعات' },
  { id: 6, icon: 'images/report/wallet.png', label: 'المنتجات' },
];

export const salesData = [
  {
    id: 1,
    product: 'كريم اساس ميك اوفر22درجة7...',
    imgScr: 'images/report/rectangle-31.png',
    type: 'منتج جاهز',
    price: '١٬١١٠ ر.س',
    quantity: 1,
    salesBeforeDiscount: '٥ ر.س',
    discount: '١١٠ ر.س',
    netSales: '٥ ر.س',
    taxes: '٠ ر.س',
    totalSales: '٥ ر.س',
  },
  {
    id: 2,
    product: 'كريم اساس ميك اوفر22درجة7...',
    imgScr: 'images/report/rectangle-31.png',
    type: 'منتج جاهز',
    price: '١٬١١٠ ر.س',
    quantity: 1,
    salesBeforeDiscount: '٥ ر.س',
    discount: '١١٠ ر.س',
    netSales: '٥ ر.س',
    taxes: '٠ ر.س',
    totalSales: '٥ ر.س',
  },
  {
    id: 3,
    product: 'كريم اساس ميك اوفر22درجة7...',
    imgScr: 'images/report/rectangle-31.png',
    type: 'منتج جاهز',
    price: '١٬١١٠ ر.س',
    quantity: 1,
    salesBeforeDiscount: '٥ ر.س',
    discount: '١١٠ ر.س',
    netSales: '٥ ر.س',
    taxes: '٠ ر.س',
    totalSales: '٥ ر.س',
  },
  {
    id: 4,
    product: 'كريم اساس ميك اوفر22درجة7...',
    imgScr: 'images/report/rectangle-31.png',
    type: 'منتج جاهز',
    price: '١٬١١٠ ر.س',
    quantity: 1,
    salesBeforeDiscount: '٥ ر.س',
    discount: '١١٠ ر.س',
    netSales: '٥ ر.س',
    taxes: '٠ ر.س',
    totalSales: '٥ ر.س',
  },
  {
    id: 5,
    product: 'كريم اساس ميك اوفر22درجة7...',
    imgScr: 'images/report/rectangle-31.png',
    type: 'منتج جاهز',
    price: '١٬١١٠ ر.س',
    quantity: 1,
    salesBeforeDiscount: '٥ ر.س',
    discount: '١١٠ ر.س',
    netSales: '٥ ر.س',
    taxes: '٠ ر.س',
    totalSales: '٥ ر.س',
  },
  {
    id: 6,
    product: 'كريم اساس ميك اوفر22درجة7...',
    imgScr: 'images/report/rectangle-31.png',
    type: 'منتج جاهز',
    price: '١٬١١٠ ر.س',
    quantity: 1,
    salesBeforeDiscount: '٥ ر.س',
    discount: '١١٠ ر.س',
    netSales: '٥ ر.س',
    taxes: '٠ ر.س',
    totalSales: '٥ ر.س',
  },
  {
    id: 7,
    product: 'كريم اساس ميك اوفر22درجة7...',
    imgScr: 'images/report/rectangle-31.png',
    type: 'منتج جاهز',
    price: '١٬١١٠ ر.س',
    quantity: 1,
    salesBeforeDiscount: '٥ ر.س',
    discount: '١١٠ ر.س',
    netSales: '٥ ر.س',
    taxes: '٠ ر.س',
    totalSales: '٥ ر.س',
  },
  {
    id: 8,
    product: 'كريم اساس ميك اوفر22درجة7...',
    imgScr: 'images/report/rectangle-31.png',
    type: 'منتج جاهز',
    price: '١٬١١٠ ر.س',
    quantity: 1,
    salesBeforeDiscount: '٥ ر.س',
    discount: '١١٠ ر.س',
    netSales: '٥ ر.س',
    taxes: '٠ ر.س',
    totalSales: '٥ ر.س',
  },
  {
    id: 9,
    product: 'كريم اساس ميك اوفر22درجة7...',
    imgScr: 'images/report/rectangle-31.png',
    type: 'منتج جاهز',
    price: '١٬١١٠ ر.س',
    quantity: 1,
    salesBeforeDiscount: '٥ ر.س',
    discount: '١١٠ ر.س',
    netSales: '٥ ر.س',
    taxes: '٠ ر.س',
    totalSales: '٥ ر.س',
  },
  {
    id: 10,
    product: 'كريم اساس ميك اوفر22درجة7...',
    imgScr: 'images/report/rectangle-31.png',
    type: 'منتج جاهز',
    price: '١٬١١٠ ر.س',
    quantity: 1,
    salesBeforeDiscount: '٥ ر.س',
    discount: '١١٠ ر.س',
    netSales: '٥ ر.س',
    taxes: '٠ ر.س',
    totalSales: '٥ ر.س',
  },
];

// Q&A page
export const QaData = [
  {
    id: 1,
    category: 'استشارة قانونية',
    timeAgo: 'منذ يوم',
    question: 'كيف أبدأ',
    user: {
      userType: 'زائر',
      userName: 'كيف ابدا',
      userImage: 'images/Q&A/User.png',
    },
    statusButtons: [
      { icon: 'images/Q&A/check.png', label: 'منشور' },
      { icon: 'images/Q&A/Cross.png', label: 'غير منشور' },
      { icon: 'images/Q&A/Arrow.png', label: 'الرد' },
    ],
  },
  {
    id: 2,
    category: 'استشارة قانونية',
    timeAgo: 'منذ يوم',
    question: 'كيف أبدأ',
    user: {
      userType: 'زائر',
      userName: 'كيف ابدا',
      userImage: 'images/Q&A/User.png',
    },
    statusButtons: [
      { icon: 'images/Q&A/check.png', label: 'منشور' },
      { icon: 'images/Q&A/Cross.png', label: 'غير منشور' },
      { icon: 'images/Q&A/Arrow.png', label: 'الرد' },
    ],
    actionButtons: [{ icon: 'images/Q&A/Vector.png', label: '' }],
  },
  {
    id: 3,
    category: 'استشارة قانونية',
    timeAgo: 'منذ يوم',
    question: 'كيف أبدأ',
    user: {
      userType: 'زائر',
      userName: 'كيف ابدا',
      userImage: 'images/Q&A/User.png',
    },
    statusButtons: [
      { icon: 'images/Q&A/check.png', label: 'منشور' },
      { icon: 'images/Q&A/Cross.png', label: 'غير منشور' },
      { icon: 'images/Q&A/Arrow.png', label: 'الرد' },
    ],
    actionButtons: [{ icon: 'images/Q&A/Vector.png', label: '' }],
  },
  {
    id: 4,
    category: 'استشارة قانونية',
    timeAgo: 'منذ يوم',
    question: 'كيف أبدأ',
    user: {
      userType: 'زائر',
      userName: 'كيف ابدا',
      userImage: 'images/Q&A/User.png',
    },
    statusButtons: [
      { icon: 'images/Q&A/check.png', label: 'منشور' },
      { icon: 'images/Q&A/Cross.png', label: 'غير منشور' },
      { icon: 'images/Q&A/Arrow.png', label: 'الرد' },
    ],
    actionButtons: [{ icon: 'images/Q&A/Vector.png', label: '' }],
  },
  {
    id: 5,
    category: 'استشارة قانونية',
    timeAgo: 'منذ يوم',
    question: 'كيف أبدأ',
    user: {
      userType: 'زائر',
      userName: 'كيف ابدا',
      userImage: 'images/Q&A/User.png',
    },
    statusButtons: [
      { icon: 'images/Q&A/check.png', label: 'منشور' },
      { icon: 'images/Q&A/Cross.png', label: 'غير منشور' },
      { icon: 'images/Q&A/Arrow.png', label: 'الرد' },
    ],
    actionButtons: [{ icon: 'images/Q&A/Vector.png', label: '' }],
  },
  {
    id: 6,
    category: 'استشارة قانونية',
    timeAgo: 'منذ يوم',
    question: 'كيف أبدأ',
    user: {
      userType: 'زائر',
      userName: 'كيف ابدا',
      userImage: 'images/Q&A/User.png',
    },
    statusButtons: [
      { icon: 'images/Q&A/check.png', label: 'منشور' },
      { icon: 'images/Q&A/Cross.png', label: 'غير منشور' },
      { icon: 'images/Q&A/Arrow.png', label: 'الرد' },
    ],
    actionButtons: [{ icon: 'images/Q&A/Vector.png', label: '' }],
  },
];

// Couponpage
export const couponsData = [
  { id: 1, name: '7ala', date: '00:00 2019-03-31', status: 'inactive' },
  { id: 2, name: '7ala', date: '00:00 2019-03-31', status: 'active' },
  { id: 3, name: '7ala', date: '00:00 2019-03-31', status: 'inactive' },
  { id: 4, name: '7ala', date: '00:00 2019-03-31', status: 'inactive' },
  { id: 5, name: '7ala', date: '00:00 2019-03-31', status: 'active' },
  { id: 6, name: '7ala', date: '00:00 2019-03-31', status: 'active' },
  { id: 7, name: '7ala', date: '00:00 2019-03-31', status: 'inactive' },
];

// Comissionpage
export const commisionData = [
  {
    id: 1,
    name: 'عبائة عليك وعبائة علينا , Happy Mothers Day اذا اشترى العميل X يحصل على Y ينتهي بتاريخ: 2020-05-10 00:00 احصائيات',
    date: '00:00 2019-03-31',
    status: 'active',
  },
  {
    id: 2,
    name: 'عبائة عليك وعبائة علينا , Happy Mothers Day اذا اشترى العميل X يحصل على Y ينتهي بتاريخ: 2020-05-10 00:00 احصائيات',
    date: '00:00 2019-03-31',
    status: 'active',
  },
  {
    id: 3,
    name: 'عبائة عليك وعبائة علينا , Happy Mothers Day اذا اشترى العميل X يحصل على Y ينتهي بتاريخ: 2020-05-10 00:00 احصائيات',
    date: '00:00 2019-03-31',
    status: 'active',
  },
  {
    id: 4,
    name: 'عبائة عليك وعبائة علينا , Happy Mothers Day اذا اشترى العميل X يحصل على Y ينتهي بتاريخ: 2020-05-10 00:00 احصائيات',
    date: '00:00 2019-03-31',
    status: 'active',
  },
  {
    id: 5,
    name: 'عبائة عليك وعبائة علينا , Happy Mothers Day اذا اشترى العميل X يحصل على Y ينتهي بتاريخ: 2020-05-10 00:00 احصائيات',
    date: '00:00 2019-03-31',
    status: 'active',
  },
  {
    id: 6,
    name: 'عبائة عليك وعبائة علينا , Happy Mothers Day اذا اشترى العميل X يحصل على Y ينتهي بتاريخ: 2020-05-10 00:00 احصائيات',
    date: '00:00 2019-03-31',
    status: 'active',
  },
  {
    id: 7,
    name: 'عبائة عليك وعبائة علينا , Happy Mothers Day اذا اشترى العميل X يحصل على Y ينتهي بتاريخ: 2020-05-10 00:00 احصائيات',
    date: '00:00 2019-03-31',
    status: 'active',
  },
];

// abondond page
export const shoppingCarts = [
  {
    userName: 'Rawan A',
    timeAgo: 'منذ 9 ساعات',
    productCount: 'منتج واحد',
    totalPrice: '٢٣٢٫٠٥ ر.س',
  },
  {
    userName: 'Rawan A',
    timeAgo: 'منذ 9 ساعات',
    productCount: 'منتج واحد',
    totalPrice: '٢٣٢٫٠٥ ر.س',
  },
  {
    userName: 'Rawan A',
    timeAgo: 'منذ 9 ساعات',
    productCount: 'منتج واحد',
    totalPrice: '٢٣٢٫٠٥ ر.س',
  },
  {
    userName: 'Rawan A',
    timeAgo: 'منذ 9 ساعات',
    productCount: 'منتج واحد',
    totalPrice: '٢٣٢٫٠٥ ر.س',
  },
  {
    userName: 'Rawan A',
    timeAgo: 'منذ 9 ساعات',
    productCount: 'منتج واحد',
    totalPrice: '٢٣٢٫٠٥ ر.س',
  },
  {
    userName: 'Rawan A',
    timeAgo: 'منذ 9 ساعات',
    productCount: 'منتج واحد',
    totalPrice: '٢٣٢٫٠٥ ر.س',
  },
  {
    userName: 'Rawan A',
    timeAgo: 'منذ 9 ساعات',
    productCount: 'منتج واحد',
    totalPrice: '٢٣٢٫٠٥ ر.س',
  },
  {
    userName: 'Rawan A',
    timeAgo: 'منذ 9 ساعات',
    productCount: 'منتج واحد',
    totalPrice: '٢٣٢٫٠٥ ر.س',
  },
];

// loyaltypage
export const loyaltyCards = [
  {
    icon: 'images/Loyalty/hand-heart-line.png',
    title: 'تذكيرات تلقائية',
    description: 'ذكر عملاءك للاستفادة من نقاط ولائهم تلقائياً',
  },
  {
    icon: 'images/Loyalty/sound-module-line.png',
    title: 'تحكم كامل',
    description: 'تحكم بكامل تفاصيل نظام الولاء ومكافآته وإشعاراته',
  },
  {
    icon: 'images/Loyalty/Vector2.png',
    title: 'تقارير تفصيلية',
    description: 'تقارير تفصيلية للنقاط والجوائز لتسهيل إدارتك لنظام الولاء',
  },
  {
    icon: 'images/Loyalty/Vector.png',
    title: 'تذكيرات تلقائية',
    description: 'ذكر عملاءك للاستفادة من نقاط ولائهم تلقائياً',
  },
];

// mohallypage
export const boxesData = [
  {
    imageSrc: 'images/Mohally/Money%20Bag%20(1).png',
    title: 'عزّز مبيعات متجرك',
    description:
      'اجذب شريحة عملاء أكبر ومبيعات أكثر عبر ربط متجرك بمحلي وعرض منتجاتك لجمهور مستعد للشراء!',
  },
  {
    imageSrc: 'images/Mohally/Money%20Bag.png',
    title: 'إنضم بدون أي رسوم',
    description:
      'محلي توفر لتجار باقتي سلة بلس وسلة برو قناة بيع وحل تسويقي مجاني وبدون أي تكاليف إضافية!!',
  },
  {
    imageSrc: 'images/Mohally/Money%20Bag%20(3).png',
    title: 'عزّز مبيعات متجرك',
    description:
      'بإمكانك إدراة عرض منتجات متجرك في محلي والتحكم بإظهار أو إخفاء أي من منتجاتك بضغطة زر.',
  },
  {
    imageSrc: 'images/Mohally/Money%20Bag%20(2).png',
    title: 'عزّز مبيعات متجرك',
    description:
      'أضف منتجاتك لمحلي عبر اختيار التصنيف المناسب لكل منتج، وسهِّل على عملاء محلي العثور على منتجاتك',
  },
];

// storepackages
export const plans = [
  {
    title: 'سلة برو',
    description: 'باقة التجارة الاحترافية للشركات استكشف مزايا الباقة',
    renewalDate: 'الأحد 6 أبريل 2025',
    remainingDays: 673,
    options: [{ label: 'سنتين 7176 ر.س 5980 ر.س', currentCount: -600 }],
  },
];

export const addons = [
  {
    icon: 'images/StorePackages/Share.png',
    title: 'رصيد SMS',
    description: 'تواصل أوسع ووصول أسرع بتكاليف أقل',
  },
  {
    icon: 'images/StorePackages/Shop.png',
    title: 'زيادة عدد الفروع',
    description:
      'أضِف جميع فروعك وأظهرها لعملائك عبر إضافة عدد غير محدود من فروع متجرك',
  },
  {
    icon: 'images/StorePackages/User.png',
    title: 'زيادة عدد المستخدمين',
    description:
      'أضِف طاقم عملك لإدارة متجرك بشكل متكامل من خلال إضافة الموظفين',
  },
  {
    icon: 'images/StorePackages/translation.png',
    title: 'ترجمة فورية لمليون حرف',
    description:
      'أضِف رصيداً من عدد الأحرف لترجمة متجرك فورياً بأكثر من 40 لغة',
  },
];

// settingPage
export const sections = [
  {
    title: 'إعدادات المتجر',
    items: [
      {
        icons: <LuSettings />,
        heading: 'الإعدادات الأساسية',
        description: 'الرابط، الشعار، الاسم، المقر',
        link: '/',
      },
      {
        icons: <RiTruckLine />,
        heading: 'خيارات الشحن والتوصيل',
        description: 'الربط مع شركات الشحن',
        link: '/product',
      },
      {
        icons: <LuWallet2 />,
        heading: 'طرق الدفع',
        description: 'تفعيل المدفوعات الإلكترونية',
        link: '/orders',
      },
      {
        icons: <LuWallet2 />,
        heading: 'المحفظة والفواتير',
        description: 'رصيد المحفظة, الفواتير, اشتراكاتي',
        link: '/clients',
      },
      {
        icons: <BiDollarCircle />,
        heading: 'العملات',
        description: 'العملات المتاحة في المتجر',
        link: '/Reports',
      },
      {
        icons: <IoToggleSharp />,
        heading: 'خيارات المتجر',
        description: 'خيارات التحكم بالمتجر',
        link: '/Q&A ',
      },
      {
        icons: <RiNumber1 />,
        heading: 'اللغات',
        description: 'تفعيل تعدد اللغات في المتجر',
        link: '/static',
      },
      {
        icons: <RiNumber1 />,
        heading: 'إعدادات التقييم',
        description: 'تحديد إعدادات التقييم الخاصة بمتجرك',
        link: '/coupons',
      },
      {
        icons: <CiGlobe />,
        heading: 'إعدادات الدومين',
        description: 'التحكم في إعدادات دومين المتجر',
        link: '/Commision',
      },
      {
        icons: <CiCircleMinus />,
        heading: 'وضع الصيانة',
        description: 'إغلاق المتجر بشكل مؤقتاً',
        link: '/abandondcart',
      },
      {
        icons: <LuCompass />,
        heading: 'قيود شركات الشحن',
        description: 'إضافة قيود محددة لشركات الشحن',
        link: '/Loyalty',
      },

      {
        icons: <IoMdNotificationsOutline />,
        heading: 'الحماية من الإحتيال',
        description: 'إضافة قيود محددة للحماية من الاحتيال',
        link: '/mahally',
      },
      {
        icons: <BsShieldPlus />,
        heading: 'الإشعارات',
        description: 'إعداد الإشعارات الخاصة بك',
        link: '/storepackage',
      },
      {
        icons: <RiFileTextLine />,
        heading: 'اعدادت فواتير المتجر',
        description: 'التحكم بالفواتير الصادرة مع الطلبات',
        link: '/Wallet',
      },
      {
        icons: <RiFileLockLine />,
        heading: 'تطبيق محلي',
        description: 'إعدادات ربط المتجر مع محلي',
        link: '/Storedesign',
      },
    ],
  },
  {
    title: 'إعدادات المتجر',
    items: [
      {
        icons: <IoMdNotificationsOutline />,
        heading: 'اعلمني عند التوفر',
        description: 'إرسال تنبيه إلى العميل في حال توفر المنتج',
      },
      {
        icons: <TfiMedall />,
        heading: 'الماركات التجارية',
        description: 'عرض الماركات التجارية والتحكم بها',
      },
      {
        icons: <CiGift />,
        heading: 'نظام الإهداء الرقمي',
        description: 'إتاحة آلية الإهداء إلى عملائك',
      },
      {
        icons: <RiInbox2Line />,
        heading: 'إعدادات المخزون',
        description: 'تحديد الإعدادات الخاصة بالمنتجات وكمياتها وطريقة عرضها',
      },
    ],
  },
  {
    title: 'الإعدادات المتقدمة',
    items: [
      {
        icons: <LuUser2 />,
        heading: 'طلبات الدخول للمساعدة',
        description: 'السماح لفريق سلة بالدخول المؤقت للمساعدة',
      },
      {
        icons: <PiPuzzlePieceLight />,
        heading: 'التطبيقات',
        description: 'تطبيقات متجر سلة',
      },
      {
        icons: <PiPuzzlePieceLight />,
        heading: 'ربط الخدمات',
        description: 'الإحصائيات، الإعلانات، الشات',
      },
      {
        icons: <MdOutlineGroup />,
        heading: 'موظفو المتجر',
        description: 'التحكم في صلاحيات موظفو المتجر',
      },
      {
        icons: <BsShopWindow />,
        heading: 'طلبات الدخول للمساعدة',
        description: 'السماح لفريق سلة بالدخول المؤقت للمساعدة',
      },
      {
        icons: <BsBag />,
        heading: 'الحماية والأمان',
        description: 'تفعيل المصادقة الثنائية',
      },
      {
        icons: <BsMegaphone />,
        heading: 'الإعلانات',
        description: 'عرض إعلانات للعملاء في المتجر',
      },
      {
        icons: <CiSearch />,
        heading: 'SEO',
        description: 'تحسين الظهور على محركات البحث',
      },
      {
        icons: <RiArticleLine />,
        heading: 'ضريبة القيمة المضافة',
        description: 'إعداد الضريبة',
      },
      {
        icons: <IoAnalyticsOutline />,
        heading: 'روابط مخصصة',
        description: 'روابط مخصصة ضمن نطاق متجرك',
      },
      {
        icons: <RiCornerUpRightDoubleFill />,
        heading: 'Webhooks',
        description: 'إرسال الإخطارات و التنبيهات لخدمات أخرى',
      },
      {
        icons: <CiCircleAlert />,
        heading: 'التحكم بالحساب',
        description: 'إيقاف الاشتراك، حذف المتجر',
      },
      {
        icons: <RiChatUploadLine />,
        heading: 'استيراد البيانات',
        description: 'استيراد البيانات من مختلف المنصات',
      },
    ],
  },
  {
    title: 'الأرشيف',
    items: [
      {
        icons: <RiArticleLine />,
        heading: 'عمليات الدفع الإلكتروني',
        description: 'البحث في عمليات الدفع الإلكتروني',
      },
      {
        icons: <FiTruck />,
        heading: 'أرشيف بوليصات سلة',
        description: 'جميع بيانات بوليصات سلة',
      },
      {
        icons: <CiChat1 />,
        heading: 'أرشيف الرسائل النصية',
        description: 'الرسائل الصادرة من المتجر',
      },
      {
        icons: <RiDeleteBin6Line />,
        heading: 'استعادة البيانات',
        description: 'استعادة الطلبات والمنتجات المحذوفة',
      },
    ],
  },
];

// wallet page
export const billingSettingsData = [
  {
    icon: 'images/Wallet/bank-line.png',
    title: 'الحساب البنكي لاستقبال المبالغ',
    description: 'مصرف الراجحي - متجر موضة -',
  },
];

// AppMaker
export const appData = [
  {
    name: 'Heap',
    rating: 5,
    numberOfRatings: 1,
    category: 'سلة',
    imageSrc: 'images/AppMaker/Rectangle-1.png',
    optionsIconSrc: 'images/AppMaker/Frame%20352.png',
  },
  {
    name: 'Heap',
    rating: 5,
    numberOfRatings: 1,
    category: 'سلة',
    imageSrc: 'images/AppMaker/Rectangle-1.png',
    optionsIconSrc: 'images/AppMaker/Frame%20352.png',
  },
  {
    name: 'Heap',
    rating: 5,
    numberOfRatings: 1,
    category: 'سلة',
    imageSrc: 'images/AppMaker/Rectangle-1.png',
    optionsIconSrc: 'images/AppMaker/Frame%20352.png',
  },
  {
    name: 'Heap',
    rating: 5,
    numberOfRatings: 1,
    category: 'سلة',
    imageSrc: 'images/AppMaker/Rectangle-1.png',
    optionsIconSrc: 'images/AppMaker/Frame%20352.png',
  },
  {
    name: 'Heap',
    rating: 5,
    numberOfRatings: 1,
    category: 'سلة',
    imageSrc: 'images/AppMaker/Rectangle-1.png',
    optionsIconSrc: 'images/AppMaker/Frame%20352.png',
  },
  {
    name: 'Heap',
    rating: 5,
    numberOfRatings: 1,
    category: 'سلة',
    imageSrc: 'images/AppMaker/Rectangle-1.png',
    optionsIconSrc: 'images/AppMaker/Frame%20352.png',
  },
  {
    name: 'Heap',
    rating: 5,
    numberOfRatings: 1,
    category: 'سلة',
    imageSrc: 'images/AppMaker/Rectangle-1.png',
    optionsIconSrc: 'images/AppMaker/Frame%20352.png',
  },
  {
    name: 'Heap',
    rating: 5,
    numberOfRatings: 1,
    category: 'سلة',
    imageSrc: 'images/AppMaker/Rectangle-1.png',
    optionsIconSrc: 'images/AppMaker/Frame%20352.png',
  },
  {
    name: 'Heap',
    rating: 5,
    numberOfRatings: 1,
    category: 'سلة',
    imageSrc: 'images/AppMaker/Rectangle-1.png',
    optionsIconSrc: 'images/AppMaker/Frame%20352.png',
  },
  {
    name: 'Heap',
    rating: 5,
    numberOfRatings: 1,
    category: 'سلة',
    imageSrc: 'images/AppMaker/Rectangle-1.png',
    optionsIconSrc: 'images/AppMaker/Frame%20352.png',
  },
  {
    name: 'Heap',
    rating: 5,
    numberOfRatings: 1,
    category: 'سلة',
    imageSrc: 'images/AppMaker/Rectangle-1.png',
    optionsIconSrc: 'images/AppMaker/Frame%20352.png',
  },
  {
    name: 'Heap',
    rating: 5,
    numberOfRatings: 1,
    category: 'سلة',
    imageSrc: 'images/AppMaker/Rectangle-1.png',
    optionsIconSrc: 'images/AppMaker/Frame%20352.png',
  },
  {
    name: 'Heap',
    rating: 5,
    numberOfRatings: 1,
    category: 'سلة',
    imageSrc: 'images/AppMaker/Rectangle-1.png',
    optionsIconSrc: 'images/AppMaker/Frame%20352.png',
  },
  {
    name: 'Heap',
    rating: 5,
    numberOfRatings: 1,
    category: 'سلة',
    imageSrc: 'images/AppMaker/Rectangle-1.png',
    optionsIconSrc: 'images/AppMaker/Frame%20352.png',
  },
  {
    name: 'Heap',
    rating: 5,
    numberOfRatings: 1,
    category: 'سلة',
    imageSrc: 'images/AppMaker/Rectangle-1.png',
    optionsIconSrc: 'images/AppMaker/Frame%20352.png',
  },
];

// Maker
export const featuresData = [
  {
    title: 'الإشعارات',
    icon: 'images/Maker/customer-service-line.png',
    description:
      'ضاعف معدل زيارة عملائك لمتجرك، وفرصة إكمالهم عملياتهم الشرائية من خلال إرسال تنبيهات ترويجية لا محدودة',
  },
  {
    title: 'تطبيق native',
    icon: 'images/Maker/smartphone-line.png',
    description: 'ضنظام برمجي عالي الكفاءة على اجهزة Android & IOS',
  },
  {
    title: 'الدعم الفني الشخصي',
    icon: 'images/Maker/customer-service-line.png',
    description: 'تواصل بشكل سريع ومباشر مع الدعم الفني الشخصي الخاص بتطبيقك',
  },
  {
    title: 'الدفع والشحن',
    icon: 'images/Maker/truck-line.png',
    description:
      'توفر جميع وسائل الدفع الإلكترونية. وأكثر من 21 شركة شحن محلية وعالمية.',
  },
  {
    title: 'لوحة التحكم',
    icon: 'images/Maker/speed-up-line.png',
    description:
      'اصنع تجربة مستخدم مميزة لتطبيقك من خلال لوحة تحكم صانع التطبيقات.',
  },
  {
    title: 'الدعم الفني الشخصي',
    icon: 'images/Maker/customer-service-line.png',
    description: 'تواصل بشكل سريع ومباشر مع الدعم الفني الشخصي الخاص بتطبيقك',
  },
  {
    title: 'الدفع والشحن',
    icon: 'images/Maker/truck-line.png',
    description:
      'توفر جميع وسائل الدفع الإلكترونية. وأكثر من 21 شركة شحن محلية وعالمية.',
  },
  {
    title: 'لوحة التحكم',
    icon: 'images/Maker/speed-up-line.png',
    description:
      'اصنع تجربة مستخدم مميزة لتطبيقك من خلال لوحة تحكم صانع التطبيقات.',
  },
  {
    title: 'الدعم الفني الشخصي',
    icon: 'images/Maker/customer-service-line.png',
    description: 'تواصل بشكل سريع ومباشر مع الدعم الفني الشخصي الخاص بتطبيقك',
  },
  {
    title: 'الدفع والشحن',
    icon: 'images/Maker/truck-line.png',
    description:
      'توفر جميع وسائل الدفع الإلكترونية. وأكثر من 21 شركة شحن محلية وعالمية.',
  },
  {
    title: 'لوحة التحكم',
    icon: 'images/Maker/speed-up-line.png',
    description:
      'اصنع تجربة مستخدم مميزة لتطبيقك من خلال لوحة تحكم صانع التطبيقات.',
  },
];

export const appDesignButtons = [
  { text: 'الصفحة الرئيسية', icon: 'images/Maker/smartphone-line.png' },
  { text: 'التصنيفات', icon: 'images/Maker/dashboard-line.png' },
  {
    text: 'الشريط العلوي والتبويبات',
    icon: 'images/Maker/smartphone-line.png',
  },
  { text: 'شاشات البداية', icon: 'images/Maker/smartphone-line.png' },
  { text: 'إعدادات عامة', icon: 'images/Maker/switch-line.png' },
];
