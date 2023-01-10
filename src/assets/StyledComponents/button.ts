import styled from "styled-components";
import { IButtonProps } from "../../components/Button/button";

const DivButton = styled.button`
    display: flex;
    flex-wrap: wrap;
    gap: .8rem;
    justify-content: center;
`;

const Botao = styled.button <IButtonProps>`
    display: inline-block;
    margin-right: .8rem;
    align-self: center;
    background: linear-gradient(#888888, #FFFFFF);
    border: none;
    border-radius: 12px;
    box-shadow: 3px 3px 3px #373737;
    color: #272626;
    cursor: pointer;
    font-size: 0.7rem;
    padding: .5rem;
    width: 5rem;
    height: 2rem;
    margin-top: .5rem;
    margin-bottom: 1rem;
    margin-left: .5rem;
    &:hover {
      transform: scale(1.05);
    }
    &:active {
      background-color: #C78C19;
      color: white;
    }
    
    ${ (props) => props.tema === "Primario" && `
      background: #a51b0b;
      color: white;
      padding: .5rem;
      margin-left: .5rem;
      margin-right: .8rem;
    `}
`;

  export {
    DivButton, 
    Botao
  }