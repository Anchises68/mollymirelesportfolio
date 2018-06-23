import React from 'react'
import Back from './back'

const Contact = ({ lastLocation }) => (
    <div className="modal-open modal-content">

      <div className="container modal-body mb-2">
        <h1 class="my-4 modal-header">Contact
          <small>Molly Mireles</small>
        </h1>
        <div className="row">
          <div className="col-md-6 mb-2 mt-3">
            <h1>Contact form goes here</h1>
          </div>
        </div>
        <Back/>
      </div>
    </div>
    );

export default Contact
