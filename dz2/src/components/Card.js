import React from 'react';
import {useState} from "react";

function Card({ cardInfo }) {
    const [enter, setEnter] = useState(false)

    const mouseEnter = () => {
        setEnter(true)
    }

    const mouseLeave = () => {
        setEnter(false)
    }

    return (
        <div className='card' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <img className='cardImg' src='https://freesvg.org/img/abstract-user-flat-3.png' alt='User' />
            <h2 className='cardTitle'>{cardInfo.name}</h2>
            {enter && (
                <div className='cardDescription'>
                    <p><b>Username:</b> {cardInfo.username}</p>
                    <p><b>Email:</b> {cardInfo.email}</p>
                    <p><b>Phone:</b> {cardInfo.phone}</p>
                </div>
            )}
        </div>
    );
}

export default Card;
