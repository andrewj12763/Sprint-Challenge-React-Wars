import React from 'react';
import './StarWars.css';

import Character from './Character';

export default function CharacterList(props) {

    return (
        <div className="character-list">
            {props.characters.map(singleChar => {
                return <Character character={singleChar} key={singleChar.name}/>;
            })}
        </div>
    );
}