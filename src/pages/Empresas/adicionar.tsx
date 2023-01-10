import Button  from "../../components/Button/button";
import React, { useState } from "react";
import { FaHandHolding } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { adicionarEmpresa } from "../../services/empresa";
import IEmpresa from "../../models/empresa";
import EmpresaForm from "../../components/Forms/EmpresasForm";
import {
    ContainerAdd,
    MainAdd,
    UniDiv,
    TitleAdd,
} from "../../assets/StyledComponents/empresasAdicionar"
 
const Adicionar = () => {
    const [empresa, setEmpresa] = useState<IEmpresa>
    ({clientId:0, nome:"", nomeLegal:"", morada:"", codigoPostal:0, cidade:"", pais:"", listaUtilizadores:"", listaFuncionalidades:"", listaContratos:""});

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setEmpresa({...empresa, [name]: value.toUpperCase()});
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        adicionarEmpresa(empresa)
        navigate("/empresas");
    }

    return (
        <ContainerAdd>
            <MainAdd>
                <UniDiv>
                    <TitleAdd>Adicione a Empresa</TitleAdd>
                        <EmpresaForm 
                            handleSubmit={handleSubmit}
                            handleChange={handleChange}
                            empresa={empresa}
                        />
                </UniDiv>    
            </MainAdd>       
        </ContainerAdd>  
    )
} 
export default Adicionar   