import * as React from 'react';
import Button from '../../Button/button';
import IEmpresa from '../../../models/empresa';

import {
    FormAdd,
    LabelAdd,
    InputAdd,
    InputAdd2
} from "../../../assets/StyledComponents/empresasAdicionar"


interface IEmpresaFormProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    empresa: IEmpresa;
}

function EmpresaForm(props: IEmpresaFormProps) {
    const {handleSubmit, handleChange, empresa } = props;
    return ( 
        <form onSubmit={(e) => handleSubmit (e)}>
                    <FormAdd>
                        <LabelAdd htmlFor="nome">
                            NOME:
                        </LabelAdd>
                      
                        <InputAdd 
                            id="nome"
                            name="nome"
                            placeholder="Digite o nome da Empresa"
                            type="text"
                            value={empresa.nome}
                            onChange={(e) => handleChange(e)}
                            required
                        ></InputAdd>

                        <LabelAdd htmlFor="nomeLegal">
                            NOME LEGAL:
                        </LabelAdd>
                      
                        <InputAdd 
                            id="nomeLegal"
                            name="nomeLegal"
                            placeholder="Digite o Nome Legal da Empresa"
                            type="text"
                            value={empresa.nomeLegal}
                            onChange={(e) => handleChange(e)}
                            required
                        ></InputAdd>

                        <LabelAdd htmlFor="morada">
                            MORADA:
                        </LabelAdd>

                        <InputAdd 
                            id="morada"
                            name="morada"
                            placeholder="Digite o local da Empresa"
                            type="text"
                            value={empresa.morada}
                            onChange={(e) => handleChange(e)}
                            required
                        ></InputAdd>

                        <LabelAdd htmlFor="codigoPostal">
                            Código Postal:
                        </LabelAdd>
                      
                        <InputAdd 
                            id="codigoPostal"
                            name="codigoPostal"
                            placeholder="Digite o código Postal da Empresa"
                            type="number"
                            value={empresa.codigoPostal}
                            onChange={(e) => handleChange(e)}
                            required
                        ></InputAdd>

                        <LabelAdd htmlFor="cidade">
                            CIDADE:
                        </LabelAdd>
                      
                        <InputAdd 
                            id="cidade"
                            name="cidade"
                            placeholder="Digite o cidade da Empresa"
                            type="text"
                            value={empresa.cidade}
                            onChange={(e) => handleChange(e)}
                            required
                        ></InputAdd>

                        <LabelAdd htmlFor="pais">
                            PAÍS:
                        </LabelAdd>
                      
                        <InputAdd 
                            id="pais"
                            name="pais"
                            placeholder="Digite o país da Empresa"
                            type="text"
                            value={empresa.pais}
                            onChange={(e) => handleChange(e)}
                            required
                        ></InputAdd>

                        <LabelAdd htmlFor="utilizadores">
                            UTILIZADORES:
                        </LabelAdd>
                      
                        <InputAdd2 
                            id="utilizadores"
                            name="utilizadores"
                            placeholder="Digite o(s) utilizador(es) para essa Empresa"
                            type="text"
                            value={empresa.listaUtilizadores}
                            onChange={(e) => handleChange(e)}
                            required
                        ></InputAdd2>

                        <LabelAdd htmlFor="funcionalidades">
                            FUNCIONALIDADES:
                        </LabelAdd>
                      
                        <InputAdd 
                            id="funcionalidades"
                            name="funcionalidades"
                            placeholder="Digite funcionalidades para essa Empresa"
                            type="text"
                            value={empresa.listaFuncionalidades}
                            onChange={(e) => handleChange(e)}
                            required
                        ></InputAdd>

                        <LabelAdd htmlFor="contratos">
                            CONTRATOS:
                        </LabelAdd>
                      
                        <InputAdd 
                            id="contratos"
                            name="contratos"
                            placeholder="Digite contratos dessa Empresa"
                            type="text"
                            value={empresa.listaContratos}
                            onChange={(e) => handleChange(e)}
                            required
                        ></InputAdd>

                        <Button
                            type="submit"
                            tema="Primario"
                            >ENVIAR
                        </Button>
                    </FormAdd>
                </form>
    );
}

export default EmpresaForm;