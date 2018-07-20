import React from 'react'
import Back from './back'
import ContactForm from './contact-form'

const Contact = ({ lastLocation }) => (
    <div className="modal-open">
      <div className="container modal-body mb-5 mt-3">
        <h1 className="my-4 modal-header">Contact
          <small>Molly Mireles</small>
        </h1>
        <Back/>
        <div className="row justify-content-center">
          <div className="col-md-6 mb-2 mt-3 ">
            <h5 className="mb-4">Feel free to contact me</h5>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );

export default Contact
