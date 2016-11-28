import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Li from './content';
import Count from './count';
import Todo from './todo';
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
ReactDOM.render(
  <Count />,
  document.getElementById('count')
);
ReactDOM.render(
  <Todo />,
  document.getElementById('todo')
);