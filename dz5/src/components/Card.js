import React from 'react';

function Card({ cardInfo }) {
    return (
        <div className='card'>
            <img className='cardImg' src='https://freesvg.org/img/abstract-user-flat-3.png' alt='User' />
            <h2 className='cardTitle'>{cardInfo.name}</h2>
            <div className='cardDescription'>
                <p><b>Username:</b> {cardInfo.username}</p>
                <p><b>Email:</b> {cardInfo.email}</p>
                <p><b>Phone:</b> {cardInfo.phone}</p>
            </div>
        </div>
    );
}

export default Card;
