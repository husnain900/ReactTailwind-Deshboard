import React from "react";
import { salesData } from "../../DevData/DevData";

const ReportsTable = () => {
  return (
    <div>
      {" "}
      <div className="table-container-report dark-border report-table mb-12">
        <table dir="rtl" className="min-w-full ">
          <thead className="bg-dark-head">
            <tr>
              <th colSpan="11">
                <h1 className="dark-a">مبيعات المنتجات</h1>
              </th>
            </tr>
          </thead>
          <tbody className=" ">
            <tr>
              <td style={{textAlign:"right"}}>
                <p>المنتج </p>
              </td>
              <td>
                <p>الماركة</p>
              </td>
              <td>
                <p>النوع</p>
              </td>
              <td>
                <p>السعر</p>
              </td>
              <td>
                <p>الكمية المباعة</p>
              </td>
              <td>
                <p>المبيعات قبل التخفيض</p>
              </td>
              <td>
                <p>التخفيض</p>
              </td>
              <td>
                <p>اجمالي كلفة المبيعات</p>
              </td>
              <td>
                <p>صافي المبيعات</p>
              </td>
              <td>
                <p>الضرائب</p>
              </td>
              <td>
                <p>إجمالي المبيعات</p>
              </td>
            </tr>
            {salesData.map((row) => (
              <tr key={row.id}>
                <td style={{textAlign:"right"}}>
                  <table className="report-nested-tbl">
                    <tr>
                      <td>
                        <img src={row.imgScr} alt="Product Image" />
                      </td>
                      <td>
                        <p>{row.product}</p>
                      </td>
                    </tr>
                  </table>
                </td>
                <td>
                  <p>-</p>
                </td>
                <td>
                  <p>{row.type}</p>
                </td>
                <td>
                  <p>{row.price}</p>
                </td>
                <td>
                  <p>{row.quantity}</p>
                </td>
                <td>
                  <p>{row.salesBeforeDiscount}</p>
                </td>
                <td>
                  <p>-</p>
                </td>
                <td>
                  <p>{row.discount}</p>
                </td>
                <td>
                  <p>{row.netSales}</p>
                </td>
                <td>
                  <p>{row.taxes}</p>
                </td>
                <td>
                  <p>{row.totalSales}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>{" "}
    </div>
  );
};

export default ReportsTable;
