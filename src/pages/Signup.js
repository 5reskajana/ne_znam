import React, {useRef, useState} from "react"
import {Form, Button, Card, Alert} from "react-bootstrap"
import {useAuth} from "../contexts/AuthContext"
import {Link, useNavigate} from "react-router-dom"
import {HashLink} from 'react-router-hash-link';
import {
    MDBContainer,
    MDBCollapse,
    MDBNavbar,
    MDBNavbarToggler,
    MDBIcon,
    MDBBtn,
} from 'mdb-react-ui-kit';

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false);
    const [showNavExternal3, setShowNavExternal3] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate("/create")
        } catch {
            setError("Failed to create an account")
        }

        setLoading(false)


    }


    return (
        <>
            <div className="coverr">
                <div className="hamburger-menu">
                    <MDBNavbar>
                        <MDBContainer fluid className="vertical" id="hide">
                            <MDBNavbarToggler
                                className='ms-auto'
                                type='button'
                                data-target='#navbarToggleExternalContent'
                                aria-controls='navbarToggleExternalContent'
                                aria-expanded='false'
                                aria-label='Toggle navigation'
                                onClick={() => setShowNavExternal3(!showNavExternal3)}
                            >
                            </MDBNavbarToggler>

                        </MDBContainer>
                    </MDBNavbar>

                    <MDBCollapse show={showNavExternal3}>
                        <div className='vertical' id='move'>
                            <HashLink to="/#features" className='hitem'>
                                Features
                            </HashLink>
                            <Link to="/about" className='hitem'>
                                About
                            </Link>
                            <Link to="/login" className='hitem'>
                                Log In
                            </Link>
                            <Link to="/signup" className='hitem'>
                                Sign Up
                            </Link>
                        </div>
                    </MDBCollapse>

                </div>
                <div className="left">
                    <Card className="login-card">
                        <Card.Body>
                            <h2 className="text-center mb-4">Sign Up</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required/>
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required/>
                                </Form.Group>
                                <Form.Group id="password-confirm">
                                    <Form.Label>Password Confirmation</Form.Label>
                                    <Form.Control type="password" ref={passwordConfirmRef} required/>
                                </Form.Group>
                                <Button disabled={loading} className="w-100" type="submit">
                                    Sign Up
                                </Button>
                            </Form>

                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Already have an account? <Link to="/login">Log In</Link>
                    </div>
                </div>
            </div>
        </>
    )
}