import logo from './logo.svg';
import './App.css';
import React,{ Component } from 'react';
import greet from'./components/greet.js';
class App extends Component {
  render(){
  return (
    <div className="App">
     <greet/>
    </div>
  );
}
}

export default App;
