import React from 'react'
import Back from './back'

const Contact = ({ lastLocation }) => (
    <div className="modal-open modal-content">

      <div className="container modal-body mb-2">
        <h1 className="my-4 modal-header">Contact
          <small>Molly Mireles</small>
        </h1>
        <div className="row">
          <div className="col-md-6 mb-2 mt-3">

            <p className="errors">Please fill in all fields.</p>
            <form action="https://14igsc3a87.execute-api.us-east-1.amazonaws.com/prod/api" method="POST" id="contact-us-form">
              <div className="form-group">
                <label for="nameInputEmail1">Name</label>
                <input type="text" className="form-control" id="nameInputEmail1" name="name" placeholder="Full name"/>
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" name="email"
                placeholder="Enter email"/>
              </div>
              <div className="form-group">
                <label for="phoneInputEmail1">Phone number</label>
                <input type="text" className="form-control" id="phoneInputEmail1" name="phone"
                placeholder="Enter phone"/>
              </div>
              <div className="form-group">
                <label for="messageInputEmail1">Message</label>
                <textarea type="textarea" className="form-control" id="messageInputEmail1" name="message"
                placeholder="Enter message"></textarea>
              </div>
              <p className="thanks">Thanks!  We'll contact you soon.</p>
              <p className="sending">Sending...</p>
              <button type="submit" className="btn btn-primary g-recaptcha"
                data-sitekey="6LeeuGAUAAAAABDIBa6ACrGV1ZKXJhNweEqyPNN7"
              data-callback="onContctUsSubmit" data-badge="inline" >Submit</button>
            </form>
          </div>
        </div>
        <Back/>
      </div>
    </div>
  );

export default Contact
