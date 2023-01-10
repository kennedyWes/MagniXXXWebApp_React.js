import React from "react";
import IUtilizador from "../../models/utilizador";
import { utilizadores }  from "../../server/index.js"
import { useState, useEffect } from "react"
import Button  from "../../components/Button/button";
import { Link } from "react-router-dom";
import { excluirUtilizadores, listarUtilizadores } from "../../services/utilizador";

import { 
  Container, 
  MainUtilizadores, 
  TitleMain, 
  UtilizadoresTable, 
  TableTopic, 
  TableTitle, 
  TableBody, 
  TitleTd, 
} from '../../assets/StyledComponents/utilizadores'

const Utilizadores = () => {
  const [listaUtilizadores, setListaUtilizadores] = useState<IUtilizador[]>([])


function excluir (id: number) {
  const listaFiltrada = excluirUtilizadores(id)
  setListaUtilizadores(listaFiltrada) 
}  
  useEffect(() => {
    setListaUtilizadores(listarUtilizadores)
  }, [])

  return (
    <body>
        <Container>
            <MainUtilizadores>
               <TitleMain>Lista de Utilizadores</TitleMain>   
                     
               <UtilizadoresTable>
                  <TableTopic>
                    <tr>
                      <TableTitle>ID</TableTitle>
                      <TableTitle>Nome</TableTitle>
                      <TableTitle>Username</TableTitle>
                      <TableTitle>Email</TableTitle>
                      <TableTitle>Telefone</TableTitle>
                      <TableTitle>Lista de Permissões</TableTitle>
                      <TableTitle>Lista de Empresas</TableTitle>
                    </tr>
                  </TableTopic>
                
                  <TableBody>
                    {listaUtilizadores.map((utilizador) => {
                        return (
                          <tr key={utilizador.id}>
                            <TitleTd>{utilizador.id}</TitleTd>
                            <TitleTd>{utilizador.nome}</TitleTd>
                            <TitleTd>{utilizador.username}</TitleTd>
                            <TitleTd>{utilizador.email}</TitleTd>
                            <TitleTd>{utilizador.telefone}</TitleTd>
                            <TitleTd>{utilizador.listaPermissoes}</TitleTd>
                            <TitleTd>{utilizador.listaEmpresas}</TitleTd>
                          
                            <td style= {{width:"15rem"}}>
                              <Link to= {`/utilizadores/editar/${utilizador.id}`}>
                                <Button
                                  >Editar
                                </Button>
                              </Link>

                              <Button
                                type="button"
                                tema="Primario"
                                onClick={() => excluir(utilizador.id)}
                                >Excluir
                              </Button>
                            </td>
                          </tr>
                        )
                    }) }
            
                    <Link to="/utilizadores/adicionar">
                      <Button
                        tema="Primario"
                        >Adicionar
                      </Button>
                    </Link>
                  </TableBody>
              </UtilizadoresTable>
            </MainUtilizadores>
        </Container>
    </body>
  );
};

export default Utilizadores;
