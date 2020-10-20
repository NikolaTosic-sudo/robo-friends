import React from 'react';
import Chuck from '../Containers/Chuck';

const Card = ({ name, email, id }) => {

    return (

        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
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