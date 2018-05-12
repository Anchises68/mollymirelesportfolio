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

const workDetail = [
  {
    'title': "Strategic Marketing Campaigns",
    'info': "The marketing campaigns I have directed include research from a CRM resource, collaboration with graphic designers on design, and inclusion of initiatives from the public relations, social media, and web center teams, as well as advertising recommendations from a media buyer. The plans are customized based on data about my clients' services, their needs and the audiences to which they are appealing.",
    'href': "http://example",
    'images': {
      'img1': "",
      'img2': "",
      'img3': "",
      'desc': "marketing campaign image"

    },
  },
  {
    'title': "Events and Event Planning",
    'info': "I plan events of all sizes. I partner with my clients to coordinate targeted events, such as open houses and seminars, ensuring that I understand clients' expectations, with the intentions of exceeding them.  I have led planning committees for larger events, such as health fairs, community outreach events and fundraisers. My leadership skills include managing the event timeline, identifying resources needed, delegating responsibilities, inspiring committee member engagement, and skillfully handling unexpected issues. I enjoy working as part of a team to create a successful event.",
    'href': "http://example",
    'images': {
      'img1': "",
      'img2': "",
      'img3': "",
      'desc': "event planning image"

    },
  },
  {
    'title': "Communication",
    'info': "I produced the Ask Your Doctor medical talk radio show from 2002-2004. During that time, I produced 50 half-hour radio shows. I scouted and hired Dr. Gina Mohr, who co-hosted the show with Dr. Jim Keany. I scheduled the topics of the show, wrote the scripts, authored and was the voice for the commercials, edited the program and promoted it to listeners and to radio stations. Ask Your Doctor aired on the Inland Empire's number one radio station, KFRG 95.1 FM. After a strategic marketing and promotional campaign, Ask Your Doctor moved from a local level to a national level - airing on 24 radio stations across the nation by November 2003.",
    'href': "http://example",
    'images': {
      'img1': "",
      'img2': "",
      'img3': "",
      'desc': "communication image"

    },
  },
  {
    'title': "Social Media",
    'info': "In October 2016, I initiated Loma Linda University Health’s first Facebook live video chat with one of our physician specialists, which resulted in 17,400 video views and 644 comments. Based on that success, Loma Linda University Health (LLUH) leadership approved my proposal to produce a monthly Facebook live video chat series featuring our LLUH health experts discussing relevant topics for our online community.",
    'href': "http://example",
    'images': {
      'img1': "",
      'img2': "",
      'img3': "",
      'desc': "social media image"

    },
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
