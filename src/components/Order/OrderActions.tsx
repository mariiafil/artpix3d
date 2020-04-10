import React, { FC, FormEvent, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

interface Props {
  setSortQuery: (query: string) => void;
  query: string;
}

const OrderActionsTemplate: FC<Props> = ({ setSortQuery, query }) => {
  const handleClick = (e: FormEvent<HTMLButtonElement>): void => {
    setSortQuery(e.currentTarget.name);
  };

  const [number, setNumber] = useState(20);

  const handleIncrement = () => {
    if (number <= 50) {
      setNumber(prev => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (number > 0) {
      setNumber(prev => prev - 1);
    }
  };

  return (
    <div className="order__actions">
      <div className="order__sort-bar">
        <button
          type="button"
          name="all"
          className={(query === 'all'
            ? 'order__sort-button order__sort-button--all active-sort'
            : 'order__sort-button order__sort-button--all')}
          onClick={e => handleClick(e)}
        >
            All
        </button>
        <button
          type="button"
          name="progress"
          className={(query === 'progress'
            ? 'order__sort-button order__sort-button--work active-sort'
            : 'order__sort-button order__sort-button--work')}
          onClick={e => handleClick(e)}
        >
            Work in progress
        </button>
        <button
          type="button"
          name="ready"
          className={(query === 'ready'
            ? 'order__sort-button order__sort-button--ready active-sort'
            : 'order__sort-button order__sort-button--ready')}
          onClick={e => handleClick(e)}
        >
            Ready
        </button>
        <button
          type="button"
          name="downloaded"
          className={(query === 'downloaded'
            ? 'order__sort-button order__sort-button--downloaded active-sort'
            : 'order__sort-button order__sort-button--downloaded')}
          onClick={e => handleClick(e)}
        >
            Downloaded
        </button>
      </div>
      <div className="order__show">
        <p className="order__show-title">Show</p>
        <div className="input-number">
          <span className="input-number__text">{number}</span>
          <div className="input-number__controls">
            <button
              type="button"
              className="input-number__button"
              onClick={handleIncrement}
            >
              <img src="img/up.png" alt="up" />
            </button>
            <button
              type="button"
              className="input-number__button"
              onClick={handleDecrement}
            >
              <img src="img/down.png" alt="down" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (
  state: {
      sortReducer: SortState;
    },
) => ({
  query: state.sortReducer.query,
});

const mapDispatchToProps = {
  setSortQuery: actions.setSortQuery,
};

export const OrderActions = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderActionsTemplate);
