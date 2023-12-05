import React, {useEffect, useState} from 'react'
import {HashLink} from 'react-router-hash-link';
import Card from '../components/Card'
import Footer from "../Footer";
import {Link} from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {
    MDBContainer,
    MDBCollapse,
    MDBNavbar,
    MDBNavbarToggler,
    MDBIcon,
    MDBBtn,
} from 'mdb-react-ui-kit';

export default function Home() {

    const [user, setUser] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [showNavExternal3, setShowNavExternal3] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {

                setUser(user);
            } else {

                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <>
            <div className="homepage">
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
                <h1 className="gradient" id="top">Your professional CV</h1>
                <h2 className="regular">tailored for free, within minutes</h2>
                {user ? (
                    <Link to="/create">
                        <button className="start-button">Start building a new CV</button>
                    </Link>
                ) : (
                    <Link to="/login">
                        <button className="start-button">Create a new CV</button>
                    </Link>
                )}
                <h1 id="features" className="features">Our features</h1>
                <div className='cards'>
                    <Card className='card'
                          title="Detailed sections"
                          body="Carefully drafted sections to help you organize and display all the useful information. Easily add, remove or
            ignore fields you do not find important."
                    />
                    <Card className='card'
                          title="Custom design"
                          body="Diverse options to customize your resume based on your preferences as well as your recruiter's requirements."
                    />
                    <Card className='card'
                          title="Share and Download"
                          body="Quick and easy download and share via email  options in PDF."
                    />
                </div>
                <Footer/>
                <div className="buttonToTop">

                    <a href="/#top" id='strelce'>^</a>
                </div>
            </div>


        </>

    )

}
