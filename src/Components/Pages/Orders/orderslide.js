import React, { useState, useRef } from 'react';
import { orderItems } from '../../DevData/DevData';
import { FaTimes } from 'react-icons/fa';
import OrderTable from './OrderTable';

const TechOrderTopBoxes = () => {
  const [activeOrder, setActiveOrder] = useState(orderItems[0].id); // Set default to the first order
  const [isDragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const containerRef = useRef(null);

  const handleItemClick = (orderId) => {
    setActiveOrder(orderId);
  };

  const handleCloseClick = (event, orderId) => {
    event.stopPropagation();
    setActiveOrder(null);
  };

  const handleContainerMouseDown = (e) => {
    e.preventDefault();
    setDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleContainerMouseUp = () => {
    setDragging(false);
  };

  const handleContainerMouseLeave = () => {
    setDragging(false);
  };

  const handleContainerMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Calculate total client count
  const totalClients = orderItems.reduce((acc, item) => acc + item.count, 0);

  // Find the count for the active order or use total client count if no order is active
  const activeOrderCount =
    activeOrder !== null
      ? orderItems.find((item) => item.id === activeOrder)?.count
      : totalClients;

  return (
    <section className="tech-order-top-boxes">
      <div
        className="tech-order-top-box-items"
        id="tech-draggable-container"
        onMouseDown={handleContainerMouseDown}
        onMouseUp={handleContainerMouseUp}
        onMouseLeave={handleContainerMouseLeave}
        onMouseMove={handleContainerMouseMove}
        ref={containerRef}
        style={{ marginLeft: '-28px' }}
      >
        {orderItems.map((order) => (
          <div
            key={order.id}
            className={`tech-order-top-box-item ${
              activeOrder === order.id ? 'tech-active-order' : ''
            }`}
            onClick={() => handleItemClick(order.id)}
          >
            <button
              className="tech-close-btn"
              onClick={(e) => handleCloseClick(e, order.id)}
            >
              <FaTimes />
            </button>
            <div className="tech-order-top-box-item-icon">{order.icon}</div>
            <div className="tech-order-top-box-item-content">
              <h5>
                <span
                  className="status-circle"
                  style={{ backgroundColor: order.statusColor }}
                ></span>
                <span className="tech-order-top-box-item-text">
                  {order.text}
                </span>
                <span>{order.count}</span>
              </h5>
            </div>
          </div>
        ))}
      </div>
      <div className="active-order-content mt-4">
        {/* Render OrderTable with the appropriate count */}
        <OrderTable count={activeOrderCount} />
      </div>
    </section>
  );
};

export default TechOrderTopBoxes;
