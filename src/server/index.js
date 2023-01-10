export const utilizadores = [
  {
    tipoData: "utilizador",
    id: 1,
    username: "MPires",
    nome: "Marcelo Pires",
    email: "mpires@magni.com",
    telefone: "+351 218 215 794",
    listaPermissoes: "Desenvolvimento de Sistemas, Acesso ao Sistema Interno",  
    listaEmpresas: "Magni Finance"
  },

  {
    tipoData: "utilizador",
    id: 2,
    username: "JRodrigues",
    nome: "Jorge Rodrigues",
    email: "jrodrigues@magni.com",
    telefone: "+351 218 215 793",
    listaPermissoes: "Gestão de Equipes, Acesso ao Sistema Interno",  
    listaEmpresas: "Magni Finance"
  },

  {
    tipoData: "utilizador",
    id: 3,
    username: "BFontana",
    nome: "Bruna Fontana",
    email: "bfontana@magni.com",
    telefone: "+351 218 215 792",
    listaPermissoes: "Departamento Jurídico, Acesso ao Sistema Interno",  
    listaEmpresas: "Magni Finance"
  },
]

export const empresas = [
  {
    tipoData: "empresa",
    clientId : 1,
    nome: "Universidade Dom Pedro I",
    nomeLegal: "Universidade Dom Pedro LTDA",
    morada: "Lisboa",
    codigoPostal: 1200359,
    cidade: "Lisboa",
    pais: "Portugal",
    listaUtilizadores: "Universidade de Lisboa",
    listaFuncionalidades: "Acesso ao perfil, Emissão de boletos",
    listaContratos: "Contrato com Magni Finance",
  },

  {
    tipoData: "empresa",
    clientId : 2,
    nome: "Universidade Dom João VI",
    nomeLegal: "Universidade Dom João Estudos SA",
    morada: "Porto",
    codigoPostal: 4100365,
    cidade: "Porto",
    pais: "Portugal",
    listaUtilizadores: "Universidade Dom João VI",
    listaFuncionalidades: "Acesso ao perfil, Emissão de boletos",
    listaContratos: "Contrato com Magni Finance",
  }
]

export const JSONDATA = 	[
  ...utilizadores,
  ...empresas
  
]