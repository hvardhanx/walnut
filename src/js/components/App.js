import React, { Component } from 'react';
import Table from './Table'

class App extends Component {

  render() {
    return (
      <div className="app">
        <header>
          <h1>Walnut</h1>
            <div className="container">
              <button id="button"></button>
            </div>
        </header>
        <Table/>
      </div>
    );
  }
}

export default App;
