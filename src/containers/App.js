import React, { Component } from 'react';
import UserSearch from '../components/UserSearch/UserSearch';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gamerTag: '',
      gamerTagId: ''
    }
  }

  setGamerTag = (event) => {
    console.log(this.state.gamerTag);
    this.setState({gamerTag: event.target.value});
  }

  //getGamerTagId =

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <UserSearch setGamerTag={this.setGamerTag} />
      </div>
    );
  }
}

export default App;
