import React, { Component } from 'react';
import UserSearch from '../components/UserSearch/UserSearch';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gamerTag: '',
      gamerTagId: '',
      achievements: []
    }
  }

  setGamerTag = (event) => {
    this.setState({gamerTag: event.target.value});
  }

  getGamerTagId = async () => {
    await fetch(`/v2/xuid/${this.state.gamerTag}`, {
      method: 'get',
      headers: {
        'X-AUTH': '3a5eb14d1a580dc2d1a0e9b10b31fa5cc5958616',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(gTagId => {
      console.log(gTagId);
      this.setState({gamerTagId: gTagId});
    })
    .catch(err => {
      console.log("No gamertag found.");
    });
  }

  getAchievements = async () => {
    await this.getGamerTagId();
    fetch(`/v2/${this.state.gamerTagId}/xbox360games`, {
      method: 'get',
      headers: {
        'X-AUTH': '3a5eb14d1a580dc2d1a0e9b10b31fa5cc5958616',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(x360Ach => {
      console.log(x360Ach);
      //this.setState({gamerTagId: gTagId});
    })
    .catch(err => {
      console.log("No Xbox 360 achievements found.");
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Work in progress...
          </p>
        </header>
        <UserSearch setGamerTag={this.setGamerTag} getAchievements={this.getAchievements} />
      </div>
    );
  }
}

export default App;
