import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles.js';
import './RootSlider.scss';
import IntroScreen from '../Pages/IntroScreen';
import ItemScreen from '../Pages/ItemScreen';

class RootSlider extends Component {
  state = {
    selectedScreen: 0
  };

  startupScreen = (
    <div style={{ backgroundColor: '#0095B7' }} className="loading-gif">
      <img
        src="https://media.giphy.com/media/I7aOr0srP7nxe/giphy.gif"
        alt="Loading, please, wait"
        style={{ height: 256, width: 256 }}
      />
    </div>
  );

  makeDecision = () => {
    this.setState({
      selectedScreen: 1
    });
  };

  skip = () => {
    this.setState({
      selectedScreen: 1
    });
  };

  render() {
    const { selectedScreen } = this.state;
    const { startupScreen, skip, makeDecision } = this;
    return (
      <AwesomeSlider
        startupScreen={startupScreen}
        cssModule={AwsSliderStyles}
        selected={selectedScreen}
      >
        <div className="wrapper-uncentered">
          <IntroScreen makeDecision={makeDecision} skip={skip} />
        </div>
        <div className="wrapper">
          <ItemScreen />
        </div>
        <div data-src="https://caferati.me/images/series/bojack-0.png">
          skip1
        </div>
        <div>skip2</div>
        <div>skip3</div>
      </AwesomeSlider>
    );
  }
}

export default RootSlider;
