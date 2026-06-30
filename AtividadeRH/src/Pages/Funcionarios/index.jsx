import './style.css';

export default function Funcionarios() {
  const funcionarios = [
    { id: 1, nome: 'João Silva', cargo: 'Desenvolvedor Full Stack', departamento: 'TI', nivel: 'Sênior' },
    { id: 2, nome: 'Maria Santos', cargo: 'UX Designer', departamento: 'Design', nivel: 'Pleno' },
    { id: 3, nome: 'Pedro Costa', cargo: 'Gerente de RH', departamento: 'RH', nivel: 'Sênior' },
    { id: 4, nome: 'Ana Pereira', cargo: 'Analista de Produto', departamento: 'Produto', nivel: 'Pleno' },
  ];

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
          <h3>4</h3>
          <p>Colaboradores</p>
        </div>
        <div className="metric-card metric-indigo">
          <h3>3</h3>
          <p>Áreas ativas</p>
        </div>
        <div className="metric-card metric-teal">
          <h3>2</h3>
          <p>Níveis de senioridade</p>
        </div>
      </div>

      <div className="funcionarios-table-card">
        <table className="funcionarios-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Cargo</th>
              <th>Departamento</th>
              <th>Nível</th>
            </tr>
          </thead>
          <tbody>
            {funcionarios.map((func) => (
              <tr key={func.id}>
                <td>{func.id}</td>
                <td>{func.nome}</td>
                <td>{func.cargo}</td>
                <td><span className={`tag tag-${func.departamento.toLowerCase()}`}>{func.departamento}</span></td>
                <td><span className={`level-badge level-${func.nivel.toLowerCase()}`}>{func.nivel}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
