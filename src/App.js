import React, {Component} from 'react';
import {extendObservable,observable, action} from  'mobx';
import DevTools from 'mobx-react-devtools';
import {Provider} from 'mobx-react';

import logo from './logo.svg';
import './App.css';
import TimerView from './TimerView.js';

const appState = observable({
    timer: 0
});

appState.resetTimer = action('resetTimer', () => {
    appState.timer = 0;
    appStore.colorIndex = 1 - appStore.colorIndex;
});

setInterval(action('tick', () => {
    appState.timer += 1;
}), 1000);

// const appStore = { a: observable({ b: { c: 'purple' } }) };

class AppStore {
  constructor() {
    extendObservable( this, {
      colorIndex : 0,
      get color(){
        return ['green', 'red'][this.colorIndex];
      }
    });
  }
}

const appStore = new AppStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <DevTools />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Provider appStore={appStore}>
          <TimerView appState={appState} />
        </Provider>
      </div>
    );
  }
}

export default App;
