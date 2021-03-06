import React, { Component } from 'react';
import UserSearch from '../components/UserSearch/UserSearch';
import AchList from '../components/AchList/AchList';
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
    await fetch(`https://xapi.us/v2/xuid/${this.state.gamerTag}`, {
      method: 'get',
      headers: {
        'X-AUTH': '3a5eb14d1a580dc2d1a0e9b10b31fa5cc5958616',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(gTagId => {
        this.setState({gamerTagId: gTagId});
    })
    .catch(err => {
      console.log("Error getting gamertag id.");
    });
  }

  getAchievementData = async (type) => {
    const resp = await fetch(`https://xapi.us/v2/${this.state.gamerTagId}/${type}games`, {
      method: 'get',
      headers: {
        'X-AUTH': '3a5eb14d1a580dc2d1a0e9b10b31fa5cc5958616',
        'Content-Type': 'application/json'
      }
    });

    const data = await resp.json();

    return data.titles;
  }

  getAchievements = async () => {
    // Reset state when executing new searches.
    if (this.state.gamerTagId) this.setState({gamerTagId: ''});
    let achList = [];
    await this.getGamerTagId();
    if (this.state.gamerTagId) {
      console.log('Gamertag found. Obtaining achievements...');

      await this.getAchievementData('xbox360').then(resp => {
        resp.forEach(game => {
          achList.push(game);
        })
      });

      await this.getAchievementData('xboxone').then(resp => {
        resp.forEach(game => {
          achList.push(game);
        })
      });

      this.setState({achievements: achList});

    }
    else {
      console.log('Gamertag not found. No gamertag id to use.')
    }
  }

  render() {
    const filteredGames = this.state.achievements.filter(game => game.currentGamerscore > 0);

    return (
      <div className="App">
        <h1>SEE YO CHEEVOS</h1>
        <UserSearch setGamerTag={this.setGamerTag} getAchievements={this.getAchievements} />
        {this.state.achievements.length > 0 ?
          <AchList achievements={filteredGames} /> :
          <div id="placeholder"></div>
        }
      </div>
    );
  }
}

export default App;
