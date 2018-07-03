import React from 'react'
import Back from './back'

const Awards = ({ lastLocation }) => (
    <div className="modal-open">
      <div className="container modal-body mb-2">
        <h1 class="my-4 modal-header">Accomplishments and Awards
          <small>Molly Mireles</small>
        </h1>
        <div className="row mt-1">
          <div className="col-md-12"><h2>Skills & Expertise</h2>
            <ul>
              <li>I create and coordinate marketing and communications plans for my clients, including a medical plaza in Beaumont, California, 23 outpatient physician groups (primary care and medical specialties with 67 subspecialties) and 968 physicians.</li><br/>
              <li>I initiate and manage an average of 300 design projects a year.</li><br/>
              <li>I have planned and coordinated more than 50 events, including open houses, health fairs and fundraisers.</li><br/>
            </ul>
          </div>
          <div className="col-md-12"><h2>Accomplishments</h2>
            <ul>
              <li>In 2017, I successfully rebranded Highland Springs Medical Plaza as Loma Linda University Health Beaumont-Banning utilizing a strategic communication campiagn.</li><br/>
              <li>In 2016, I earned a Gold Award from Healthcare Public Relations and Marketing Association (HPRMA) as event planner of the 2015 Loma Linda University PossAbilities Sports Luncheon fundraising event.</li><br/>
              <li>In October 2016, I initiated Loma Linda University Health’s first Facebook live video chat with one of our physician specialists, which resulted in 17,400 video views and 644 comments. Based on that success, health system leadership approved my proposal to produce a monthly video chat series featuring Loma Linda University Health experts discussing relevant topics and answering viewer questions.</li><br/>
              <li>I directed a strategic marketing campaign for Highland Springs Medical Plaza from 2013-2015. Market share during that time increased from 19% in 2013 to 28% in 2015.</li><br/>
              <li>As editor of A Healthy Tomorrow community newsletter, I was awarded the Public Relations Society of America’s Polaris Award for Best Newsletter in 2003.</li><br/>
              <li>As producer of the Ask Your Doctor medical talk radio show, I utilized strategic promotion to take the local radio show to a national level. Within a year of taking over as producer, the show was airing on 24 stations nationwide.</li>
            </ul>
          </div>
          <div className="col-md-12"><h2>Awards</h2>
            <ul>
              <li>Vistion Implementation Award</li><br/>
              <li>AIM Award</li><br/>
              <li>Public Relations Society of America Award</li><br/>
            </ul>
          </div>
          <div className="col-md-12">
            <Back/>
          </div>
        </div>
      </div>
    </div>
);

export default Awards
