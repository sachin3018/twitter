import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap';

const SignIn = () => {

    const login = (e) => {
        e.preventDefault();
        console.log("pressed");
    }

    return (
        <div className='row'>
            <div className='col-4'>
                &nbsp;
            </div>
            <div className='col-4 mt-5 mb-5'>
                    <Form onSubmit={login}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                </Form>
            </div>
            <div className='col-4'>
                &nbsp;
            </div>
        </div>
      );
}

export default SignIn;