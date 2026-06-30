import './style.css';

export default function Clientes() {
  const clientes = [
    { id: 1, nome: 'Empresa ABC', produto: 'Portal RH', segmento: 'Saúde', email: 'contato@abc.com', telefone: '(11) 1234-5678' },
    { id: 2, nome: 'Tech Solutions', produto: 'Consultoria', segmento: 'TI', email: 'info@tech.com', telefone: '(11) 9876-5432' },
    { id: 3, nome: 'Digital Inovação', produto: 'Suporte Premium', segmento: 'Marketing', email: 'vendas@digital.com', telefone: '(21) 3333-4444' },
    { id: 4, nome: 'Logística Forte', produto: 'Portal RH', segmento: 'Logística', email: 'contato@logistica.com', telefone: '(11) 5555-6666' },
  ];

  return (
    <div className="clientes-container">
      <div className="clientes-hero">
        <div>
          <p className="mini-title">Clientes</p>
          <h1>Gestão de contas estratégicas</h1>
          <p className="hero-description">Acompanhe seus clientes com foco em produto, segmento e performance de atendimento.</p>
        </div>

        <div className="hero-pill-group">
          <span className="hero-pill hero-pill-primary">Portal RH</span>
          <span className="hero-pill hero-pill-secondary">Consultoria</span>
          <span className="hero-pill hero-pill-tertiary">Suporte Premium</span>
        </div>
      </div>

      <div className="clientes-metrics">
        <div className="metric-card metric-blue">
          <h3>4</h3>
          <p>Contas ativas</p>
        </div>
        <div className="metric-card metric-purple">
          <h3>3</h3>
          <p>Segmentos atendidos</p>
        </div>
        <div className="metric-card metric-green">
          <h3>98%</h3>
          <p>NPS médio</p>
        </div>
      </div>

      <div className="clientes-table-card">
        <table className="clientes-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Empresa</th>
              <th>Produto</th>
              <th>Segmento</th>
              <th>Email</th>
              <th>Telefone</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nome}</td>
                <td><span className={`tag tag-${cliente.produto.replace(/\s+/g, '').toLowerCase()}`}>{cliente.produto}</span></td>
                <td>{cliente.segmento}</td>
                <td>{cliente.email}</td>
                <td>{cliente.telefone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
