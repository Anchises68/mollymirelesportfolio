import React from 'react';
import ReactDOM from 'react-dom';

const TESTIMONIALPATHS = [
  
  'I have found [Molly] to be efficient and reliable – a true professional.',
  'Among her strengths, Molly utilizes exceptional creativity and sound business principles.',
  'Molly is a thorough professional who gives 100% to any project she takes up.',
  'As the producer for Ask Your Doctor, Molly was instrumental in creating a an engaging and informative show on a weekly bases.',
  'She excels with connecting with people and leading a team. Molly genuinely cares about the outcome of her work and has a focus on outcomes.'
];

class TestimonialContainer extends React.Component {

  constructor(props) {
  super(props);

    this.state = { currentQuote: 0};
    this.interval = null;
    this.nextQuote = this.nextQuote.bind(this);
  }

  nextQuote() {

    let current = this.state.currentQuote;
    let next = ++current % TESTIMONIALPATHS.length;
    this.setState({currentQuote: next});
    }

  componentDidMount() {
    this.interval = setInterval(this.nextQuote, 5000);
    }

  componentWillUnmount() {
     clearInterval(this.interval);
  }

  render() {
    let src = TESTIMONIALPATHS[this.state.currentQuote];
    return (
      <div className="row">
        <div className="col-xl mb-5">
          <div className="testimonial">"{src}"</div>
        </div>
      </div>
    )
  }
}
ReactDOM.render(<TestimonialContainer/>, document.getElementById('testimonial'));
