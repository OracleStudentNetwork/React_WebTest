import React from "react"
import {Form, Button} from 'react-bootstrap'
import Googlesignin from './Googlesignin'
// class Box extends React.Component {
//     constructor() {
//       super();
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleSubmit(event) {
//       event.preventDefault();
//       const data = new FormData(event.target);
  
//       console.log(data.get('email')); // reference by form input's `name` tag
//       console.log(data.get('username'));
//       console.log(data.get('birthdate'));

//       fetch('/api/form-submit-url', {
//         method: 'POST',
//         body: data,
//       });
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label htmlFor="username">Enter username</label>
//           <input id="username" name="username" type="text" />
  
//           <label htmlFor="email">Enter your email</label>
//           <input id="email" name="email" type="email" />
  
//           <label htmlFor="birthdate">Enter your birth date</label>
//           <input id="birthdate" name="birthdate" type="text" />
  
//           <button>Send data!</button>
//         </form>
//       );
//     }
//   }
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
    <Googlesignin/>
        </div>
        )
    }
}
export default Box;