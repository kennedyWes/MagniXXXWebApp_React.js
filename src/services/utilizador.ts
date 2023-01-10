import IUtilizador from "../models/utilizador";
import { utilizadores } from "../server/index";
import { obter, salvar } from "./localStorage";

const KEY = "utilizadores";

export const initUtilizador = () => {
    const dados = obter<IUtilizador>(KEY)
    if (dados === null) {
        salvar<IUtilizador>(KEY, utilizadores)
    }
}

export const adicionarUtilizador = (utilizador: IUtilizador) => {
    let dados = obter<IUtilizador>(KEY); 
        if (dados.length > 0) {
            const novosDados = {...utilizador, id: dados[dados.length - 1].id+1};
            dados.push (novosDados) 
        }else{
            dados = [{...utilizador, id: 1}]
    }

    salvar<IUtilizador>(KEY, dados)
};

export const listarUtilizadores = () => {
    return obter<IUtilizador>(KEY);
}


export const excluirUtilizadores = (id: number) => {
    const dados = obter<IUtilizador>(KEY);
    const listaFiltrada = dados.filter((utilizador) => {   
        return utilizador.id !== id 
      })
      salvar<IUtilizador>(KEY, listaFiltrada);
      return listaFiltrada;
}

export const obterUtilizador = (id: number) => {
    const dadosUtilizador = obter<IUtilizador>(KEY);
    return dadosUtilizador.find((utilizador) => utilizador.id === id)
    }

export const editarUtilizador = (id: number, utilizador: IUtilizador) => {
    const dadosEditados = obter<IUtilizador>(KEY)
    const index = dadosEditados.findIndex(utilizador => utilizador.id === id);
    dadosEditados.splice(index, 1, utilizador);
    salvar<IUtilizador>(KEY, dadosEditados)
}