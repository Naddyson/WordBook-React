import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './client/App.js';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
