import { useState,useEffect,useContext } from 'react'
import './style.css'
import Filtro from '../Filtro';
import { AppContext } from '../../Contexto/Contexto';
import { useNavigate } from "react-router-dom";

function Lista() {
  const { data, setData, tipoSeleccionado, setTipoSeleccionado } = useContext(AppContext);
  const [busqueda, setBusqueda] = useState('');
  const navigate = useNavigate();
  

 

  const handleTipoChange = (tipo) => {
    setTipoSeleccionado(tipo);
  };

  let resultados = data;

  if (busqueda.length >= 3 && isNaN(busqueda)) {
    resultados = data.filter(pokemon =>
      pokemon.name.toLowerCase().includes(busqueda.toLowerCase())
    );
  }
  

  return (
    <>
    <input
        type="text"
        placeholder="Buscar Pokémon"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="c-buscador"
      />
    <Filtro onTipoChange={handleTipoChange} />
    <section className='c-lista'>
    {resultados.map((pokemon, index) => (
      <div className='c-lista-pokemon'
      onClick={() => navigate(`/pokemon/${pokemon.name}`)}
      key={index}>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split("/")[6]}.png`} 
              alt={`Pokémon ${pokemon.name}`} width='auto' height='60' loading='lazy'
            />
        <p>{pokemon.name}</p>
      </div>
    ))}
  </section>
  </>
  )
}

export default Lista