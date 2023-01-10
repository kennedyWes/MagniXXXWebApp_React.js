import IEmpresa from "../models/empresa";
import { empresas } from "../server/index";
import { obter, salvar } from "./localStorage";

const KEY = "empresas";

export const initEmpresa = () => {
    const dados = obter<IEmpresa>(KEY)
    if (dados === null) {
        salvar<IEmpresa>(KEY, empresas)
    }
}

export const adicionarEmpresa = (empresa: IEmpresa) => {
    let dados = obter<IEmpresa>(KEY); 
        if (dados.length > 0) {
            const novosDados = {...empresa, clientId: dados[dados.length - 1].clientId+1};
            dados.push (novosDados) 
        }else{
            dados = [{...empresa, clientId: 1}]
    }

    salvar<IEmpresa>(KEY, dados)
};

export const listarEmpresas = () => {
    return obter<IEmpresa>(KEY);
}


export const excluirEmpresas = (clientId: number) => {
    const dados = obter<IEmpresa>(KEY);
    const listaFiltrada = dados.filter((empresa) => {   
        return empresa.clientId !== clientId 
      })
      salvar<IEmpresa>(KEY, listaFiltrada);
      return listaFiltrada;
}

export const obterEmpresa = (clientId: number) => {
    const dadosEmpresa = obter<IEmpresa>(KEY);
    return dadosEmpresa.find((empresa) => empresa.clientId === clientId)
    }

export const editarEmpresa = (clientId: number, empresa: IEmpresa) => {
    const dadosEditados = obter<IEmpresa>(KEY)
    const index = dadosEditados.findIndex(empresa => empresa.clientId === clientId);
    dadosEditados.splice(index, 1, empresa);
    salvar<IEmpresa>(KEY, dadosEditados)
}