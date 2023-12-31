import React from 'react'
import './Card.css'

function Card({title, body}) {
    return (
        <div className='card-container'>
            <div className='card-title'>
                <h3>{title}</h3>
            </div>
            <div className='card-body'>
                <p className='features-text'>{body}</p>
            </div>
        </div>
    )
}

export default Card
