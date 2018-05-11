import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import ExampleWork, { TestimonialContainer } from '../js/testimonials';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


const TESTIMONIALPATHS = [

  'I have found [Molly] to be efficient and reliable – a true professional.',
  'Among her strengths, Molly utilizes exceptional creativity and sound business principles.'
];

describe("TestimonialContainer component", () => {
  let component = shallow(<TestimonialContainer src={TESTIMONIALPATHS} />);

  it("Should be a 'div' element", () => {
    expect(component.type()).toEqual('div');
  });
});
