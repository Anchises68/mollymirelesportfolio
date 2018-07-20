import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './home'
import Back from './navbar-components/back'
import About from './navbar-components/about'
import Awards from './navbar-components/awards'
import Contact from './navbar-components/contact'

const RoutePath = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/awards' component={Awards}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
  </main>
);

const Menu = () => (
  <header>
    <nav className="navbar navbar-expand-lg custom-color fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link"><Link to='/' className="link">Home</Link>
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link"><Link to='/about' className="link">About</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link"><Link to='/awards' className="link">Awards</Link> </a>
            </li>
            <li className="nav-item">
              <a className="nav-link"><Link to='contact' className="link">Contact</Link></a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </header>
);

const Navigation = () => (
  <div>
    <Menu />
    <RoutePath />
  </div>
)

export default Navigation
