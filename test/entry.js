import React from 'react';
import ReactDOM from 'react-dom';

import Terminal from '../components/Terminal';

var elemDiv = document.createElement('div');
document.body.appendChild(elemDiv);
ReactDOM.render((
  <Terminal
    color="green"
    backgroundColor="black"
    barColor="black"
    style={{ fontWeight: 'bold', fontSize: '1em' }}
    watchConsoleLogging
  />
), elemDiv);
