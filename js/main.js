import React from 'react';
import ReactDOM from 'react-dom';
import Work from './work';
import TestimonialContainer from './testimonials';
import Menu from './navbar-components/menu';

const workDetail = [
  {
    'name': "Strategic Marketing Campaigns",
    'info': "The marketing campaigns I have directed include research from a CRM resource, collaboration with graphic designers on design, and inclusion of initiatives from the public relations, social media, and web center teams, as well as advertising recommendations from a media buyer. The plans are customized based on data about my clients' services, their needs and the audiences to which they are appealing.",
    'href': "http://example.com",
    'image': {
      'desc': "marketing image",
      'src': "img/marketingcampaign.jpg",
      'src1': "img/campaign1.png",
      'src2': "img/campaign2.png",
      'src3': "img/campaign3.png"
    },
    'column_1': {
      'h4': "Cosmetic Laser Clinic Campaign:",
      'li1': "Created website, updated regularly",
      'li2': "Direct mail to customized mailing list",
      'li3': "Printed pieces to distribute to patients",
      'li4': "Participation in community events<",
      'li5': "Social media campaign<",
      'li6': "Email campaign",
      'li7': "Return on Investment: 1,100%"
    },
    'column_2': {
      'h4': "Primary Care Campaign:",
      'li1': "Ad on intranet",
      'li2': ">Articles in e-newsletter and organization’s newspaper",
      'li3': "Booth at annual Benefits Fairs",
      'li4': "Posters around organization",
      'li5': "Flyers to employees",
      'li6': "",
      'li7': ""
    },
    'column_3': {
      'h4': "External Marketing:",
      'li1': "Direct mail to relevant audiences",
      'li2': "Social media campaign",
      'li3': "Ads in local publications",
      'li4': "Participation in community events",
      'li5': "Seminars about services",
      'li6': "1,348 new patients in 2014",
      'li7': ""
    }
  },
  {
    'name': "Events and Event Planning",
    'info': "I plan events of all sizes. I partner with my clients to coordinate targeted events, such as open houses and seminars, ensuring that I understand clients' expectations, with the intentions of exceeding them.  I have led planning committees for larger events, such as health fairs, community outreach events and fundraisers. My leadership skills include managing the event timeline, identifying resources needed, delegating responsibilities, inspiring committee member engagement, and skillfully handling unexpected issues. I enjoy working as part of a team to create a successful event.",
    'href': "http://example.com",
    'image': {
      'desc': "event image",
      'src': "img/events.jpg",
      'src1': "img/events1.png",
      'src2': "img/events2.png",
      'src3': ""
    },
    'column_1': {
      'h4': "2015 Fundraising Event",
      'li1': "For this – our most successful fundraiser to date – I initiated contact with the speaker, professional surfer Bethany Hamilton, and coordinated the speaker contract. As lead of the planning committee, I directed the design for the pieces and the promotional campaign. I was also the speaker liaison the day of the event.",
      'li2': "We raised four times what we spent hosting this event, and exceeded our clients' expectations. The event garnered positive media exposure through newpaper articles in the San Bernardino SUN and Redlands Daily Facts newspapers.  This event also won the Gold Award from the Healthcare Public Relations & Marketing Association (HPRMA).",
      'li3': "",
      'li4': "",
      'li5': "",
      'li6': "",
      'li7': ""
    },
    'column_2': {
      'h4': "2015 Community Health Fair",
      'li1': "I led the planning committee and directed event promotion for the community health fair at Highland Springs Medical Plaza, which featured 14 health screenings and 36 exhibitors.",
      'li2': "More than 1,000 people attended this event according to staff counts. The Record Gazette newspaper featured the event in an article on the front page.",
      'li3': "",
      'li4': "",
      'li5': "",
      'li6': "",
      'li7': ""
    },
    'column_3': {
      'h4': "Sixth Annual Food Sharing Event",
      'li1': "I led the planning committee for the sixth annual food distribution on Friday, November 20, 2016 at Highland Springs Medical Plaza in Beaumont, CA. For this event, we partnered with Side by Side Humanitarian Food Bank to provide underserved families with groceries for the Thanksgiving holiday.",
      'li2': "We provided groceries to 610 families. The local newspaper, the Record Gazette, featured the event on the front page. I wrote a press release about the event, which was picked up by Channel 7 News. I liaised with the Channel 7 reporter and arranged for an interview with the Highland Springs Medical Plaza administrator.",
      'li3': "",
      'li4': "",
      'li5': "",
      'li6': "",
      'li7': ""
    }
  },
  {
    'name': "Communication",
    'info': "I produced the Ask Your Doctor medical talk radio show from 2002-2004. During that time, I produced 50 half-hour radio shows. I scouted and hired Dr. Gina Mohr, who co-hosted the show with Dr. Jim Keany. I scheduled the topics of the show, wrote the scripts, authored and was the voice for the commercials, edited the program and promoted it to listeners and to radio stations. Ask Your Doctor aired on the Inland Empire's number one radio station, KFRG 95.1 FM. After a strategic marketing and promotional campaign, Ask Your Doctor moved from a local level to a national level - airing on 24 radio stations across the nation by November 2003.",
    'href': "http://example.com",
    'image': {
      'desc': "communications image",
      'src': "img/communications.jpg",
      'src1': "img/communication1.png",
      'src2': "",
      'src3': ""
    },
    'column_1': {
      'h4': "",
      'li1': "",
      'li2': "",
      'li3': "",
      'li4': "",
      'li5': "",
      'li6': "",
      'li7': ""
    },
    'column_2': {
      'h4': "",
      'li1': "",
      'li2': "",
      'li3': "",
      'li4': "",
      'li5': "",
      'li6': "",
      'li7': ""
    },
    'column_3': {
      'h4': "",
      'li1': "",
      'li2': "",
      'li3': "",
      'li4': "",
      'li5': "",
      'li6': "",
      'li7': ""
    }
  },
  {
    'name': "Social Media",
    'info': "In October 2016, I initiated Loma Linda University Health’s first Facebook live video chat with one of our physician specialists, which resulted in 17,400 video views and 644 comments. Based on that success, Loma Linda University Health (LLUH) leadership approved my proposal to produce a monthly Facebook live video chat series featuring our LLUH health experts discussing relevant topics for our online community.",
    'href': "http://example.com",
    'image': {
      'desc': "social media image",
      'src': "img/socialmedia.jpg",
      'src1': "img/socialmedia1.png",
      'src2': "",
      'src3': "img/socialmedia2.png"
    },
    'column_1': {
      'h4': "",
      'li1': "",
      'li2': "",
      'li3': "",
      'li4': "",
      'li5': "",
      'li6': "",
      'li7': ""
    },
    'column_2': {
      'h4': "",
      'li1': "",
      'li2': "",
      'li3': "",
      'li4': "",
      'li5': "",
      'li6': "",
      'li7': ""
    },
    'column_3': {
      'h4': "",
      'li1': "",
      'li2': "",
      'li3': "",
      'li4': "",
      'li5': "",
      'li6': "",
      'li7': ""
    }
  }
];

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <Work work={workDetail}/>
        <TestimonialContainer />
      </React.Fragment>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
