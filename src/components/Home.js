import React, { Component } from 'react';
import { connect } from "react-redux";
import { getInfo } from "../actions/userAction";

class Home extends Component {

  componentDidMount() {
    this.props.getInfo();
  }

  render() {

    return (
      <div className="content">
        <div className="container">
          <p>Баланс {this.props.balance}</p>
          <p>Имя {this.props.name}</p>
          {Object.keys(this.props.stocks).map(key => <div key={key}>
            {'Акция ' + key + ', ' +
            'Цена: ' + this.props.stocks[key].price + ', ' +
            'Количество: ' + this.props.stocks[key].count}
            </div>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  balance: state.info.balance,
  name: state.info.name,
  stocks: state.info.stocks
});

export default connect(
  mapStateToProps,
  {getInfo}
)(Home);






















