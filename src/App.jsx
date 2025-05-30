import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import Aleatorios from './Componentes/Aleatorios';
import Capturados from './Componentes/Capturados';
import Favoritos from './Componentes/Favoritos';
import Lista from './Componentes/Lista';
import Pokemon from './Componentes/Pokemon';
import Usuarios from './Componentes/Usuarios';
import Menu from './Componentes/Menu';
import { AppProvider } from './Contexto/Contexto';

import Register from './Componentes/Registro/index.jsx';
import Login from './Componentes/Login/index.jsx';

function App() {
  return (
    <AppProvider>
      <Router>
        <Menu />
        
        {/* Links a Login y Registro en el navbar */}
        <nav className="navbar">
          <Link to="/login">Login</Link>
          <Link to="/register">Registro</Link>
        </nav>

        <Routes>
          {/* Rutas existentes */}
          <Route path="/" element={<Lista />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/aleatorios" element={<Aleatorios />} />
          <Route path="/capturados" element={<Capturados />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/pokemon/:name" element={<Pokemon />} />

          {/* Rutas nuevas de autenticación */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
