import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PieReact from './echart';
class App extends Component {
  render() {
	  const data = [
    {value: 1, name: "是"},
    {value: 2, name: "否"}
	]
	  
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		<PieReact data={data} />,
      </div>
    );
  }
}

export default App;
