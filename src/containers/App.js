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
            Work in progress...
          </p>
        </header>
        <UserSearch setGamerTag={this.setGamerTag} />
      </div>
    );
  }
}

export default App;
