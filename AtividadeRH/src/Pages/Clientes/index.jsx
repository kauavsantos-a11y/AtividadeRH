import './style.css';
import { useEffect, useState } from 'react';
import { fetchClientes } from '../../Service/api.js';

export default function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadClientes = () => {
    setLoading(true);
    setError(null);
    fetchClientes()
      .then((data) => {
        setClientes(data);
      })
      .catch((err) => {
        console.error(err);
        setError('Não foi possível carregar os clientes.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadClientes();
  }, []);

  return (
    <div className="clientes-container">
      <div className="clientes-hero">
        <div>
          <p className="mini-title">Clientes</p>
          <h1>Gestão de contas estratégicas</h1>
          <p className="hero-description">Adicione novos clientes e acompanhe seus dados em um painel centralizado.</p>
        </div>
      </div>

      <div className="clientes-table-card">
          {loading ? (
            <div className="loading-text">Carregando clientes...</div>
          ) : error ? (
            <div className="error-text">{error}</div>
          ) : (
            <>
              <div className="clientes-metrics">
                <div className="metric-card metric-blue">
                  <h3>{clientes.length}</h3>
                  <p>Contas ativas</p>
                </div>
                <div className="metric-card metric-purple">
                  <h3>—</h3>
                  <p>Segmentos atendidos</p>
                </div>
                <div className="metric-card metric-green">
                  <h3>98%</h3>
                  <p>NPS médio</p>
                </div>
              </div>
              <table className="clientes-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Email</th>
                    <th>Telefone</th>
                  </tr>
                </thead>
                <tbody>
                  {clientes.map((cliente, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{cliente.nome}</td>
                      <td>{cliente.cpf}</td>
                      <td>{cliente.email}</td>
                      <td>{cliente.telefone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
  );
}
