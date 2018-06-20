import React from 'react'
import Back from './back'

const Contact = ({ lastLocation }) => (
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

        </div>
      </div>
    </div>
    <Back/>
  </div>

);

export default Contact
