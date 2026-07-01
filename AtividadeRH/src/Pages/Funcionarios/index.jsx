import './style.css';
import { useEffect, useState } from 'react';
import { fetchFuncionarios } from '../../Service/api.js';

export default function Funcionarios() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFuncionarios()
      .then((data) => {
        setFuncionarios(data);
      })
      .catch((err) => {
        console.error(err);
        setError('Não foi possível carregar os funcionários.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="funcionarios-container">
      <div className="funcionarios-hero">
        <div>
          <p className="mini-title">Funcionários</p>
          <h1>Time alinhado com crescimento e qualidade.</h1>
          <p className="hero-description">Perfis claros, cargos estratégicos e um RH que conecta pessoas aos produtos certos.</p>
        </div>

        <div className="hero-pill-group">
          <span className="hero-pill hero-pill-primary">TI</span>
          <span className="hero-pill hero-pill-secondary">Design</span>
          <span className="hero-pill hero-pill-tertiary">Produto</span>
        </div>
      </div>

      <div className="funcionarios-metrics">
        <div className="metric-card metric-slate">
          <h3>{funcionarios.length}</h3>
          <p>Colaboradores</p>
        </div>
        <div className="metric-card metric-indigo">
          <h3>{new Set(funcionarios.map((f) => f.setor)).size || '-'}</h3>
          <p>Áreas ativas</p>
        </div>
        <div className="metric-card metric-teal">
          <h3>{new Set(funcionarios.map((f) => f.cargo)).size || '-'}</h3>
          <p>Níveis de senioridade</p>
        </div>
      </div>

      <div className="funcionarios-table-card">
        {loading ? (
          <div className="loading-text">Carregando funcionários...</div>
        ) : error ? (
          <div className="error-text">{error}</div>
        ) : (
          <table className="funcionarios-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Cargo</th>
                <th>Setor</th>
                <th>Salário</th>
              </tr>
            </thead>
            <tbody>
              {funcionarios.map((funcionario, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{funcionario.nome}</td>
                  <td>{funcionario.cargo}</td>
                  <td><span className={`tag tag-${funcionario.setor?.toLowerCase() ?? 'desconhecido'}`}>{funcionario.setor}</span></td>
                  <td>{funcionario.salario ? `R$ ${funcionario.salario.toFixed(2)}` : '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
