import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/searchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Search</h1>
          <div>
            <SearchBar />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
