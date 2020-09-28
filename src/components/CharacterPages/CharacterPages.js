import React, { useEffect, useState } from 'react';
import s from './CharacterPages.module.scss';
import { useHistory, useParams } from 'react-router-dom';
import Container from '../Container/Container';


const CahracterPages = () => {
    const params = useParams();
    const { id } = params
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    const history = useHistory()

    const [char, setChar] = useState([]);

    const getInfoCharacters = async () => {
        try {
            const res = await fetch(`${url}`);
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error);
            }
            setChar(data)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getInfoCharacters()
    }, [])
    return (
        <Container>
            <div>
                <div className={s.img}>
                    <img src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`} />
                </div>
                <div className={s.info}>
                    <div className={s.row}>
                        <h2> Name:</h2>
                        <p key={char.id}>{char.name}</p>
                    </div>
                    <div className={s.row}>
                        <h2>Status:</h2>
                        <p key={char.id}>{char.status}</p>
                    </div>
                    <div className={s.row}>
                        <h2>Species:</h2>
                        <p key={char.id}>{char.species}</p>
                    </div>
                    <div className={s.row}>
                        <h2>Gender:</h2>
                        <p key={char.id}>{char.gender}</p>
                    </div>
                </div>
            </div>
            <button onClick={() => history.goBack()}>Нaзад</button>
        </Container >
    )
}

export default CahracterPages;
