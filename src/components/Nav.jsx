import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";




const Nav = ({onSearch}) => {
    return (
      <div>
          <Link to="/About">About</Link>
          <Link to="/Home">Home</Link>
          <SearchBar onSearch={onSearch} />
      </div>
    );
 }

export default Nav;