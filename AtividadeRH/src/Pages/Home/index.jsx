import './style.css';
import { useState } from 'react';
import Input from '../../Componentes/Input/index.jsx';
import Card from '../../Componentes/Card/index.jsx';
import { createCliente, createFuncionario } from '../../Service/api.js';

export default function Home() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cargo, setCargo] = useState('');
  const [setor, setSetor] = useState('');
  const [salario, setSalario] = useState('');
  const [employeeFeedback, setEmployeeFeedback] = useState('');
  const [employeeLoading, setEmployeeLoading] = useState(false);

  const [clientNome, setClientNome] = useState('');
  const [clientCpf, setClientCpf] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientTelefone, setClientTelefone] = useState('');
  const [clientFeedback, setClientFeedback] = useState('');
  const [clientLoading, setClientLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmployeeFeedback('');
    setEmployeeLoading(true);

    try {
      await createFuncionario({
        nome,
        cpf,
        email,
        telefone,
        cargo,
        setor,
        salario: Number(salario),
      });
      setEmployeeFeedback('Funcionário cadastrado com sucesso!');
      setNome('');
      setCpf('');
      setEmail('');
      setTelefone('');
      setCargo('');
      setSetor('');
      setSalario('');
    } catch (error) {
      console.error(error);
      setEmployeeFeedback('Falha ao cadastrar funcionário. Verifique os dados e tente novamente.');
    } finally {
      setEmployeeLoading(false);
    }
  };

  const handleClientSubmit = async (event) => {
    event.preventDefault();
    setClientFeedback('');
    setClientLoading(true);

    try {
      await createCliente({
        nome: clientNome,
        cpf: clientCpf,
        email: clientEmail,
        telefone: clientTelefone,
      });
      setClientFeedback('Cliente cadastrado com sucesso!');
      setClientNome('');
      setClientCpf('');
      setClientEmail('');
      setClientTelefone('');
    } catch (error) {
      console.error(error);
      setClientFeedback('Falha ao cadastrar cliente. Verifique os dados e tente novamente.');
    } finally {
      setClientLoading(false);
    }
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Bem-vindo ao Sistema RH</h1>
          <p className="hero-subtitle">Gerencie seus clientes e funcionários com eficiência e modernidade</p>
          <div className="hero-stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Clientes Ativos</p>
            </div>
            <div className="stat">
              <h3>1200+</h3>
              <p>Funcionários</p>
            </div>
            <div className="stat">
              <h3>98%</h3>
              <p>Satisfação</p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="illustration">👥</div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="cards-section">
        <h2>Nossos Serviços</h2>
        <div className="cards-grid">
          <Card
            to="/clientes"
            icon="👔"
            title="Gerenciar Clientes"
            description="Mantenha todas as informações de seus clientes organizadas e acessíveis"
            actionText="Ver mais →"
          />
          <Card
            to="/funcionarios"
            icon="👨‍💼"
            title="Gerenciar Funcionários"
            description="Controle dados, departamentos e informações dos seus colaboradores"
            actionText="Ver mais →"
          />
          <Card
            icon="📊"
            title="Análise de Dados"
            description="Visualize relatórios e estatísticas em tempo real do seu negócio"
            actionText="Em breve →"
          />
        </div>
      </div>

      {/* Bosses Section */}
      <div className="bosses-section">
        <div className="bosses-header">
          <h2>Equipe de Chefia</h2>
          <p>Conheça os líderes que inspiram e guiam nossa área de RH.</p>
        </div>
        <div className="bosses-grid">
          <Card
            icon="🧑‍💼"
            title="Kauã"
            description="Coordenador de RH especializado em desenvolvimento de pessoas e cultura organizacional."
            actionText="Líder de equipe"
          />
          <Card
            icon="🧑‍💻"
            title="Bruno"
            description="Diretor de Operações focado em integração de equipes, estratégia de processos e resultados."
            actionText="Visão estratégica"
          />
        </div>
      </div>

      {/* Quick Lead Form */}
      <div className="lead-form-section">
        <div className="lead-form-card">
          <div className="lead-form-header">
            <h2>Cadastre um novo funcionário</h2>
            <p>Use o formulário abaixo para incluir um colaborador diretamente no sistema.</p>
          </div>
          <form className="lead-form" onSubmit={handleSubmit}>
            <Input
              label="Nome do Funcionário"
              placeholder="Digite o nome"
              icon="👤"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              note="Ex: Ana, João, Maria"
            />
            <Input
              label="CPF"
              placeholder="000.000.000-00"
              icon="🆔"
              value={cpf}
              onChange={(event) => setCpf(event.target.value)}
              note="Informe o CPF do funcionário"
            />
            <Input
              label="Email Profissional"
              placeholder="email@empresa.com"
              type="email"
              icon="✉️"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              note="Use um e-mail válido da empresa"
            />
            <Input
              label="Telefone"
              placeholder="(11) 99999-9999"
              icon="📞"
              value={telefone}
              onChange={(event) => setTelefone(event.target.value)}
              note="Informe o telefone do funcionário"
            />
            <Input
              label="Cargo"
              placeholder="Analista de RH"
              icon="💼"
              value={cargo}
              onChange={(event) => setCargo(event.target.value)}
              note="Ex: Analista, Coordenador, Diretor"
            />
            <Input
              label="Setor"
              placeholder="RH"
              icon="🏢"
              value={setor}
              onChange={(event) => setSetor(event.target.value)}
              note="Ex: RH, TI, Comercial"
            />
            <Input
              label="Salário"
              placeholder="8500"
              type="number"
              icon="💰"
              value={salario}
              onChange={(event) => setSalario(event.target.value)}
              note="Informe o salário em reais"
            />
            {employeeFeedback && <div className="form-feedback">{employeeFeedback}</div>}
            <button type="submit" className="submit-button" disabled={employeeLoading}>
              {employeeLoading ? 'Salvando...' : 'Salvar cadastro'}
            </button>
          </form>
        </div>

        <div className="lead-form-card client-form-card">
          <div className="lead-form-header">
            <h2>Cadastre um novo cliente</h2>
            <p>Adicione os dados do cliente diretamente na base de clientes.</p>
          </div>
          <form className="lead-form" onSubmit={handleClientSubmit}>
            <Input
              label="Nome do Cliente"
              placeholder="Digite o nome"
              icon="👤"
              value={clientNome}
              onChange={(event) => setClientNome(event.target.value)}
              note="Ex: ACME Ltda."
            />
            <Input
              label="CPF"
              placeholder="000.000.000-00"
              icon="🆔"
              value={clientCpf}
              onChange={(event) => setClientCpf(event.target.value)}
              note="Informe o CPF do cliente"
            />
            <Input
              label="Email"
              placeholder="email@cliente.com"
              type="email"
              icon="✉️"
              value={clientEmail}
              onChange={(event) => setClientEmail(event.target.value)}
              note="Email de contato"
            />
            <Input
              label="Telefone"
              placeholder="(11) 99999-9999"
              icon="📞"
              value={clientTelefone}
              onChange={(event) => setClientTelefone(event.target.value)}
              note="Telefone do cliente"
            />
            {clientFeedback && <div className="form-feedback">{clientFeedback}</div>}
            <button type="submit" className="submit-button" disabled={clientLoading}>
              {clientLoading ? 'Salvando...' : 'Salvar cliente'}
            </button>
          </form>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>Por que escolher nosso sistema?</h2>
        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">⚡</div>
            <h3>Rápido</h3>
            <p>Interface intuitiva e respostas instantâneas</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🔒</div>
            <h3>Seguro</h3>
            <p>Dados protegidos com tecnologia moderna</p>
          </div>
          <div className="feature">
            <div className="feature-icon">📱</div>
            <h3>Responsivo</h3>
            <p>Funciona em qualquer dispositivo</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🎨</div>
            <h3>Moderno</h3>
            <p>Design atualizado e profissional</p>
          </div>
        </div>
      </div>
    </div>
  );
}