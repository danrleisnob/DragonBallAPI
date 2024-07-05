import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LinksDeAtividades from "../components/header/header";

export default function Transformacoes() {
    const [transformacoes, setTransformacoes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    async function getTransformacoes() {
        try {
            const response = await fetch('https://dragonball-api.com/api/transformations');
            const data = await response.json();
            console.log(data);
            if (data && Array.isArray(data)) {
                setTransformacoes(data);
            } else {
                console.error("Fetched data is not an array:", data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTransformacoes();
    }, []);

    function handleSearchChange(event) {
        setSearchTerm(event.target.value);
    }

    const filteredTransformacoes = transformacoes.filter(transformacao =>
        transformacao.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col h-screen items-center">
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
                placeholder='Pesquisar Transformação'
                className='flex mb-2 p-2 border rounded w-80 items-center justify-center'
                value={searchTerm}
                onChange={handleSearchChange}
            />
            
            {filteredTransformacoes.length > 0 ? (
                <div className='flex flex-wrap bg-slate-800 justify-center'>
                    {filteredTransformacoes.map((transformacao) => (
                        <div className='flex flex-col items-center justify-center w-64 h-auto m-4 p-4 bg-white shadow-md rounded' key={transformacao.id}>
                            <img 
                                className='w-60 h-auto transition-transform duration-300 hover:scale-110 cursor-pointer' 
                                src={transformacao.image} 
                                alt={transformacao.name} 
                            />
                            <p className='font-bold mb-3 text-3xl text-red-700'>{transformacao.name}</p>
                            <p className="text-2xl">KI: {transformacao.ki}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading transformations...</p>
            )}
        </div>
    );
}
