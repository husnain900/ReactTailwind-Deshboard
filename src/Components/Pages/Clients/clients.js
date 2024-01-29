import React, { useState } from "react";
import "./clients.css";
import { clientsTables } from "../../DevData/DevData";
import { FaUsers } from "react-icons/fa";
import Khidmatpopup from "../../PopUp/TopTitlepopup/Khidmatpopup";
import Filteringpopup from "../../PopUp/TopTitlepopup/Filteringpopup";
import BreadCrum from "../../Commons/BreadCrum/BreadCrum";
import TableHead from "../../PopUp/tableHeadpopup";
import ClientPopup from "../../PopUp/Clientpopup/ClientsPopup2";
import ClientBtnPopup from "../../PopUp/Clientpopup/ClientsBtnpopup";

const Clients = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedOrders, setSelectedOrders] = useState([]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    const updatedSelectedOrders = selectAll
      ? []
      : clientsTables.map((order) => order.id);
    setSelectedOrders(updatedSelectedOrders);
  };

  const handleSingleCheckboxChange = (orderId) => {
    const updatedSelectedOrders = selectedOrders.includes(orderId)
      ? selectedOrders.filter((id) => id !== orderId)
      : [...selectedOrders, orderId];
    setSelectedOrders(updatedSelectedOrders);
    const allChecked = clientsTables.every((order) =>
      updatedSelectedOrders.includes(order.id)
    );
    setSelectAll(allChecked);
  };

  return (
    <div>
      <BreadCrum />
      <div className="top-title-clients my-3">
        <div>
          <h4 className="flex items-center gap-2">
            <FaUsers /> مجموعات العملاء{" "}
            <span className="pr-2">(4 مجموعات)</span>
          </h4>
        </div>
      </div>
      <ClientPopup />
      <div className="top-title">
        <ClientBtnPopup />
        <div className="flex relative items-center gap-4 lg:gap-7 sm:flex-row flex-col left-side">
          <div>
            <Filteringpopup />
          </div>
          <div>
            <Khidmatpopup />
          </div>
        </div>
      </div>
      <section className="order-table mt-3 mb-18">
        <table dir="rtl" cellpadding="0" cellspacing="0">
          <thead>
            <tr>
              <th className="checkbox-flex">
                <label
                  style={{ width: "30px", margin: "auto" }}
                  className="chk-container"
                >
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                  <span className="checkmark"></span>
                </label>
              </th>
              <th>
                <div className="flex items-center gap-2">
                  <FaUsers />{" "}
                  <p>
                    <b> العملاء</b>(7817 عميل)
                  </p>
                </div>
              </th>
              <th dir="ltr">
                <TableHead />
              </th>
            </tr>
          </thead>
          <tbody>
            {clientsTables.map((order) => (
              <tr key={order.id}>
                <td className="checkbox-flex text-center">
                  <label
                    style={{ width: "30px", margin: "auto" }}
                    className="chk-container"
                  >
                    <input
                      type="checkbox"
                      checked={selectedOrders.includes(order.id)}
                      onChange={() => handleSingleCheckboxChange(order.id)}
                    />
                    <span className="checkmark"></span>
                  </label>
                </td>
                <td>
                  <td className="btm-br-nn">
                    <img src={order.userImageSrc} alt="User" />
                  </td>
                  <td>
                    <h2 className="ps-3">{order.userName}</h2>
                  </td>
                </td>
                <td dir="ltr">
                  <h4 className="ms-10">{order.timeElapsed}</h4>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Clients;
