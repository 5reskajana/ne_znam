import React, {useState, useRef, useEffect} from "react";
import {useAuth} from "../contexts/AuthContext";
import Shared from './Shared'
import {Link, useNavigate} from 'react-router-dom'

import {collection, getDocs} from "firebase/firestore";
import {db} from '../firebase'

function Introduction() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const {currentUser, logout} = useAuth();
    const [cvs, setCVs] = useState();
    const [selectedCV, setSelectedCV] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const getCVs = async () => {
        const querySnapshot = await getDocs(collection(db, "cVS"));
        const cvs = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
        setCVs(cvs)
    }

    useEffect(() => {
        getCVs()
    }, []);


    return (
        <div className='cover' id='intro'>
            <Shared/>
            <div className='gradient-background'>

                <div className='mycvs'>
                    <h1>My CVs</h1>
                    <div>Select a CV and start editing</div>
                    <div className="cv-buttons">
                        <button className='create-new'>
                            <a href="/info">+<br/>Create a new CV</a>
                        </button>

                    </div>


                </div>
            </div>


        </div>
    )
}

export default Introduction;
