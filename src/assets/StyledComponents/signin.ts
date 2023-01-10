import styled from "styled-components";
import LogoImage from "../Imagens/magniFinance.png";

const Container = styled.div`
    display: flex;
    gap: .5rem;
    margin-top: 1.2rem;
`;

const MainSignin = styled.main`
    display: flex;
    flex: 1;
    border: 1px solid #EEEEEE;
    height: 75vh;
    width: 100%;
    padding: 1rem;
    border-radius: 12px;
    box-shadow: 10px 10px 10px #373737;
`;


const BackgroundImage = styled.div`
  position: absolute;
  background-image: url(${LogoImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 25rem;
  width: 24rem;
  margin-left: 26rem;
  margin-top: .5rem;
  margin-bottom: 2.5rem;
  display: inline-block;
  justify-content: space-between;
  align-self: center;
`;

const Login = styled.div`
  display: inline-block;
  justify-content: center;
  gap: 1.4rem;
  height: 60vh;
  width: 30%;
  margin-top: 2rem;
  margin-left: 2rem;
  border-radius: 1rem;
  background: linear-gradient(#292d33, #DDDDDD);
  //background: linear-gradient(#DDDDDD, #292d33);
`;

const Register = styled.div`
  background-color: #292d33;
  display: inline-block;
  height: 60vh;
  width: 30%;
  margin-top: 2rem;
  margin-left: 25rem;
  border-radius: 1rem;
  background: linear-gradient(#292d33, #DDDDDD);
`;

const Title = styled.h1`
  color: #fff;
  margin-top: 2.5rem;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  font-family: "Italianno", sans-serif;
`;

const InputArea = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  font-family: "Robotto", sans-serif;
  font-size: .8rem;
  padding: .5rem;
  width: 17rem;
  height: 1.8rem;
  margin-top: .7rem;
`

const ButtonArea = styled.div`
  display: flex;
  width: 82%;
  justify-content: flex-start;
`;

const ButtonSignIn = styled.button`
  background-color: #a51b0b;
  color: #a51b0b;
  border: none;
  padding: 14px;
  font-size: 0.6em;
  border-radius: 2px;
`;

const RecoveryPassaword = styled.p`
  color: #fff;
  font-size: 0.8rem;
  text-align: center;
  margin-left: 20px;
  margin-right: 70px;
`;

export {
  Container,
  MainSignin,
  BackgroundImage,
  Login,
  Register,
  Title,
  InputArea,
  Input,
  ButtonSignIn,
  ButtonArea,
  RecoveryPassaword,
};
