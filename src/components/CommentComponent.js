import { Control, Form, Errors, actions } from 'react-redux-form';

  handleSubmit(values) {
    console.log('Current State is: ' + JSON.stringify(values));
    alert('Current State is: ' + JSON.stringify(values));
    this.props.resetFeedbackForm();
  }

  <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                  
  </Form>