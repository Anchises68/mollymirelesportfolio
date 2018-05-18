import React from 'react';


export class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'menuOpen': false
    };

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.openMenu.bind(this);
  }

  openMenu(evt) {
    this.setState({
      'menuOpen': true
    });
  }

  closeMenu(evt) {
    this.setState({
      'menu': false
    });
  }
  render() {
    let modalClass = this.props.open ? 'modal-open' : 'modal-closed';
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#"></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={ (evt) => this.props.openMenu }>About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={ (evt) => this.props.openMenu }>Awards</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={ (evt) => this.props.openMenu }>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
