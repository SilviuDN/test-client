import { Component } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import AuthService from '../../../services/auth.services'

class Signup extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            pwd: ''
        }
        this.authService = new AuthService()
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    handleFormSubmit = e => {

        e.preventDefault()

        const { email, pwd } = this.state

        this.authService
            .signup(email, pwd)
            .then(() => this.props.history.push('/logIn'))          // Redirect with props
            .catch(err => console.log(err))
    }


    render() {
        return (

            <Container>

                <Row>

                    <Col md={{ span: 4, offset: 4 }}>

                        <h1>Sign Up</h1>

                        <hr></hr>

                        <Form onSubmit={this.handleFormSubmit}>

                            <Form.Group controlId="email">
                                <Form.Label>email</Form.Label>
                                <Form.Control type="text" value={this.state.email} onChange={this.handleInputChange} name="email" />
                            </Form.Group>

                            <Form.Group controlId="pwd">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={this.state.pwd} onChange={this.handleInputChange} name="pwd" />
                            </Form.Group>

                            <Button style={{ marginTop: '20px', width: '100%' }} variant="dark" type="submit">Sign Up</Button>

                        </Form>

                        <hr></hr>

                        <Link to="/">
                            <Button variant="dark">Home</Button>
                        </Link>

                    </Col>
                </Row>

            </Container >

        )
    }
}


export default Signup