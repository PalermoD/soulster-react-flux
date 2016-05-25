//Require React 
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
require("../style.css");

class App extends React.Component {
  render() {
    return <h1>Hello</h1>
  }
}

ReactDOM.render(<App />);


// document.write(require('./content.js