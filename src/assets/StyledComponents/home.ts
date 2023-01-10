import styled from "styled-components";
import ImgHome from "../../assets/Imagens/magniFinance.png";


const Container = styled.div`
    display: flex;
    gap: .5rem;
    margin-top: 1.2rem;
`;

const MainHome = styled.main`
    flex: 1;
    border: 1px solid #EEEEEE;
    height: 75vh;
    width: 10rem;
    padding: 1rem;
    border-radius: 12px;
    //box-shadow: 10px 10px 10px #373737;
`;

const Img = styled.img.attrs({
    src: ImgHome,
  })`
    margin-top: 5rem;
    width: 40rem;
    margin-left: 18rem;
    height: 20rem;
`;

export {
    Container, MainHome, Img
};
