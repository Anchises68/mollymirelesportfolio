import React from 'react'
import Back from './back'

const Awards = ({ lastLocation }) => (
  <div className={"modal-background modal--open"}>
    <div className="my-2">
    </div>
    <div className="container">
      <h1 class="my-4 modal-header">
        <small>Molly Mireles</small>
      </h1>
      <div className="row">
        <div className="col-md-6 mb-5">
          <img className="img-fluid" src="" alt=""/>
        </div>
        <div className="col-md-12 mb-5 mt-3">
          <ul>
            <li>In 2017, I successfully rebranded Highland Springs Medical Plaza as Loma Linda University Health Beaumont-Banning utilizing a strategic communication campiagn.</li>
            <li>In 2016, I earned a Gold Award from Healthcare Public Relations and Marketing Association (HPRMA) as event planner of the 2015 Loma Linda University PossAbilities Sports Luncheon fundraising event.</li>
            <li>In October 2016, I initiated Loma Linda University Health’s first Facebook live video chat with one of our physician specialists, which resulted in 17,400 video views and 644 comments. Based on that success, health system leadership approved my proposal to produce a monthly video chat series featuring Loma Linda University Health experts discussing relevant topics and answering viewer questions.</li>
            <li>I directed a strategic marketing campaign for Highland Springs Medical Plaza from 2013-2015. Market share during that time increased from 19% in 2013 to 28% in 2015.</li>
            <li>As editor of A Healthy Tomorrow community newsletter, I was awarded the Public Relations Society of America’s Polaris Award for Best Newsletter in 2003.</li>
            <li>As producer of the Ask Your Doctor medical talk radio show, I utilized strategic promotion to take the local radio show to a national level. Within a year of taking over as producer, the show was airing on 24 stations nationwide.</li>
          </ul>
        </div>
      </div>
    </div>
    <Back/>
  </div>
);

export default Awards
