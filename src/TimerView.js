import React from 'react';
import {observer, inject} from 'mobx-react';

const TimerView = inject('appStore')(observer(
  ({ appState:{timer, resetTimer}, appStore:{color} }) => {
    return <button style={{color}} onClick={resetTimer}>Seconds passed: {timer}</button>;
  }
));

export default TimerView;