import React, { Component } from 'react';

const Euro = ({ amount }) => <p>Euro: {(amount * 0.86)}</p>;
const Pound = ({ amount }) => <p>Pound: {(amount * 0.76)}</p>;

const App = () => (
  <WithAmount>
    <Euro />
    <Pound />
  </WithAmount>
);
// eslint-disable-next-line no-unused-vars
class WithAmount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 10,
    };
  }

  onIncrement = () => {
    this.setState((state) => ({ amount: state.amount + 1 }));
  };

  onDecrement = () => {
    this.setState((state) => ({ amount: state.amount - 1 }));
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        <span>US Dollar: {this.state.amount} </span>

        <button type="button" onClick={this.onIncrement}>
          +
        </button>
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { amount: this.state.amount })
        )}
      </div>
    );
  }
}

export default App;