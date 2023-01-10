import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: .5rem;
    margin-top: 1.2rem;
    margin-left: 1rem;
`;

const MainUtilizadores = styled.main`
    flex: 1;
    border: 1px solid #EEEEEE;
    height: 75vh;
    width: 75rem;
    padding: 1rem;
    border-radius: 12px;
    box-shadow: 10px 10px 10px #373737;
`;

const TitleMain = styled.h1`
    margin-top: 2rem;
    text-align: center;
`;

const UtilizadoresTable = styled.table`
    border: 1px solid #EEEEEE;
    width: 75rem;
    margin-left: .1rem;
    margin-bottom: 2rem;
    padding-left: .5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 12px;
    box-shadow: 10px 10px 10px #373737;
`;

const TableTopic = styled.thead`
    margin-top: 10rem;
`

const TableTitle = styled.th`
    gap: 30rem;
    margin-top: 10rem;
`

const TableBody = styled.tbody`
    margin-top: 5rem;
`

const TitleTd = styled.td`
    border: 1px solid;
    text-align: center;
    font-size: 14px;
    padding: .8rem;
    width: auto;
`


export { 
    Container, 
    MainUtilizadores, 
    TitleMain, 
    UtilizadoresTable, 
    TableTopic, 
    TableTitle, 
    TableBody, 
    TitleTd, 
};
  
