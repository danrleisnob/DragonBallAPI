import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LinksDeAtividades from '../components/header/header';

export default function DragonBall() {
    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    async function getCharacters() {
        try {
            const response = await fetch('https://dragonball-api.com/api/characters?limit=100');
            const data = await response.json();
            console.log(data);
            if (data && Array.isArray(data.items)) {
                setCharacters(data.items);
            } else {
                console.error("Fetched data does not contain an items array:", data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCharacters();
    }, []);

    function handleSearchChange(event) {
        setSearchTerm(event.target.value);
    }

    const filteredCaracters = characters.filter(character =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <LinksDeAtividades />

            <div className='mb-4 flex items-center justify-center w-full'>
                <Link to="/dragonbal">
                    <button className='flex items-center justify-center text-xl h-12 w-40 rounded-xl text-white bg-sky-500 hover:bg-sky-700 mr-4'>Personagens</button>
                </Link>
                <Link to="/planetas">
                    <button className='flex items-center justify-center text-xl h-12 w-40 rounded-xl text-white bg-sky-500 hover:bg-sky-700 mr-4'>Planetas</button>
                </Link>
                <Link to="/transformacoes">
                    <button className='flex items-center justify-center text-xl h-12 w-40 rounded-xl text-white bg-sky-500 hover:bg-sky-700 mr-4'>Transformações</button>
                </Link>
                <Link to="/cronologia">
                    <button className='flex items-center justify-center text-xl h-12 w-40 rounded-xl text-white bg-sky-500 hover:bg-sky-700 mr-4'>Ordem cronológica</button>
                </Link>
            </div>

            <input type="text"
                placeholder='Pesquisar Personagens'
                className='flex mb-2 p-2 border rounded w-80 items-center justify-center'
                value={searchTerm}
                onChange={handleSearchChange}
            />

            {filteredCaracters.length > 0 ? (
                <div className='flex flex-wrap bg-slate-800 justify-center overflow-y-auto h-full'>
                    {filteredCaracters.map((character) => (
                        <div className='flex flex-col items-center justify-center w-64 h-auto m-4 p-4 bg-white shadow-md rounded' key={character.id}>
                            <img 
                                className='w-60 h-80 transition-transform duration-300 hover:scale-110 cursor-pointer' 
                                src={character.image} 
                                alt={character.name} 
                            />
                            <p className='font-bold mb-3 text-3xl text-amber-500'>{character.name}</p>
                            <p>Afiliação: {character.affiliation}</p>
                            <p>KI: {character.ki}</p>
                            <p>Ki Máximo: {character.maxKi}</p>
                            <p>Raça: {character.race}</p>
                            <p>Gênero: {character.gender}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading characters...</p>
            )}
        </div>
    );
}
