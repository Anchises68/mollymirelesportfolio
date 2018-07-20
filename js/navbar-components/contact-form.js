import React from 'react'
import FormErrors from './FormErrors'
import ThankYou from './thankyou'

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        email: '',
        subject: '',
        message: '',
        formErrors: {email: '', subject: '', message: ''},
        emailValid: false,
        subjectValid: false,
        messageValid: false,
        formValid: false,
        thanksResponse: {
          type: undefined,
          body: undefined
        }
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
    let subjectValid = this.state.subjectValid;
    let messageValid = this.state.messageValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' format is not valid';
        break;
      case 'subject':
        subjectValid = value.length > 0;
        fieldValidationErrors.subject = subjectValid ? '' : ' field cannot be empty';
      case 'message':
        messageValid = value.length > 0;
        fieldValidationErrors.message = messageValid ? '' : ' has to contain more than 50 characters';
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    subjectValid: subjectValid,
                    messageValid: messageValid
                  }, this.validateForm);
}

validateForm() {
  this.setState({formValid: this.state.emailValid && this.state.subjectValid && this.state.messageValid});
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

      this.setState ({
        email: '',
        subject: '',
        message: '',
        thanksResponse: {
          type: "alert alert-secondary",
          body: "Thank you for your contacting me.  I will respond as soon as possible."
        }
      });
  }

  render() {
    let rsp = this.state.thanksResponse;
    return (
      <section>
        <form onSubmit={this.handleSubmit} >
          <div className="panel panel-default">
          </div>
          <div className="form-group ${this.errorClass(this.state.formErrors.email)}">
            <label>Email</label>
            <input onChange={this.handleChange} value={this.state.email} type="email" className="form-control form-email" name="email"></input>
          </div>
          <div className="form-group ${this.errorClass(this.state.formErrors.subject)}">
            <label>Subject</label>
            <input onChange={this.handleChange}  value={this.state.subject} type="text" className="form-control form-subject" name="subject"></input>
          </div>
          <div className="form-group ${this.errorClass(this.state.formErrors.message)}">
            <label>Message</label>
            <textarea onChange={this.handleChange} value={this.state.message} type="text" className="form-control form-message" name="message"></textarea>
          </div>
          <FormErrors formErrors={this.state.formErrors} />
          <button className="btn btn-secondary" disabled={!this.state.formValid}>Submit</button>
        </form>
        <ThankYou thanks={this.state.thanksResponse}/>

      </section>
    );
  }
};

export default ContactForm
