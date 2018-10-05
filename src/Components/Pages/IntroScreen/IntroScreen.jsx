import React, { Component } from 'react';
import './IntroScreen.scss';

class IntroScreen extends Component {
  render() {
    const { makeDecision, skip } = this.props;
    return (
      <div>
        <span className="skip" onClick={skip}>
          Skip
        </span>
        <div className="text-section-one">
          <p className="p-animation-run">
            Imagine that your friend decided to rewrite the core of minecraft.
          </p>
          <p className="p-animation-run">
            There were long hours of development and study of new technologies
            and languages, and now ...
          </p>
        </div>
        <div className="text-section-two">
          <p className="p-animation-run">
            Now there is a problem of creating items with custom
            characteristics.
          </p>
          <div className="with-button">
            <p className="p-animation-run">
              Manually write a lot of jsons for every item? Fantasize about
              explosive melon?
            </p>
            <button className="button-animated" onClick={makeDecision}>
              Yes, please?
            </button>
            <p className="p-tip">&larr; Button, you can press it</p>
          </div>
        </div>
      </div>
    );
  }
}
export default IntroScreen;
