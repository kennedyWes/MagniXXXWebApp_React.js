import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';

import Accordion from "../Accordion/Accordion";

import {
    Container, 
    MenuHome, 
    TitleMenu,
    TopicMenu,
    ItensMenu,
    AreaLogo,
    Logo,
    
} from "../../assets/StyledComponents/menu";

const Menu = () => {
    return (
        <MenuHome>
            <AreaLogo>
                <Logo />
            </AreaLogo>
            
            <TitleMenu>
                <TopicMenu>
                    <HomeIcon sx={{color:"white"}}></HomeIcon>
                    <Link to="/">HOME</Link>
                </TopicMenu>

                <TopicMenu>
                    <ApartmentIcon sx={{color:"white"}}></ApartmentIcon>
                    <Accordion titulo="Empresas"/>
                </TopicMenu>
                
                <TopicMenu>
                <PersonIcon sx={{color:"white", displayPrint:"flex"}}></PersonIcon>
                    <Accordion titulo="Utilizadores"/>
                </TopicMenu>
               
                <TopicMenu>   
                    <LoginIcon sx={{color:"white"}}></LoginIcon>           
                    <Link to="/signin">LOGIN</Link>        
                </TopicMenu>
            </TitleMenu>
        </MenuHome>
    )
}

export default Menu;