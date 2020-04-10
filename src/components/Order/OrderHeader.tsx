import React from 'react';

export const OrderHeader = () => {
  return (
    <ul className="table table-header">
      <li className="table__item table__item-photo" />
      <li className="table__item table__item-number">
        Product Name
        <button
          className="order__header-button"
          type="button"
        >
          <img src="img/sort.png" alt="sort" />
        </button>
      </li>
      <li className="table__item table__item-shape">
        Shape
      </li>
      <li className="table__item table__item-name">
        UnitPrice
      </li>
      <li className="table__item table__item-date">
        Date
      </li>
      <li className="table__item table__item-total">
        Subtotal
      </li>
      <li className="table__item table__item-comments">
        Comment
      </li>
      <li className="table__item table__item-status">
        Status
      </li>
    </ul>
  );
};
