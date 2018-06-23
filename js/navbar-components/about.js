import React from 'react'
import Back from './back'

const About = ({ lastLocation }) => (

    <div className="modal-open modal-content">
      <div className="container modal-body mb-2">
        <h1 class="my-4 modal-header">About me
          <small>Molly Mireles</small>
        </h1>
        <div className="row">
          <div className="col-md-6 mb-5">
            <img className="img-fluid" src="img/MollyMireles.jpg" alt="Molly Mireles Image"/>
          </div>
          <div className="col-md-6 mb-2 mt-3">
            <h4>With 15 years experience, I have developed expertise in marketing, event planning, client relations and communications. I am a strong communicator, presenter and listener. In annual surveys, my clients expressed that my work for them has helped them achieve their goals.
              I stayed with Loma Linda University Health as a dedicated marketing manager because I sought out and was granted opportunities to learn and grow. In 2011, I took the initiative to manage the marketing efforts for a multiple-organization collaboration, Highland Springs Medical Plaza (HSMP). I worked with a team to create two events that would benefit the community – a health fair and a food distribution for underserved individuals. Those two initial events achieved successful turn-outs and continue to occur annually, garnering positive media attention. Additionally, I conducted a two-year marketing and media campaign (2013-2015) that focused on LLUH’s services at HSMP. According to research conducted by a marketing consultant, market share increased from 19 percent in 2013 to 28 percent in 2015.
              My career goals include continuing to learn and grow in the areas of marketing, public relations and communications. In 2014, I took a Fundamentals of Public Relations course at UCLA Extension with instructor Jeff Duclos and earned an A+ in the class. The final project of the class was to present a promotional plan for an app for an actual client, LA Metro. My team elected me to lead the presentation, resulting in LA Metro's choice of our proposal.
            I am an enthusiastic and experienced leader, as well as a reliable team player. I strive to deliver the best outcomes for my clients and the organization for which I work.</h4>
          </div>
        </div>
        <Back/>
      </div>
    </div>
);

export default About
