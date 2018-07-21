import React from 'react';
import { configure, shallow } from 'enzyme';
import WorkModal from '../js/work-modal';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const WorkInfo = {

  'name': "Strategic Marketing Campaigns",
  'info': "The marketing campaigns I have directed include research from a CRM resource, collaboration with graphic designers on design, and inclusion of initiatives from the public relations, social media, and web center teams, as well as advertising recommendations from a media buyer. The plans are customized based on data about my clients' services, their needs and the audiences to which they are appealing.",
  'href': "http://example.com",
  'image': {
    'desc': "marketing image",
    'src': "img/marketingcampaign.jpg",
    'src1': "img/campaign3.png",
    'src2': "img/campaign2.png",
    'src3': ""
  },
  'column_1': {
    'h4': "Cosmetic Laser Clinic Campaign:",
    'list': [
      "Created website, updated regularly",
      "Direct mail to customized mailing list",
      "Printed pieces to distribute to patients",
      "Participation in community events",
      "Social media campaign",
      "Email campaign",
      "Return on Investment: 1,100%"

    ]

  },
  'column_2': {
    'h4': "Primary Care Campaign:",
    'list': [
      "Ad on intranet",
      "Articles in e-newsletter and organization’s newspaper",
      "Booth at annual Benefits Fairs",
      "Posters around organization",
      "Flyers to employees"

    ]
  },

  'column_3': {
    'h4': "External Marketing:",
    'list': [
      "Direct mail to relevant audiences",
      "Social media campaign",
      "Ads in local publications",
      "Participation in community events",
      "Seminars about services",
      "1,348 new patients in 2014"

    ]

   }
  }

describe("WorkModal modal", () => {
  let component = shallow(<WorkModal work={WorkInfo} open={false} />);
  let openComponent = shallow(<WorkModal work={WorkInfo} open={true} />);
  let anchors = component.find("button");
  let images = component.find("img");
  let mockCloseModalFn = jest.fn();
  let unList = component.find("ul");

  it("Should contain a single 'button' element", () => {
    expect(anchors.length).toEqual(1);
  });

  it("Should contain four 'ul' elements", () => {
    expect(unList.length).toEqual(3);
  });

  it("Should contain three 'img' elements", () => {
    expect(images.length).toEqual(3);
  });

});
