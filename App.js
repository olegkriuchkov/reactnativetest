import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import MainPage from './components/MainPage';
import AsteriodPage from './components/AsteroidPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      asteroidData: {},
    };
  }

  setAsteroidData = (data) => {
    this.setState({
      asteroidData: data,
    });
  }

  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="home" initial component={(props) => <MainPage {...props} setAsteroidData={this.setAsteroidData}/>} title="Main Page" />
          <Scene key="asteroid" component={(props)=> <AsteriodPage {...props} asteroidData={this.state.asteroidData}/>} title="Asteroid page" />
        </Stack>
      </Router>
    );
  }
};

export default App;
