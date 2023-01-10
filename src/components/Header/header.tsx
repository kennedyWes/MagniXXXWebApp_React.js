import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/searchBar";
import { 
  Container, 
  Nav, 
  AreaSearch,
  Search,
  TitleHeader,
} from "../../assets/StyledComponents/header";

const Header = () => {
  return (
    <Container>
      <SearchBar />
    
      
      <Nav>
        <Link to="/signin">LOGIN</Link>
      </Nav>
    </Container>
  );
};

export default Header;
