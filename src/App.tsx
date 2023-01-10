import React, { useEffect } from "react";
import RoutesApp from "./AppRoutes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { initEmpresa } from "./services/empresa";
import { initUtilizador } from "./services/utilizador";
import "./styles/GlobalStyles.css"

function App() {
  useEffect(() => {
    initEmpresa()
    initUtilizador()
  },[])

  return (
    <>
      <ToastContainer autoClose={3000} />
      <RoutesApp />
    </>
  );
}

export default App;
