
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import Shows from './components/Shows';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Shows/>
      </div>
    )
  }
}

