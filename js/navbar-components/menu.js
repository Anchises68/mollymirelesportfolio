import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './home'
import About from './about'
import Awards from './awards'
import Contact from './contact'



const Menu = () => (
  <header>
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#"></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link">Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link"><Link to='/about'>About</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link"><Link to='/awards'>Awards</Link> </a>
              </li>
              <li className="nav-item">
                <a className="nav-link"><Link to='contact'>Contact</Link></a>
              </li>
            </ul>

            <hr/>

            <Route path='/about' component={About}/>
            <Route path='/awards' component={Awards}/>
            <Route path='/contact' component={Contact}/>
          </div>
        </div>
      </nav>
    </Router>
  </header>
);

export default Menu
