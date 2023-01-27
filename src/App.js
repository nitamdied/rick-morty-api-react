//import logo from './logo.svg';
import rickImg from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);
  const restApi = async () =>{
    const api= await fetch('https://rickandmortyapi.com/api/character');
    const characterApi= await api.json();
    setCharacters(characterApi.results);
    //console.log(characterApi);
    console.log("characters",characters);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters?(
          <Characters characters={characters} setCharacters={setCharacters} ></Characters>

        ):
        <>
          <img src={rickImg} alt="Rick & Morty" className='img-home' />
          <button type="" onClick={restApi} className="btn-search">Buscar Personajes</button>
        </>
        }
      </header>
    </div>
  );
}

export default App;
