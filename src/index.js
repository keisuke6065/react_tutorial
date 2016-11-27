import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Li from './content';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <h1>title</h1>,
  document.getElementById('sample')
);

ReactDOM.render(
  <Li />,
  document.getElementById('content')
);