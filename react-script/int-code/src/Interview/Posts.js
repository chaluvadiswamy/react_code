import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Posts() {
    const [characters, setCharacters] = useState([])
    const [query, setQuery] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
                setCharacters(data.results)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [query])

    return (
        <div>
            <div className="search">
                <input type="text"
                       placeholder={"Search Character"}
                       className={"input"}
                       onChange={event => setQuery(event.target.value)}
                       value={query}
                />
            </div>
            <div className="results">
                {characters.map(character => (
                    <div>
                        <img src={character.image} alt={character.name}/>
                        {character.name}
                    </div>
                ))}
            </div>
        </div>
    );
}
