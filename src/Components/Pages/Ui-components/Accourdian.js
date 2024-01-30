import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const items = [
  "إضافة طلب جديد يدوياً",
  "إدارة استرجاع الطلبات",
  "الأسئلة الشائعة حول خيارات التحكم بالطلبات",
  "إضافة وتعديل وحذف الطلبات",
  "الأسئلة الشائعة حول استرجاع الطلبات",
  "تخصيص حالات الطلب",
  "إعداد إصدار فواتير الطلبات",
  "البحث وفرز الطلبات",
  "طباعة قائمة تجهيز الطلبات",
  "عرض وطباعة الفواتير الإلكترونية (الفاتورة الإلكترونية)",
  "إلغاء العميل للطلب قبل التنفيذ",
  "عرض تفاصيل الشحن في صفحة العميل",
  "تصدير الطلبات",
  "إضافة وسوم للطلب",
  "تحديد كل الطلبات واجراء تحرير سريع",
  "إسناد الطلبات للموظفين",
  "تفعيل الشراء السريع",
  "تحديث حالة الطلب باستيراد ملف أكسل",
  "استعادة الطلبات والمنتجات المحذوفة",
];
const items2 = [
  "كتابة مقالة جديد على مدونة متجرك",
  "إدارة مدونة متجرك على سلة",
  "إدارة نظام الولاء",
  "إضافة عرض خاص جديد",
  "إدارة صفحة السلات المتروكة",
  "تفعيل نظام ولاء العملاء",
  "تخصيص نص العروض الخاصة",
  "الأسئلة الشائعة حول نظام الولاء",
  "أسئلة شائعة حول العروض الخاصة",
  "التذكير بالسلة المتروكة بدون إرسال خصم",
  "العمل مع الحملات التسويقية",
  "التذكير بالسلة المتروكة مع إرسال خصم عليها",
  "إنشاء كوبون جديد",
  "خطوات الحصول على App signing key certificate",
  "بطاقات الإهداء الرقمية",
  "تفعيل الخصم المؤقت على السلات المتروكة",
  "تفعيل الطلب المباشر في المتجر",
  "إنشاء مجموعات كوبونات",
  "الربط بوبتن poptin للنوافذ المنبثقة",
  "أسئلة شائعة حول كوبونات التخفيض",
  "إكمال الطلب للسلات المتروكة",
  "الربط مع بريفي Privy للتسويق الإلكتروني",
  "الحد الأعلى للخصم في الكوبون",
  "التسويق بالعمولة",
  "أسئلة شائعة حول السلات المتروكة",
  "ربط الكوبون مع طريقة دفع معينة",
  "خيارات التحكم بالكوبونات وطريقة عرضها",
  "الكوبون التسويقي",
  "الربط مع PopupSmart لإدارة الحملات الإعلانية",
  "الربط مع تطبيق صفحات هبوط المنتج",
  "الإعلانات",
  "الربط مع Crazy Egg",
];

const items3 = {
  "ثيم المنيو": null,
  "إدارة متجر الثيمات وتصميم المتجر": null,
  "تخصيص تصميم المتجر": null,
  "تخصيص الصفحة الرئيسية": null,
  "بناء ثيم خاص بواسطة Twilight": null,
  "ثيم رقمي": null,
  "ثيم كليك": null,
  "ثيم موعد": null,
  "ثيم مختلف": null,
  "ثيم وسام": null,
  "ثيم زين": null,
  "ثيم رائد": null,
  "ثيم واثق": null,
  "ثيم امتياز": null,
  "ثيم منيو المطاعم": null,
  "ثيم فريد": null,
  "ثيم نمو": null,
};

