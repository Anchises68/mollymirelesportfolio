import React from 'react';
import ReactDOM from 'react-dom';

class TestimonialBox extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="col-xl mb-5">
          <div class="testimonial">
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." --Dr. Alex Mireles Ph.D.
          </div>
        </div>
      </div>
    )
  }
}
ReactDOM.render(<TestimonialBox/>, document.getElementById('testimonial'));
