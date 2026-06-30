
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Repare no "I" maiúsculo no final de cada linha:
import Header from './Componentes/Header/index.jsx';
import Navbar from './Componentes/Nevbar/index.jsx';
import Footer from './Componentes/Footer/index.jsx';
import Home from './Pages/Home/index.jsx';
import Clientes from './Pages/Clientes/index.jsx';
import Funcionarios from './Pages/Funcionarios/index.jsx';

export default function App() {
  return (
    <BrowserRouter>
      {/* Estrutura de Layout Vertical Flexbox para garantir o footer no rodapé */}
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        {/* Componentes Globais Superiores */}
        <Header />
        <Navbar /> 
        
        {/* Miolo Dinâmico (SPA) */}
        <main style={{ flex: '1', width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '20px', display: 'flex', flexDirection: 'column' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/funcionarios" element={<Funcionarios />} />
          </Routes>
        </main>
        
        {/* Componente Global Inferior */}
        <Footer />
        
      </div>
    </BrowserRouter>
  );
}