import React from 'react'

function sendDataToLambda(e) {
      e.preventDefault();

      // Gets the values of each field in our form. This is the data we'll send to our Lambda function.
      var formEmail = document.querySelector('.form-email').value;
      var formSubject = document.querySelector('.form-subject').value;
      var formMessage = document.querySelector('.form-message').value;

      // This is the endpoint we created in our API Gateway. This is where we make our POST request, which calls our Lambda function.
      var endpoint = 'https://etvg7hrqf7.execute-api.us-east-1.amazonaws.com/prod/ContactFormLambda';

      // Remember those form values we just grabbed? We're going to put them into an object here.
      var body = {
        email: formEmail,
        subject: formSubject,
        message: formMessage
      }

      // Here, we instantiate our Request. This is a special object used by the Fetch API so it knows where to send data, what data to send, and how to send it.
      var lambdaRequest = new Request(endpoint, {
        method: 'POST',
        // Quick note: 'no-cors' mode is for development on localhost only!
        mode: 'no-cors',
        body: JSON.stringify(body)
      });

      // Call the Fetch API to make our request
      fetch(lambdaRequest)
        // This is where you can handle errors. This is just an example, so we won't cover that.
        .then(response => console.log(response))
        .catch(err => console.log(err));
    };

const ContactForm = () => {
  <form id="serverless-contact-form">
    <input type="text" name="email" placeholder="Email Address" className="form-email"/>
    <input type="text" name="subject" placeholder="Subject" className="form-subject"/>
    <textarea style={{display:'block', margin:'20px'}} rows='5' cols='40'  name="message" placeholder="Your message here..." className="form-message"></textarea>
    <input type="submit" name="submit" value="Submit" className="form-submit"/>
  </form>
};

export default ContactForm
