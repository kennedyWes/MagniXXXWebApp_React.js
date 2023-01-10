import styled from "styled-components";
import LogoImage from "../Imagens/magniLogo1.png";

const Container = styled.div`
    display: flex;
    gap: 1rem;
    width: 20%;
    flex-basis: 14%;
    height: auto;
    margin-top: -6.5rem;
    border: .5px solid;
`;

const AreaLogo = styled.div`
  align-items: center;
  justify-content: center;
  width: 10%;
  padding: -5px;
`;

const Logo = styled.img.attrs({
  src: LogoImage,
})`
  width: 5rem;
  height: 75px;
  background-color: #fff;
  border-radius: 15px;
  margin-bottom: 3rem;
  background: linear-gradient(#888888, #FFFFFF);
  display: inline-block;
`;

const MenuHome = styled.aside`
    display: flex;
    flex-direction: column;
    width: 15rem;
    background: #a51b0b;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
`;

const TitleMenu = styled.div`
`;

const TopicMenu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: left;
    flex-wrap: wrap;
    gap: .5rem;
    border: 0vh;
    margin-left: -2.5rem;
    margin-top: .8rem;
    margin-bottom: 0.7rem;    
    & > a{
        color: white;
        text-decoration: none;
      }
        & > a:hover {
          transform: scale(1.1);
          color: #C78C19;
        }
        & > a:active {
          color: #C78C19;
          text-decoration: underline;
        }
`;

const ItensMenu = styled.li`
    margin-left: 1rem;
    font-size: 12px;
    margin-top: .5rem;
    color: white;
`;


export {
    Container, MenuHome, AreaLogo, Logo, TitleMenu, TopicMenu, ItensMenu, 
};