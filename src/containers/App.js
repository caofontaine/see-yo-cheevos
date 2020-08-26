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
      // If response returns a 404, meaning gamertag not found to obtain gamertag id,
      // throw an error.
      if (gTagId.success === false) {
        throw new Error ('Gamertag not found.');
      }
      else {
        console.log(gTagId);
        this.setState({gamerTagId: gTagId});
      }

    })
    .catch(err => {
      console.log("Error getting gamertag id.");
    });
  }

  getAchievements = async () => {
    await this.getGamerTagId();
    if (this.state.gamerTagId) {
      console.log('Gamertag found. Obtaining achievements...');

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
        this.setState({achievements: x360Ach.titles});
        console.log(this.state.achievements);
      })
      .catch(err => {
        console.log("Error getting Xbox 360 achievements.");
      });
    }
    else {
      console.log('Gamertag not found. No gamertag id to use.')
    }
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
