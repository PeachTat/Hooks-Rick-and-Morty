import React from 'react';
import { Link } from 'react-router-dom';
import s from './CharacterItem.module.scss';

const CharacterItem = ({ image, onDelete, id, name, onClick }) => {
    return (
        <div className={s.wrap}>
            < div className={s.img} >
                <img src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`} onClick={() => onClick(image, name)} />
            </div >
            <button onClick={() => onDelete(id)}>Delete</button>
            <Link to={`/character/${id}`}>Открыть страницу персонажа</Link>
        </div >
    )
}

export default CharacterItem;
