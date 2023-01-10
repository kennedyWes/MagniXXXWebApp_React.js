interface IEmpresa {
    clientId: number;
    nome: string;
    nomeLegal: string;
    morada: string;
    codigoPostal: number;
    cidade:string;
    pais: string;
    listaUtilizadores: string;
    listaFuncionalidades: string;
    listaContratos: string;
}

export default IEmpresa;