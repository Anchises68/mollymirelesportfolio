import React from 'react';
import ReactDOM from 'react-dom';
import Work from './work';
import TestimonialContainer from './testimonials';

const mollyWorkBubble = [
  {
    'name': "Strategic Marketing Campaigns",
    'href': "http://example.com",
    'image': {
      'desc': "marketing image",
      'src': "img/marketingcampaign.jpg"
    }
  },
  {
    'name': "Events and Event Planning",
    'href': "http://example.com",
    'image': {
      'desc': "event image",
      'src': "img/events.jpg"
    }
  },
  {
    'name': "Communication",
    'href': "http://example.com",
    'image': {
      'desc': "communications image",
      'src': "img/communications.jpg"
    }
  },
  {
    'name': "Social Media",
    'href': "http://example.com",
    'image': {
      'desc': "social media image",
      'src': "img/socialmedia.jpg"
    }
  }
];

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Work work={mollyWorkBubble}/>
        <TestimonialContainer />
      </React.Fragment>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
