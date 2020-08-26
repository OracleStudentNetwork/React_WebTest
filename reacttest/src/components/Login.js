import React from "react"
import {Form, Button} from 'react-bootstrap'
class Box extends React.Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target)
        console.log(data.get('user')); // reference by form input's `name` tag
        console.log(data.get('pw'));

    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });
  }
    render(){
        return(
        <div>
            <Form onSubmit={this.handleSubmit}>
    <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name = "user" />
    </Form.Group>
    <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name = "pw"/>
    </Form.Group>
    <Button variant="primary" type="submit">
        Submit
    </Button>
    </Form>
        </div>
        )
    }
}
export default Box;