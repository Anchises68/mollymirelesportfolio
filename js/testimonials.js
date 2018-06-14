import React from 'react';

const TESTIMONIALPATHS = [
  {
    'quote': '[Molly’s] interpersonal skills in dealing with a diverse and sometimes challenging group of individuals has been beyond reproach.',
    'name': "~ Garry FitzGerald, MD"
  },
  {
    'quote': '[Molly] cultivated positive relationships with our joint venture partners and was successful in obtaining their collateral-in-kind and financial contributions for joint marketing endeavors.',
    'name': "~ Maria Garcia, Director, Property Management"
  },
  {
    'quote': 'Molly is a thorough professional who gives 100% to any project she takes up.',
    'name': "~ Shaun Kinsey, Senior Employer Relations Specialist"
  },
  {
    'quote': 'As the producer for Ask Your Doctor, Molly was instrumental in creating a an engaging and informative show on a weekly bases.',
    'name': "~ James Keany, MD, President"
  },
  {
    'quote': 'Her passion for marketing and public relations is contagious, and I have learned so much from her about project management, promotions, and more.',
    'name': "~ Molly Ellis, Marketing and Communications Director"
  },
  {
    'quote': 'She excels with connecting with people and leading a team. Molly genuinely cares about the outcome of her work and has a focus on outcomes.',
    'name': "~ Kathryn Stiles, Director of Marketing and Communications"

  }

];

export class TestimonialContainer extends React.Component {

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
            <div className="testimonial">"{src.quote}"</div>
            <div className="testimonial-name">{src.name}</div>
          </div>
        </div>
        )
  }
}

export default TestimonialContainer;
