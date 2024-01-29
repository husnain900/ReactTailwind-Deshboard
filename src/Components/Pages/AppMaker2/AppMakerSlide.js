import React, { useState, useRef } from 'react';
import { orderItems } from '../../DevData/DevData';
import { FaTimes } from 'react-icons/fa';
import AppMakerCards from './AppMakerCards';

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
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };
  const activeOrderDetails = orderItems.find(
    (order) => order.id === activeOrder
  );
  return (
    <section className="tech-order-top-boxes">
      <div
        className="tech-order-top-box-items my-9"
        id="tech-draggable-container"
        onMouseDown={handleContainerMouseDown}
        onMouseUp={handleContainerMouseUp}
        onMouseLeave={handleContainerMouseLeave}
        onMouseMove={handleContainerMouseMove}
        ref={containerRef}
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
      {activeOrder !== null && (
        <div className="active-order-content">
          <p>This is the content for AppMakerCards {activeOrder}</p>
          <AppMakerCards
            count={activeOrderDetails ? activeOrderDetails.count : 0}
          />
        </div>
      )}
    </section>
  );
};

export default TechOrderTopBoxes;
