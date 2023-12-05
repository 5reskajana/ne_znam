import Footer from "../Footer";
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import {
    MDBContainer,
    MDBCollapse,
    MDBNavbar,
    MDBNavbarToggler,
    MDBIcon,
    MDBBtn,
} from 'mdb-react-ui-kit';

export default function About() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showNavExternal3, setShowNavExternal3] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return <div className="about">
        <div className="hamburger-menu">
            <MDBNavbar>
                <MDBContainer fluid className="vertical">
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
        <div><h1 id="abt-top">About FreeCV</h1></div>

        <div><h2>The Story Behind</h2></div>
        <p className="story">
            When I started applying for jobs and projects, I put a lot of time and effort into my resume.
            After all, it is the first impression the hiring manager or project coordinator will get from me.
            I wanted to make sure it is a good one! Each application was unique for each position I applied for.
            When I was offered to choose a project topic for a website or an app and Resume tailoring was one of the
            options,
            I didn't hesitate and came up with FreeCV.
        </p>
        <div><h2>The Mission</h2></div>
        <p className="story">
            I know a lot of people struggle to create a CV, do not know how to write, and how to design one.
            I decided to create a platform to help you create a great resume for your needs.
            A resume to stand out from the crowd.
            My mission is to help you advance to the next round and get you a step closer to your desired job.
        </p>
        <div><h2>The Team?</h2></div>
        <p className="story">
            Well, it is only me. This is an academic project for the subject Fundamentals of Web design.
            I was learning when I started it and I am learning to this day as I am improving it.
            Thank you for your trust!<br/><br/>
            From the author,<br/>Jana Petreska.
        </p>
        <div className="futer">
            <Footer/>
            <div className="buttonToTop2">

                <a href="#abt-top">^</a>
            </div>

        </div>


    </div>
}