const items4 = {
  "التسويق والأدوات التسويقية": null,
  "كتابة مقالة جديد على مدونة متجرك": null,
  "إدارة مدونة متجرك على سلة": null,
  "إدارة نظام الولاء": null,
  "إضافة عرض خاص جديد": null,
  "إدارة صفحة السلات المتروكة": null,
  "تفعيل نظام ولاء العملاء": null,
  "تخصيص نص العروض الخاصة": null,
  "الأسئلة الشائعة حول نظام الولاء": null,
  "أسئلة شائعة حول العروض الخاصة": null,
  "التذكير بالسلة المتروكة بدون إرسال خصم": null,
  "العمل مع الحملات التسويقية": null,
  "التذكير بالسلة المتروكة مع إرسال خصم عليها": null,
  "إنشاء كوبون جديد": null,
  "خطوات الحصول على App signing key certificate": null,
  "بطاقات الإهداء الرقمية": null,
  "تفعيل الخصم المؤقت على السلات المتروكة": null,
  "تفعيل الطلب المباشر في المتجر": null,
  "إنشاء مجموعات كوبونات": null,
  "الربط بوبتن poptin للنوافذ المنبثقة": null,
  "أسئلة شائعة حول كوبونات التخفيض": null,
  "إكمال الطلب للسلات المتروكة": null,
  "الربط مع بريفي Privy للتسويق الإلكتروني": null,
  "الحد الأعلى للخصم في الكوبون": null,
  "التسويق بالعمولة": null,
  "أسئلة شائعة حول السلات المتروكة": null,
  "ربط الكوبون مع طريقة دفع معينة": null,
  "خيارات التحكم بالكوبونات وطريقة عرضها": null,
  "الكوبون التسويقي": null,
  "الربط مع PopupSmart لإدارة الحملات الإعلانية": null,
  "الربط مع تطبيق صفحات هبوط المنتج": null,
  الإعلانات: null,
  "الربط مع Crazy Egg": null,
};
export default function AccordionUsage() {
  return (
    <div>
      <Accordion className="shadow-none py-2" defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="hover:text-[#76E8D0] duration-200 cursor-pointer"
          aria-controls="panel3-content"
          id="panel3-header"
        >
          الطلبات
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <a
                  className="hover:text-[#76E8D0] duration-200 cursor-pointer mb-2"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </AccordionDetails>
        <AccordionActions></AccordionActions>
      </Accordion>
      <Accordion className="shadow-none py-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="hover:text-[#76E8D0] duration-200 cursor-pointer"
          aria-controls="panel1-content"
          id="panel1-header"
        >
          التسويق والأدوات التسويقية
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {items2.map((item, index) => (
              <li key={index}>
                <a
                  className="hover:text-[#76E8D0] duration-200 cursor-pointer mb-2"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion className="shadow-none py-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="hover:text-[#76E8D0] duration-200 cursor-pointer"
          aria-controls="panel2-content"
          id="panel2-header"
        >
          الثيمات وتصميم المتجر
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {Object.keys(items3).map((item, index) => (
              <li key={index}>
                <a
                  className="hover:text-[#76E8D0] duration-200 cursor-pointer mb-2"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion className="shadow-none py-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="hover:text-[#76E8D0] duration-200 cursor-pointer"
          aria-controls="panel1-content"
          id="panel1-header"
        >
          الشحن والتوصيل
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {Object.keys(items4).map((item, index) => (
              <li key={index}>
                <a
                  className="hover:text-[#76E8D0] duration-200 cursor-pointer mb-2"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion className="shadow-none py-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="hover:text-[#76E8D0] duration-200 cursor-pointer"
          aria-controls="panel2-content"
          id="panel2-header"
        >
          إعداد المتجر لأول مرة
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <a
                  className="hover:text-[#76E8D0] duration-200 cursor-pointer mb-2"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion className="shadow-none py-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="hover:text-[#76E8D0] duration-200 cursor-pointer"
          aria-controls="panel1-content"
          id="panel1-header"
        >
          إعداد المتجر لأول مرة
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <a
                  className="hover:text-[#76E8D0] duration-200 cursor-pointer mb-2"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion className="shadow-none py-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="hover:text-[#76E8D0] duration-200 cursor-pointer"
          aria-controls="panel2-content"
          id="panel2-header"
        >
          إعداد المتجر لأول مرة
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <a
                  className="hover:text-[#76E8D0] duration-200 cursor-pointer mb-2"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion className="shadow-none py-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="hover:text-[#76E8D0] duration-200 cursor-pointer"
          aria-controls="panel1-content"
          id="panel1-header"
        >
          إعداد المتجر لأول مرة
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <a
                  className="hover:text-[#76E8D0] duration-200 cursor-pointer mb-2"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion className="shadow-none py-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="hover:text-[#76E8D0] duration-200 cursor-pointer"
          aria-controls="panel2-content"
          id="panel2-header"
        >
          إعداد المتجر لأول مرة
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <a
                  className="hover:text-[#76E8D0] duration-200 cursor-pointer mb-2"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion className="shadow-none py-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="hover:text-[#76E8D0] duration-200 cursor-pointer"
          aria-controls="panel2-content"
          id="panel2-header"
        >
          إعداد المتجر لأول مرة
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <a
                  className="hover:text-[#76E8D0] duration-200 cursor-pointer mb-2"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion className="shadow-none py-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="hover:text-[#76E8D0] duration-200 cursor-pointer"
          aria-controls="panel1-content"
          id="panel1-header"
        >
          إعداد المتجر لأول مرة
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <a
                  className="hover:text-[#76E8D0] duration-200 cursor-pointer mb-2"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion className="shadow-none py-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="hover:text-[#76E8D0] duration-200 cursor-pointer"
          aria-controls="panel2-content"
          id="panel2-header"
        >
          إعداد المتجر لأول مرة
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <a
                  className="hover:text-[#76E8D0] duration-200 cursor-pointer mb-2"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
