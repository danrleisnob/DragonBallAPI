import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LinksDeAtividades from "../components/header/header";

export default function PlanetsDragon() {
    const [planets, setPlanets] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    async function getPlanets() {
        try {
            const response = await fetch('https://dragonball-api.com/api/planets?limit=30');
            const data = await response.json();
            console.log(data);
            if (data && Array.isArray(data.items)) {
                setPlanets(data.items);
            } else {
                console.error("Fetched data does not contain an items array:", data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Função para renderizar os components
    useEffect(() => {
        getPlanets();
    }, []);

    // Função para atualizar o termo de pesquisa
    function handleSearchChange(event) {
        setSearchTerm(event.target.value);
    }

    // Filtrando os planetas com base no termo de pesquisa
    const filteredPlanets = planets.filter(planeta =>
        planeta.name.toLowerCase().includes(searchTerm.toLowerCase())
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

            <input
                type="text"
                placeholder='Pesquisar planeta'
                className='flex mb-2 p-2 border rounded w-80 items-center justify-center'
                value={searchTerm}
                onChange={handleSearchChange}
            />
            
            {filteredPlanets.length > 0 ? (
                <div className='flex flex-wrap bg-slate-800 justify-center overflow-y-auto h-full'>
                    {filteredPlanets.map((planeta) => (
                        <div className='flex flex-col items-center justify-center w-64 h-auto m-2 p-4 bg-white shadow-md rounded' key={planeta.id}>
                            <img 
                                className='w-60 h-auto transition-transform duration-300 hover:scale-110 cursor-pointer' 
                                src={planeta.image} 
                                alt={planeta.name} 
                            />
                            <p className='font-bold text-3xl text-sky-900 mt-4 mb-4' >Planeta: {planeta.name}</p>
                            <p>Descrição: {planeta.description}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading Planets...</p>
            )}
        </div>
    );
}
