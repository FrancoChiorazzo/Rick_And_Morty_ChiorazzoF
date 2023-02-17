import styled from "styled-components";
import { useState } from "react";

const SearchButton = styled.button`
gradient: 
border: none;
margin: 1%; 
background-color: rgba(210, 210, 210, 0.35);
font-family: Verdana;
color: white;
`
const SearchBox = styled.div`
display: ;
`

function SearchBar({onSearch}) {
   
   const [character, setCharacter] = useState("")

   const handleChange = (event) => {
      setCharacter(event.target.value)
   }
   
   
   return (
      <SearchBox>
         <input 
            type='search'
            placeholder="Busca tu Personaje"
            value={character}
            onChange={handleChange}/>

      <SearchButton onClick={() => onSearch(character)}>Agregar</SearchButton>
      </SearchBox>
   );    
}

export default SearchBar;