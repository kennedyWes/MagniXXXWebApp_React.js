import * as React from 'react';
import Button from '../../Button/button';
import IUtilizador from '../../../models/utilizador';

import {
    FormAdd,
    LabelAdd,
    InputAdd,
    InputAdd2,
    InputAdd3,
    InputAdd4,
    InputAdd5,
    InputAdd6,
    Nav,
} from "../../../assets/StyledComponents/utilizadoresAdicionar"


interface IUtilizadoresFormProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    utilizador: IUtilizador;
}

function UtilizadoresForm(props: IUtilizadoresFormProps) {
    const {handleSubmit, handleChange, utilizador } = props;
    return ( 
        <form onSubmit={(e) => handleSubmit (e)}>
            <FormAdd>
                <LabelAdd htmlFor="usename">
                    Username
                </LabelAdd>

                <InputAdd 
                    id="username"
                    name="username"
                    placeholder="Digite o username escolhido para o Utilizador"
                    type="text"
                    value={utilizador.username}
                    onChange={(e) => handleChange(e)}
                    required
                ></InputAdd>

                <LabelAdd htmlFor="nome">
                    Nome
                </LabelAdd>

                <InputAdd2 
                    id="nome"
                    name="nome"
                    placeholder="Digite o nome do Utilizador"
                    type="text"
                    value={utilizador.nome}
                    onChange={(e) => handleChange(e)}
                    required
                ></InputAdd2>

                <LabelAdd htmlFor="email">
                    Email
                </LabelAdd>

                <InputAdd3 
                    id="email"
                    name="email"
                    placeholder="Digite o email do Utilizador"
                    type="email"
                    value={utilizador.email}
                    onChange={(e) => handleChange(e)}
                    required
                ></InputAdd3>

                <LabelAdd htmlFor="telefone">
                    Telefone
                </LabelAdd>

                <InputAdd4 
                    id="telefone"
                    name="telefone"
                    placeholder="Digtite o telefone"
                    type="number"
                    value={utilizador.telefone}
                    onChange={(e) => handleChange(e)}
                    required
                ></InputAdd4>
    
                <LabelAdd htmlFor="listaPermissoes">
                    Lista de Permissões
                </LabelAdd>

                <InputAdd5 
                    id="listaPermissoes"
                    name="listaPermissoes"
                    placeholder="Digite as permissões deste Utilizador"
                    type="string"
                    value={utilizador.listaPermissoes}
                    onChange={(e) => handleChange(e)}
                    required
                ></InputAdd5>

                
                <LabelAdd htmlFor="listaEmpresas">
                    Lista de Empresas
                </LabelAdd>

                <InputAdd6 
                    id="listaEmpresas"
                    name="listaEmpresas"
                    placeholder="Digite as empresas associadas à este Utilizador"
                    type="string"
                    value={utilizador.listaEmpresas}
                    onChange={(e) => handleChange(e)}
                    required
                ></InputAdd6>

                <Nav>
                    <Button
                        tema="Primario"
                        type="submit"
                        >ENVIAR
                    </Button>
                </Nav>
            </FormAdd>
        </form>
    );
}

export default UtilizadoresForm;