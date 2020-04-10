import React, { FC, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

interface Props {
  order: Order[];
  searchQuery: string;
  sortQuery: string;
}

const OrderTableTemplate: FC<Props> = ({
  order,
  searchQuery,
  sortQuery,
}) => {
  const showOrder = useMemo(() => {
    const searchQueryToLowerCase = searchQuery.toLowerCase();
    const sort = sortQuery === 'all' ? '' : sortQuery;

    return order.filter(item => item.statusId.includes(sort)
    && (item.name.includes(searchQueryToLowerCase)
        || item.status.toLowerCase().includes(searchQueryToLowerCase)
        || item.address.toLowerCase().includes(searchQueryToLowerCase)
        || String(item.number).includes(searchQuery)
        || item.name.toLowerCase().includes(searchQueryToLowerCase)
        || item.shape.toLowerCase().includes(searchQueryToLowerCase)));
  }, [order, searchQuery, sortQuery]);

  return (
    <div className="order__table">
      {showOrder.map(item => (
        <ul className="table" key={item.id}>
          <li className="table__item table__item-photo">
            <label className="table__label" htmlFor={`${item.id}`}>
              <input
                id={`${item.id}`}
                type="checkbox"
                className="table__checkbox"
              />
              <span className="table__checkmark" />
            </label>
            <div className="table__photos">
              {item.photos.map(photo => (
                <img src={photo} alt="order" className="photo" key={photo} />
              ))}
            </div>
            <p className="table__paragraph">
                x
              {item.photos.length}
            </p>
          </li>
          <li className="table__item table__item-number">
            <Link
              to="/product"
              className="table__number-link"
            >
              {`Order#${item.number}`}
            </Link>
          </li>
          <li className="table__item table__item-shape">
            {item.shape}
          </li>
          <li className="table__item table__item-name">
            <p className="table__paragraph">{item.name}</p>
            <p className="table__paragraph address">{item.address}</p>
          </li>
          <li className="table__item table__item-date">
            {item.date}
          </li>
          <li className="table__item table__item-total">
            {`${item.total}$`}
          </li>
          <li className="table__item table__item-comments">
            <Link to="/comments">
              <img src="img/chat.png" alt="comment" />
            </Link>
          </li>
          <li className={`table__item table__item-status ${item.statusId}`}>
            {item.status}
          </li>
          <li className="table__item table__item-edit">
            <Link to="/edit">
              <img src="img/edit.png" alt="edit" />
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

const mapStateToProps = (
  state: {
      orderReducer: OrderState;
      searchReducer: SearchState;
      sortReducer: SortState;
    },
) => ({
  order: state.orderReducer.order,
  searchQuery: state.searchReducer.query,
  sortQuery: state.sortReducer.query,
});

export const OrderTable = connect(
  mapStateToProps,
)(OrderTableTemplate);
