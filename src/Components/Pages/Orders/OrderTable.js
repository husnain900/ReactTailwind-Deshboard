import React, { useState } from 'react';
import TableHead from '../../PopUp/tableHeadpopup';
import { ordersTable } from '../../DevData/DevData';

const OrderTable = ({ count }) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedOrders, setSelectedOrders] = useState([]);

  const displayedOrders =
    count != null ? ordersTable.slice(0, count) : ordersTable;

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    const updatedSelectedOrders = selectAll
      ? []
      : displayedOrders.map((order) => order.id);
    setSelectedOrders(updatedSelectedOrders);
  };

  const handleSingleCheckboxChange = (orderId) => {
    const updatedSelectedOrders = selectedOrders.includes(orderId)
      ? selectedOrders.filter((id) => id !== orderId)
      : [...selectedOrders, orderId];
    setSelectedOrders(updatedSelectedOrders);
    const allChecked = displayedOrders.every((order) =>
      updatedSelectedOrders.includes(order.id)
    );
    setSelectAll(allChecked);
  };

  return (
    <div>
      <section className="order-table mb-10">
        <div className="overflow-x-auto">
          <table
            className="min-w-full"
            dir="rtl"
            cellPadding="0"
            cellSpacing="0"
          >
            <thead className='bg-dark-head'>
              <tr>
                <th className="checkbox-flex " key="selectAllCheckbox">
                  <label
                    style={{ width: '30px', margin: 'auto' }}
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
                  <p className='dark-text'>
                    <b className='dark-text'> الطلبات </b>({displayedOrders.length} طلب)
                  </p>
                </th>
                <th colSpan="2" dir="ltr">
                  <TableHead />
                </th>
              </tr>
            </thead>
            <tbody className="overflow-y-scroll">
              {displayedOrders.map((order) => (
                <tr key={order.id}>
                  <td className="checkbox-flex text-center">
                    <label
                      style={{ width: '30px', margin: 'auto' }}
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
                    <table>
                      <tr className="border-0">
                        <td className="btm-br-nn">
                          <div>
                            <img src={order.userImageSrc} alt="User" />
                          </div>
                        </td>
                        <td>
                          <h2 className='dark-a'>{order.userName}</h2>
                          <p className='dark-text'>{order.orderDetails}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td>
                    <h3 className="sm-text-h4 dark-text-light">{order.price}</h3>
                  </td>
                  <td>
                    <h4 className="text-center sm-text-h4">
                      {order.timeElapsed}
                    </h4>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default OrderTable;
