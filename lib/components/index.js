import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super();

    this.state = {
      answer: 42,
    };
  }

  asyncFunc = (value) => {
    return Promise.resolve(value);
  };

  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunc(37)
    });
  }

  render() {
    return (
      <h2>Hello class Components == { this.state.answer }</h2>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
