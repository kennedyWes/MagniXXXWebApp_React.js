import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header/header";
import Home from "../pages/Home/home";
import SignIn from "../pages/SignIn/signin";
import Menu from "../components/Menu/menu";
import Empresas from "../pages/Empresas/empresas";
import EmpresasAdicionar from "../pages/Empresas/adicionar";
import EmpresasEditar from "../pages/Empresas/editar";
import Utilizadores from "../pages/Utilizadores/utilizadores";
import UtilizadoresAdicionar from "../pages/Utilizadores/adicionar";
import UtilizadoresEditar from "../pages/Utilizadores/editar";
import Footer from "../components/Footer/footer";
//import Accordion from "../components/Accordion/MuiAccordion";
 

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <div style={{display: "flex"}}>
        <Menu />
        <div style={{width: '100%'}}>
          <Header />
          <main style={{flex:1}}>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/empresas" element={<Empresas />} />
            <Route path="/empresas/adicionar" element={<EmpresasAdicionar /> } />
            <Route path="/empresas/editar/:id" element={<EmpresasEditar />} />
            <Route path="/utilizadores" element={<Utilizadores />} />
            <Route path="/utilizadores/adicionar" element={<UtilizadoresAdicionar /> } />
            <Route path="/utilizadores/editar/:id" element={<UtilizadoresEditar />} />
            </Routes>
          </main>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
