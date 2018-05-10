import React from 'react';
import ReactDOM from 'react-dom';

console.log("loaded react dom");

class MessageBox extends React.Component {
  render() {
    return (
      <div>
        <h1>some shit</h1>

      </div>
    )
  }
}
ReactDOM.render(<MessageBox/>, document.getElementById('app'));
