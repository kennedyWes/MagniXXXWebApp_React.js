import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adicionarUtilizador } from "../../services/utilizador";
import IUtilizador from "../../models/utilizador";
import UtilizadoresForm from "../../components/Forms/UtilizidadoresForm"
 
import {
    ContainerAdd,
    MainAdd,
    TitleAdd,
} from "../../assets/StyledComponents/utilizadoresAdicionar"


const Adicionar = () => {
    const [utilizador, setUtilizador] = useState<IUtilizador>({id:0, username:"", nome:"", email:"", telefone:0, listaPermissoes:"", listaEmpresas:""});

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setUtilizador({...utilizador, [name]: value.toUpperCase()});
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        adicionarUtilizador(utilizador)
        navigate("/utilizadores");
    }

    return (
        <ContainerAdd>
            <MainAdd>
                <TitleAdd>Adicione um(a) Utilizador(a)</TitleAdd>
                    <UtilizadoresForm
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        utilizador={utilizador}
                    />
            </MainAdd>
        </ContainerAdd>  
   
    )
} 
export default Adicionar   