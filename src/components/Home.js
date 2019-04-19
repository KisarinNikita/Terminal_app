import React, { Component } from 'react';
import { connect } from "react-redux";
import { getUserStocks } from "../actions/userAction";
import { getAllStocks } from "../actions/userAction";
import { Redirect } from "react-router-dom";
import { refreshToken } from "../actions/authAction";

class Home extends Component {

  componentDidMount() {
    this.props.getAllStocks();
    this.props.getUserStocks();
  }

  render() {
    const { stocks, items, isAuthenticated, refresh } = this.props;
    if (!isAuthenticated) {
      return <Redirect to="/login"/>;
    }

    if (refresh) {
        this.props.refreshToken();
        this.props.getAllStocks();
        this.props.getUserStocks();
    }

    const userStocks = stocks.map((k, index) =>
      <div className="stock-item"
           key={index}>
        <p>{k.name}</p>
        <p className="stock-item__price">{k.price.toFixed(2)} руб.</p>
        <p className="stock-item__count">Кол-во: {k.count}</p>
        <button>Продать</button>
      </div>);

    const allStocks = items.map((k, index) =>
      <div className="stock-item"
           key={index}>
        <p>{k.name}</p>
        <p className="stock-item__price">{k.price.toFixed(2)} руб.</p>
        <button>Купить</button>
      </div>);

    return (
      <div className="content">
        <div className="container">
          <div className="stock-row">

            <div className="sidebar">
              <h2 className="sidebar__title">Портфель {this.props.name}</h2>
              <p className="sidebar__label">Баланс {this.props.balance}</p>
              { userStocks }
            </div>

            <div className="sidebar">
              <h2 className="sidebar__title">Все акции</h2>
              { allStocks }
            </div>

          </div>
        </div>


      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  refresh: state.info.refresh,
  balance: state.info.balance,
  name: state.info.name,
  stocks: state.info.stocks,
  items: state.info.items
});

export default connect(
  mapStateToProps,
  { getUserStocks, refreshToken, getAllStocks }
)(Home);






















