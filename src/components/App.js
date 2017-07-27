import React, { Component } from 'react';
import '../styles/App.css';
import {Button, Icon} from 'react-materialize'

import GetImageForm from './../containers/GetImageForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GetImageForm />
      </div>
    );
  }
}

export default App;
