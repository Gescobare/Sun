import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Municipio from './components/Municipios';
import Institucion from './components/Instituciones';
import Sede from './components/Sedes';
import Grupo from "./components/Grupos";
import InfoGrupo from "./components/InfoGrupo";

function App() {

  return (
      <>
        <Routes>
          <Route path="/" element={<Municipio />} />
          <Route path="/instituciones/:id" element={<Institucion />} />
          <Route path="/sedes/:id" element={<Sede />} />
          <Route path="/grupos/:id" element={<Grupo />} />
          <Route path="/infogrupos/:id" element={<InfoGrupo />} />
        </Routes>
      </>
  );
}

export default App;
