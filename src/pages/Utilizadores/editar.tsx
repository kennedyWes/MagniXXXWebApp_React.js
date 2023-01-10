import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { obterUtilizador, editarUtilizador } from "../../services/utilizador";
import IUtilizador from "../../models/utilizador";
import UtilizadoresForm from "../../components/Forms/UtilizidadoresForm";
import { useParams } from "react-router-dom";

import {
    ContainerAdd,
    MainAdd,
    TitleAdd,
} from "../../assets/StyledComponents/utilizadoresAdicionar"

 
const Editar = () => {
    const [utilizador, setUtilizador] = useState<IUtilizador>({id:0, username:"", nome:"", email:"", telefone:0, listaPermissoes:"", listaEmpresas:""});

    const navigate = useNavigate();

    const { id } = useParams();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setUtilizador({...utilizador, [name]: value.toUpperCase()});
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (id) {
            editarUtilizador(parseInt(id), utilizador)
            navigate("/utilizadores");
        }
    }

    useEffect(() => {
        if (id ) {
            const resposta = obterUtilizador(parseInt(id))
                if (resposta) setUtilizador(resposta);
        }   
    },[])

    return (
        <ContainerAdd>
            <MainAdd>
                <TitleAdd>Edite o(a) Utilizador(a)</TitleAdd>
                <UtilizadoresForm 
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    utilizador={utilizador}
                    />
            </MainAdd>       
        </ContainerAdd>
       
      
    )
} 
export default Editar  