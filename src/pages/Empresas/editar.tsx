
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { editarEmpresa } from "../../services/empresa";
import IEmpresa from "../../models/empresa";
import EmpresaForm from "../../components/Forms/EmpresasForm";
import { useParams } from "react-router-dom";
import { obterEmpresa } from "../../services/empresa";

import {
    ContainerAdd,
    MainAdd,
    TitleAdd,
} from "../../assets/StyledComponents/empresasAdicionar"

 
const Editar = () => {
    const [empresa, setEmpresa] = useState<IEmpresa>
    ({clientId:0, nome:"", nomeLegal:"", morada:"", codigoPostal:0, cidade:"", pais:"", listaUtilizadores:"", listaFuncionalidades:"", listaContratos:""});

    const navigate = useNavigate();

    const { clientId } = useParams();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setEmpresa({...empresa, [name]: value.toUpperCase()});
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (clientId) {
            editarEmpresa(parseInt(clientId), empresa)
            navigate("/empresas");
        }
    }

    useEffect(() => {
        if (clientId ) {
            const resposta = obterEmpresa(parseInt(clientId))
                if (resposta) setEmpresa(resposta);
        }
        
    },[])

    return (
        <ContainerAdd>
            <MainAdd>
                <TitleAdd>Edite a Empresa</TitleAdd>
                <EmpresaForm 
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    empresa={empresa}
                    />
            </MainAdd>       
        </ContainerAdd>
       
      
    )
} 
export default Editar  