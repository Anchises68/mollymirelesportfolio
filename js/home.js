import React from 'react'
import Work from './work'
import TestimonialContainer from './testimonials'
import WorkInfo from './work-info'

const Home = () => (
<section>
  <div className="container">
    <h1 className="my-4">Mireles
      <small> Communications</small>
    </h1>

    <div className="row">
      <div className="col-md-8">
        <img className="img-fluid" src="img/MollyMireles.jpg" alt="Molly Mireles Image"/>
      </div>

      <div className="col-md-4">
        <h3 className="my-3"></h3>
        <img src="img/flowerlogo-small.png" className="logo"/>
        <p></p>
        <h1 className="my-3">Molly Mireles</h1>
        <ul className="remove-bullets">
          <li><h4>Strategic Marketing</h4></li>
          <li><h4>Communications</h4></li>
          <li><h4>Event Planning</h4></li>
        </ul>
      </div>
    </div>

  </div>
  <div className="container">
    <Work work={WorkInfo}/>
  </div>
  <div className="container">
    <TestimonialContainer />
  </div>
</section>
);

export default Home
