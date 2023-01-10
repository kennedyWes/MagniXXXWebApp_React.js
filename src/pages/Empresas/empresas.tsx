import React from "react";
import IEmpresa from "../../models/empresa";
import { empresas }  from "../../server/index"
import { useState, useEffect } from "react"
import Button  from "../../components/Button/button";
import { Link } from "react-router-dom";
import { excluirEmpresas, listarEmpresas } from "../../services/empresa";

import { 
  Container, 
  MainUni,
  UniTable,
  TitleMain,
  TableTopic,
  TableTitle,
  TableBody,
  TitleTd
} from "../../assets/StyledComponents/empresas"


const Empresas = () => {
  const [listaEmpresas, setListaEmpresas] = useState<IEmpresa[]>([])


function excluir (clientId: number) {
  const listaFiltrada = excluirEmpresas(clientId)
  setListaEmpresas(listaFiltrada) 
}  
  useEffect(() => {
    setListaEmpresas(listarEmpresas)
  }, [])

  return (
    <body>
    <Container>
      <MainUni>
        <TitleMain>Lista de Empresas</TitleMain>
        
        <UniTable>
            <TableTopic>
              <tr>
                <TableTitle>Client Id</TableTitle>
                <TableTitle>Nome</TableTitle>
                <TableTitle>Nome Legal</TableTitle>
                <TableTitle>Morada</TableTitle>
                <TableTitle>Código Postal</TableTitle>
                <TableTitle>Cidade</TableTitle>
                <TableTitle>País</TableTitle>
                <TableTitle>Utilizadores</TableTitle>
                <TableTitle>Funcionalidades</TableTitle>
                <TableTitle>Contratos</TableTitle>
              </tr>
            </TableTopic>
            <TableBody>
              {listaEmpresas.map((empresa) => {
                return (
                  <tr key={empresa.clientId}>
                    <TitleTd>{empresa.clientId}</TitleTd>
                    <TitleTd>{empresa.nome}</TitleTd>
                    <TitleTd>{empresa.nomeLegal}</TitleTd>
                    <TitleTd>{empresa.morada}</TitleTd>
                    <TitleTd>{empresa.codigoPostal}</TitleTd>
                    <TitleTd>{empresa.cidade}</TitleTd>
                    <TitleTd>{empresa.pais}</TitleTd>
                    <TitleTd>{empresa.listaUtilizadores}</TitleTd>
                    <TitleTd>{empresa.listaFuncionalidades}</TitleTd>
                    <TitleTd>{empresa.listaContratos}</TitleTd>
                                        
                    <td style= {{width:"15rem"}}>
                      <Link to={`/empresas/editar/${empresa.clientId}` }>
                        <Button> 
                          Editar
                        </Button>  
                      </Link>

                        <Button
                          type="button"
                          tema="Primario"
                          onClick={() => excluir(empresa.clientId)}
                          > 
                          Excluir
                        </Button>  
                    </td>
              </tr>  
                  
                )
              }) }
          
              <Link to="/empresas/adicionar">      
                <Button
                  tema="Primario"
                  >Adicionar
                </Button>        
              </Link>
            </TableBody>
        </UniTable>  
      </MainUni>
    </Container>
    </body>
  );
};

export default Empresas;
