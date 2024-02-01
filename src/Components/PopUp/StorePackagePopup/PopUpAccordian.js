import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionUsage() {
  return (
    <div style={{ width: '100%' }}>
      <Accordion
        className="shadow-none py-2"
        defaultExpanded
        style={{ width: '100%' }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          className="hover:text-[#76E8D0] duration-200 cursor-pointer"
        >
          إعداد المتجر لأول مرة
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>
              <a
                className="hover:text-[#76E8D0] duration-200 cursor-pointer"
                href="#"
              >
                تسجيل حساب جديد في سلة
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#76E8D0] duration-200 cursor-pointer my-2"
                href="#"
              >
                إنشاء متجر جديد على سلة
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#76E8D0] duration-200 cursor-pointer"
                href="#"
              >
                الأسئلة الشائعة حول متجرك الجديد على سلة
              </a>
            </li>
          </ul>
        </AccordionDetails>
        <AccordionActions></AccordionActions>
      </Accordion>
      <Accordion className="shadow-none py-2" style={{ width: '100%' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          إعداد المتجر لأول مرة
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>
              <a
                className="hover:text-[#76E8D0] duration-200 cursor-pointer"
                href="#"
              >
                تسجيل حساب جديد في سلة
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#76E8D0] duration-200 cursor-pointer my-2"
                href="#"
              >
                إنشاء متجر جديد على سلة
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#76E8D0] duration-200 cursor-pointer"
                href="#"
              >
                الأسئلة الشائعة حول متجرك الجديد على سلة
              </a>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion className="shadow-none py-2" style={{ width: '100%' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          إعداد المتجر لأول مرة
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>
              <a
                className="hover:text-[#76E8D0] duration-200 cursor-pointer"
                href="#"
              >
                تسجيل حساب جديد في سلة
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#76E8D0] duration-200 cursor-pointer my-2"
                href="#"
              >
                إنشاء متجر جديد على سلة
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#76E8D0] duration-200 cursor-pointer"
                href="#"
              >
                الأسئلة الشائعة حول متجرك الجديد على سلة
              </a>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion className="shadow-none py-2" style={{ width: '100%' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          إعداد المتجر لأول مرة
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>
              <a
                className="hover:text-[#76E8D0] duration-200 cursor-pointer"
                href="#"
              >
                تسجيل حساب جديد في سلة
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#76E8D0] duration-200 cursor-pointer my-2"
                href="#"
              >
                إنشاء متجر جديد على سلة
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#76E8D0] duration-200 cursor-pointer"
                href="#"
              >
                الأسئلة الشائعة حول متجرك الجديد على سلة
              </a>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion className="shadow-none py-2" style={{ width: '100%' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          إعداد المتجر لأول مرة
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>
              <a
                className="hover:text-[#76E8D0] duration-200 cursor-pointer"
                href="#"
              >
                تسجيل حساب جديد في سلة
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#76E8D0] duration-200 cursor-pointer my-2"
                href="#"
              >
                إنشاء متجر جديد على سلة
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#76E8D0] duration-200 cursor-pointer"
                href="#"
              >
                الأسئلة الشائعة حول متجرك الجديد على سلة
              </a>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion className="shadow-none py-2" style={{ width: '100%' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          إعداد المتجر لأول مرة
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>
              <a
                className="hover:text-[#76E8D0] duration-200 cursor-pointer"
                href="#"
              >
                تسجيل حساب جديد في سلة
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#76E8D0] duration-200 cursor-pointer my-2"
                href="#"
              >
                إنشاء متجر جديد على سلة
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#76E8D0] duration-200 cursor-pointer"
                href="#"
              >
                الأسئلة الشائعة حول متجرك الجديد على سلة
              </a>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion className="shadow-none py-2" style={{ width: '100%' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          إعداد المتجر لأول مرة
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>
              <a
                className="hover:text-[#76E8D0] duration-200 cursor-pointer"
                href="#"
              >
                تسجيل حساب جديد في سلة
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#76E8D0] duration-200 cursor-pointer my-2"
                href="#"
              >
                إنشاء متجر جديد على سلة
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#76E8D0] duration-200 cursor-pointer"
                href="#"
              >
                الأسئلة الشائعة حول متجرك الجديد على سلة
              </a>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
