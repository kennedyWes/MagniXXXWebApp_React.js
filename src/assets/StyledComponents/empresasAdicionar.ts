import styled from "styled-components";

const ContainerAdd = styled.div`
    display: flex;
    gap: .5rem;
    margin-top: 1.2rem;
    margin-left: 1rem;
`;

const MainAdd = styled.main`
    flex: 1;
    height: 75vh;
    width: 80rem;
    padding: 1rem;
`;

const UniDiv = styled.div`
    margin-top: 2%;
    padding-left: 1%;
    border: 1px solid #EEEEEE;
    width: 81rem;
    padding: 1rem;
    border-radius: 12px;
    box-shadow: 10px 10px 10px #373737;
`;

const TitleAdd = styled.h1`
    margin-top: 1rem;
    margin-bottom: 3rem;
    text-align: center; 
`;

const FormAdd = styled.div`
    border: 1px solid #EEEEEE;
    width: 80%;
    margin-left: 8rem;
    margin-bottom: 2rem;
    padding-left: 2rem;
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
    width: 22rem;
    height: 2rem;
    margin-top: .8rem;
    margin-right: 1rem;
    border: 1px solid #EEEEEE;
    border-radius: 12px;
`;

const InputAdd2 = styled.input`
    width: 16rem;
    height: 2rem;
    margin-top: .8rem;
    margin-right: 1rem;
    border: 1px solid #EEEEEE;
    border-radius: 12px;
`;

export {
    ContainerAdd,
    MainAdd,
    UniDiv,
    TitleAdd,
    FormAdd,
    LabelAdd,
    InputAdd,
    InputAdd2
}