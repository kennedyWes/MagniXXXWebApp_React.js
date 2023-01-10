interface IUtilizador {
    id: number;
    username: string;
    nome: string;
    email: string;
    telefone: number;
    listaPermissoes: string;
    listaEmpresas: string;
}

export default IUtilizador;