import React, { FC, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

interface Props {
  query: string;
  setSearchQuery: (query: string) => void;
}

const HeaderTemplate: FC<Props> = ({ query, setSearchQuery }) => {
  const news = 6;

  const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="header">
      <Link to="/" className="header__logo-link">
        <img className="header__logo" src="img/logo.png" alt="logo" />
      </Link>
      <div className="header__actions">
        <input
          className="header__search"
          type="text"
          placeholder="Type in to Search..."
          value={query}
          onChange={(e) => handleSearch(e)}
        />
        <div className="header__button-wrapper">
          <button className="header__news" type="button">
            <img src="img/notification.png" alt="notification" />
          </button>
          {(news > 0) && (
            <span className="header__news-number">{news}</span>
          )}
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (
  state: {
      searchReducer: SearchState;
    },
) => ({
  query: state.searchReducer.query,
});

const mapDispatchToProps = {
  setSearchQuery: actions.setSearchQuery,
};

export const Header = connect(
  mapStateToProps, mapDispatchToProps,
)(HeaderTemplate);
