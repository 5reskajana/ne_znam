import React, {useState, useRef} from "react";
import {Card, Button, Alert} from "react-bootstrap";
import {useAuth} from "../contexts/AuthContext";
import {Link, useNavigate} from "react-router-dom";
import Shared from "./Shared";
import Footer from "../Footer";

export default function ShareDownload() {
    const [error, setError] = useState("");
    const {currentUser, logout} = useAuth();
    const navigate = useNavigate();
    const fileInputRef = useRef(null);


    async function handleLogout() {
        setError("")

        try {
            await logout()
            navigate.push("/login")
        } catch {
            setError("")
        }
    }

    const handleOpenMailClient = () => {
        const subject = encodeURIComponent('Check out my CV');
        const body = encodeURIComponent('I am sending my CV.');
        const mailtoLink = `mailto:?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
        fileInputRef.current.click();
    };

    const handleFileInputChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            // Handle attaching the selected file to the email
        }
    };

    return (
        <div className="cover" id="sd">
            <Shared/>
            <div className="coverr" id='so'>
                <div className="centre">
                    <h1 className="text-center mb-5 mt-5" id='tnx'>Thank you for using FreeCV!</h1>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {currentUser ? (
                        <>
                            <button onClick={handleOpenMailClient} className="btn btn-primary mt-3"
                                    id='share-button'>Share via mail
                            </button>
                            <label htmlFor="fileInput" id='attach-button'>
                                Attach a File
                            </label>
                            <input
                                type="file"
                                id="fileInput"
                                ref={fileInputRef}
                                style={{display: 'none'}}
                                onChange={handleFileInputChange}
                            />


                            <Link to="/create" className="btn btn-primary mt-3" id='start-again'>
                                Start again
                            </Link>
                            <div className="w-100 text-center mt-2">
                                <button onClick={handleLogout} className="btn btn-primary" id='top-right'>
                                    Log out
                                </button>
                            </div>
                        </>
                    ) : (

                        <p>Please <Link to="/login">log in</Link> to create your CV.</p>
                    )}

                </div>
            </div>
            <div className="futer" id='futer2'>
                <Footer/>
                <div className="buttonToTop2">

                </div>

            </div>


        </div>
    );
}
