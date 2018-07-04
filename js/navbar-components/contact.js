import React from 'react'
import Back from './back'
import FormErrors from './FormErrors'
import validator from 'validator'


class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        email: '',
        subject: '',
        message: '',
        formErrors: {email: ''},
        emailValid: false,
        formValid: false

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const target = evt.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value}, () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' format is not valid';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid
                  }, this.validateForm);
}

validateForm() {
  this.setState({formValid: this.state.emailValid});
}

errorClass(error) {
   return(error.length === 0 ? '' : 'has-error');
}

  handleSubmit(evt) {
    evt.preventDefault();
    let body = this.state;
    let endpoint = 'https://etvg7hrqf7.execute-api.us-east-1.amazonaws.com/prod/ContactFormLambda';
    console.log(this.state);
    let lambdaRequest = new Request(endpoint, {
      method: 'POST',
      // Quick note: 'no-cors' mode is for development on localhost only!
      mode: 'no-cors',
      body: JSON.stringify(body)
    });

    fetch(lambdaRequest)
      // This is where you can handle errors. This is just an example, so we won't cover that.
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div className="panel panel-default">

        </div>
        <div className="form-group ${this.errorClass(this.state.formErrors.email)}">
          <label>Email</label>
          <input onChange={this.handleChange} value={this.state.email} type="email" className="form-control form-email" name="email"></input>
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input onChange={this.handleChange}  value={this.state.subject} type="text" className="form-control form-subject" name="subject"></input>
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea onChange={this.handleChange} value={this.state.message} type="text" className="form-control form-message" name="message"></textarea>
        </div>
        <FormErrors formErrors={this.state.formErrors} />
        <button className="btn btn-primary" disabled={!this.state.formValid}>Submit</button>
      </form>
    );
  }
}

const Contact = ({ lastLocation }) => (
    <div className="modal-open">

      <div className="container modal-body mb-5 mt-3">
        <h1 className="my-4 modal-header">Contact
          <small>Molly Mireles</small>
        </h1>
        <Back/>
        <div className="row justify-content-center">

          <div className="col-md-6 mb-2 mt-3 ">
            <h5 className="mb-4">Feel free to contact me.  I will respond as soon as possible.</h5>

            <ContactForm />
          </div>

        </div>

      </div>

    </div>
  );

export default Contact
