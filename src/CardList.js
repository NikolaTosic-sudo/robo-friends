import React from 'react';
import Card from "./Card";
import {robots} from "./robots";

const CardList = () => {

    const cardsArray = robots.map((user, i) => {
        return <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    })

    return (

        <div className="flex">
            {cardsArray}
        </div>
    )

}

export default CardList