import React from 'react';
import Chuck from './Chuck';
import "./Card.css"

const Card = ({ name, email, id }) => {

    return (

        <div className='tc bg-light-green dib br3 pa3 grow shadow-5 fl ma3 yes'>
            <img src={`https://robohash.org/${id}?180x180`} alt="img"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
            <Chuck/>
        </div>

    )

}

export default Card