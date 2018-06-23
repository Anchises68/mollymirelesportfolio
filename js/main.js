import React from 'react';
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import Navigation from './menu';
import { HashRouter as Router } from 'react-router-dom'


const Main = () => (
  <Router>
    <Navigation />
  </Router>
);

render(<Main />, document.getElementById('app'));
