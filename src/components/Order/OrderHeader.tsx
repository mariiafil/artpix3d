import React from 'react';

export const OrderHeader = () => {
  return (
    <ul className="order__header">
      <li className="order__header-item order__header-product">
          Product Name
        <button
          className="order__header-button"
          type="button"
        >
          <img src="img/sort.png" alt="sort" />
        </button>
      </li>
      <li className="order__header-item order__header-shape">
          Shape
      </li>
      <li className="order__header-item order__header-unit">
          Unit Price
      </li>
      <li className="order__header-item order__header-date">
          Date
      </li>
      <li className="order__header-item order__header-total">
          Subtotal
      </li>
      <li className="order__header-item order__header-comment">
          Comment
      </li>
      <li className="order__header-item order__header-status">
          Status
      </li>
    </ul>
  );
};
