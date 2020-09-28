import React, { useEffect, useState } from 'react';
import s from './CharacterList.module.scss';
import CharacterItem from '../CharacterItem/CharacterItem';
import Party from '../Party/Party';

const url = 'https://rickandmortyapi.com/api/character/';



const CharacterList = ({ value }) => {
    const [characters, setCharacters] = useState([]);
    const [morty, setMorty] = useState('');
    const [rick, setRick] = useState('');
    const [prevLink, setPrevLink] = useState(null);
    const [nextLink, setNextLink] = useState(null);
    const link = value ? `${url}?name=${value}` : url;


    let storageChar = localStorage.getItem('storageChar');

    if (storageChar) {
        storageChar = JSON.parse(storageChar)
    } else {
        storageChar = []
    }

    const getInfo = async (type) => {
        let url = link;
        if (type) {
            if (type === 'next') {
                url = nextLink
            }
            if (type === 'prev') {
                url = prevLink
            }
        }
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error);
            }
            const filterStorageCharacters = data.results.filter((element) => {
                const { id } = element;
                return !storageChar.some((el) => {
                    return el === id
                })
            })
            setCharacters(filterStorageCharacters)
            setPrevLink(data.info.prev)
            setNextLink(data.info.next)
        } catch (error) {
            console.error(error.message)
        }
    }

    const filterParty = (image, name) => {
        if (name.toLowerCase().includes('morty')) {
            setMorty(image)
        }
        if (name.toLowerCase().includes('rick')) {
            setRick(image)
        }
    }

    useEffect(() => {
        getInfo()
    }, [value])

    const deleteChar = (id) => {
        setCharacters((prevState) => prevState.filter((el) => el.id !== id))
        localStorage.setItem('storageChar', JSON.stringify(storageChar.concat(id)));
    }

    return (
        <>
            <div className={s.wrap}>
                {
                    characters?.map((el) => {
                        return <CharacterItem
                            key={el.id}
                            image={el.image}
                            characters={characters}
                            id={el.id}
                            name={el.name}
                            onDelete={deleteChar}
                            onClick={filterParty} />
                    })
                }
                <div className={s.row}>
                    <button onClick={() => getInfo('prev')} className={s.prev}>Prev</button>
                    <button onClick={() => getInfo('next')} className={s.next}>Next</button>
                </div>
            </div>
            <Party rick={rick} morty={morty} />
        </>
    )
}

export default CharacterList;
