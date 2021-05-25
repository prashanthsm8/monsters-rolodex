import React from 'react';
import './Card-List.Component.css';
import {Card} from '../card/Card.Component'

export const CardList = props =>{
return(<div className='card-list'>
            {
            props.monsters.map(monster=>
            <Card key={monster.id} monster={monster}/>)
            }
    </div>);

};

