import React, {useState} from 'react'
import {Link, Router} from "react-router-dom";


function Shared() {


    return (
        <div>
            <a href="/" className='logoo'>
                <div className="logoo">[FreeCV]</div>
            </a>
            <ul className='dots'>
                <li id="first">.</li>
                <li id="second">.</li>
                <li id="third">.</li>
                <li id="fourth">.</li>
            </ul>
        </div>
    )
}

export default Shared
