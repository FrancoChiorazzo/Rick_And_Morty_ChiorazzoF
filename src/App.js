import './App.css'
import Cards from './components/Cards.jsx'
import { useState } from 'react';
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom';
import About from './components/About';




function App () {
  const [characters, setCharacters] = useState([]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
}

const onClose = (id) =>{
  setCharacters( characters.filter(character => character.id !== id))
}
  return (
    <div className='App'>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
          path="/Home"
          element ={
            <Cards
              onClose = {onClose}
              characters={characters}
            />
          }/>

        <Route path="/About" element ={<About />} />
        <Route path="/Detail/:detailId" element />      
      </Routes>
        
  


    </div>
  )
}

export default App
