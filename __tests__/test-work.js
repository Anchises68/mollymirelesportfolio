import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Work, { WorkBubble } from '../js/work';
import Enzyme from 'enzyme';
Enzyme.configure({adapter: new Adapter()});

const mollyWorkBubble = [
  {
    'name': "Strategic Marketing Campaigns",
    'href': "http://example.com",
    'image': {
      'desc': "marketing image",
      'src': "img/marketingcampaign.jpg"
    }
  }
]

describe("Photo component", () => {
  let component = shallow(<Work work={mollyWorkBubble} />);

  it("Should be a 'span' element", () => {
    expect(component.type()).toEqual('span');
  });

  it("Should contain as many children as there are images", () => {
    expect(component.find("WorkBubble").length).toEqual(mollyWorkBubble.length);
  })
});
