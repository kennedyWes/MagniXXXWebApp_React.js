import styled from "styled-components"

const ContainerAdd = styled.div`
    display: flex;
    gap: .5rem;
    margin-top: 1.2rem;
    margin-left: 1rem;
`;

const MainAdd = styled.main`
    flex: 1;
    border: 1px solid;
    height: 75vh;
    width: 75rem;
    padding: 1rem;
    box-shadow: 10px 10px 10px #373737;
`;

const TitleAdd = styled.h1`
    margin-top: 2rem;
    text-align: center;
`;

const FormAdd = styled.div`
    border: 1px solid #EEEEEE;
    width: 65rem;
    margin-left: 6rem;
    margin-bottom: 2rem;
    padding-left: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 12px;
    box-shadow: 10px 10px 10px #373737;
`

const LabelAdd = styled.label`
    font-weight: bold;
    align-items: center;
    margin-right: 1rem;
`;

const InputAdd = styled.input`
    gap: 1rem;
    width: 19rem;
    margin-top: .5rem;
    margin-left: -.4rem;
    padding: 1rem;
    height: 2rem;
    margin-right: 1rem;
    border: 1px solid #EEEEEE;
    border-radius: 12px;
`;

const InputAdd2 = styled.input`
    gap: 1rem;
    width: 28rem;
    margin-top: .5rem;
    height: 2rem;
    margin-right: 4rem;
    margin-left: -.2rem;
    padding: 1rem;
    border: 1px solid #EEEEEE;
    border-radius: 12px;
`;

const InputAdd3 = styled.input`
    gap: 1rem;
    width: 21rem;
    margin-top: .5rem;
    height: 2rem;
    margin-right: .7rem;
    margin-left: -.5rem;
    padding: 1rem;
    border: 1px solid #EEEEEE;
    border-radius: 12px;
`;

const InputAdd4 = styled.input`
    gap: 1rem;
    width: 14rem;
    margin-top: .5rem;
    height: 2rem;
    margin-right: 18rem;
    padding: 1rem;
    border: 1px solid #EEEEEE;
    border-radius: 12px;
    
`;

const InputAdd5 = styled.input`
    gap: 1rem;
    width: 20rem;
    margin-top: .5rem;
    height: 2rem;
    margin-right: 2rem;
    margin-left: -.5rem;
    padding: 1rem;
    border: 1px solid #EEEEEE;
    border-radius: 12px;
`;

const InputAdd6 = styled.input`
    gap: 1rem;
    width: 20rem;
    margin-top: .5rem;
    height: 2rem;
    margin-right: 1.5rem;
    padding: 1rem;
    border: 1px solid #EEEEEE;
    border-radius: 12px;
`;

const Nav = styled.nav`
    display: flex;
    padding: 20px;
    justify-content: space-evenly;
    margin-left: 51rem;
    color: #000;
    list-style: none;
    align-items: center;
    gap: 2.2rem;
      & > a{
        color: #000;
        text-decoration: none;
      }
        & > a:last-child {
          background: #a51b0b;
          color: white;
          padding: .8rem;
          margin-right: .8rem;
          margin-left: 80rem;
          border-radius: 12px;
          border: none;
          box-shadow: 7px 7px 7px #373737;
          transform: scale(1.03);
        }
        & > a:hover {
          transform: scale(1.1);
          color: white;
        }
        & > a:active {
          background-color: #C78C19;
          color: white;
        }
`

export {
    ContainerAdd,
    MainAdd,
    TitleAdd,
    FormAdd,
    LabelAdd,
    InputAdd,
    InputAdd2,
    InputAdd3,
    InputAdd4,
    InputAdd5,
    InputAdd6,
    Nav,

};