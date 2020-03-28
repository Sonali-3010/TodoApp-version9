import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// let element = <h1>Hello World!</h1>
// ReactDOM.render(element, document.getElementById('root'));
serviceWorker.unregister();