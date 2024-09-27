

import React, { Component } from 'react';
import { Col, Row, Card, Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import About from '../pages/admin'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uname: '',
            pass: '',
            email: '',
            Uname: '',
            password: '',
            showRegister: false,
            Register: [],
            Loggedin: []
        };
    }
    componentDidMount() {
        const str = localStorage.getItem('Register')
        const parsedArray = JSON.parse(str)
        this.setState({ Register: parsedArray != null ? parsedArray : [] })
        console.log(this.state.Register);
        
    }


    Register = () => {
        this.setState({ showRegister: !this.state.showRegister });
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleRegister = () => {
        debugger;
        let data = [];
        let obj = {
            uname: this.state.uname,
            pass: this.state.pass,
            email: this.state.email
        };
        if (this.state.Register.length > 0) {
            data = this.state.Register;
            data.push(obj);
        } else {
            data.push(obj);
        }
        if (this.state.uname.trim() === '', this.state.pass.trim() === '', this.state.email.trim() === '') {
            this.setState({ errors: true });
            
        }
        else {
            this.setState({ isActive: true, errors: false });
            alert("registerd succesfully!!!.. go back to login page")

        }
        this.setState({ Register: data },() => { this.Save() });
    }

    Save = () => {
        debugger;
        const myarray = this.state.Register;
        const jsonArray = JSON.stringify(myarray)
        localStorage.setItem('Register', jsonArray)
        debugger;
        const str = localStorage.getItem('Register')
        const parsedArray = JSON.parse(str)
        this.setState({ Register: parsedArray })
        console.log(this.state.Register);
        
    }


    handleLogin = () => {
        const { Uname, password } = this.state;

        // Retrieve the stored registrations from localStorage
        const storedUsers = localStorage.getItem('Register');
        const parsedUsers = storedUsers ? JSON.parse(storedUsers) : [];

        // Validate the login fields
        if (Uname.trim() === '' || password.trim() === '') {
            this.setState({ errors: true });
        } else {
            // Find a matching registered user
            const user = parsedUsers.find(
                (item) => item.uname === Uname && item.pass === password
            );

            if (user) {
                // If login is successful, save user to localStorage and redirect
                this.setState({ Loggedin: user, errors: false }, () => {
                    localStorage.setItem('LoggedInUser', JSON.stringify(user));
                    alert('Successfully logged in!'); // Optional success message
                    this.props.history.push('/Admin'); // Redirect to Admin page
                });
            } else {
                // If no matching user is found, display an error
                alert('Invalid username or password!');
            }
        }
    }






    render() {
        return (
            <Row className="d-flex justify-content-center align-items-center mt-4">
                <Col lg={5}>
                    <Card style={{
                        boxShadow: '1px 2px 9px #F5AAB9',
                        margin: '4em',
                        padding: '1em',
                    }}>
                        <Card.Title>
                            <h6 className='fw-bold fs-2 mt-4 title'>
                                {this.state.showRegister ? 'REGISTER FORM' : 'LOGIN FORM'}
                            </h6>
                        </Card.Title>
                        <Form className='form mt-3 mb-5 p-0'>
                            {this.state.showRegister ? (
                                <>
                                    <Form.Group className="mb-3 w-50 ms-5" >
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" name='uname' onChange={(e) => this.handleChange(e)} placeholder="Enter username" />
                                        {this.state.errors && <h2 className='fw-bold fs-6'><span className='text-danger'>*username required.</span></h2>}
                                    </Form.Group>
                                    <Form.Group className="mb-3 w-50 ms-5" >
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" name='email' onChange={(e) => this.handleChange(e)} placeholder="Enter email" />
                                        {this.state.errors && <h2 className='fw-bold fs-6'><span className='text-danger'>*email required.</span></h2>}
                                    </Form.Group>
                                    <Form.Group className="mb-3 w-50 ms-5" >
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name='pass' onChange={(e) => this.handleChange(e)} placeholder="Password" />
                                        {this.state.errors && <h2 className='fw-bold fs-6'><span className='text-danger'>*password required.</span></h2>}
                                    </Form.Group>
                                    <Button variant="danger" className="mt-2 ms-5" onClick={this.handleRegister}>
                                        REGISTER
                                    </Button>
                                    <Button variant="warning" className="mt-2 ms-2" onClick={this.Register}>
                                       BACK TO LOGIN
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Form.Group className="mb-3 w-50 ms-5" controlId="formBasicEmail">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" name='Uname' onChange={(e) => this.handleChange(e)} placeholder="Enter username" />
                                        {this.state.errors && <h2 className='fw-bold fs-6'><span className='text-danger'>*username required.</span></h2>}
                                    </Form.Group>
                                    <Form.Group className="mb-3 w-50 ms-5">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name='password' onChange={(e) => this.handleChange(e)} placeholder="Password" />
                                        {this.state.errors && <h2 className='fw-bold fs-6'><span className='text-danger'>*password required.</span></h2>}
                                    </Form.Group>
                                    <Button variant="danger" className="log mt-2" onClick={this.handleLogin}>
                                        LOGIN
                                    </Button>
                                    <Button variant="warning" className="mt-2 ms-3 underline" onClick={this.Register}>
                                        REGISTER
                                    </Button>
                                </>
                            )}
                        </Form>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default withRouter(Login);