import { Link } from 'react-router-dom';
import './style.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span>RH</span> Portal
      </div>
      <div className="navbar-links">
        <Link to="/">🏠 Home</Link>
        <Link to="/clientes">👥 Clientes</Link>
        <Link to="/funcionarios">💼 Funcionários</Link>
      </div>
    </nav>
  );
}