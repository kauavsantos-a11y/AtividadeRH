import './style.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../Componentes/Input/index.jsx';
import Card from '../../Componentes/Card/index.jsx';
import Card from '../../Componentes/Card/index.jsx';

export default function Home() {
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadNote, setLeadNote] = useState('');

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
            <h2>Comece um novo cadastro</h2>
            <p>Registre um novo contato rapidamente usando o formulário de exemplo.</p>
          </div>
          <form className="lead-form" onSubmit={(event) => event.preventDefault()}>
            <Input
              label="Nome do Funcionário"
              placeholder="Digite o nome"
              icon="👤"
              value={leadName}
              onChange={(event) => setLeadName(event.target.value)}
              note="Ex: Ana, João, Maria"
            />
            <Input
              label="Email Profissional"
              placeholder="email@empresa.com"
              type="email"
              icon="✉️"
              value={leadEmail}
              onChange={(event) => setLeadEmail(event.target.value)}
              note="Use um e-mail válido da empresa"
            />
            <div className="textarea-group">
              <label className="input-label">Observações</label>
              <textarea
                className="styled-textarea"
                placeholder="Anote detalhes do contato ou observações adicionais"
                value={leadNote}
                onChange={(event) => setLeadNote(event.target.value)}
              />
            </div>
            <button type="submit" className="submit-button">Salvar cadastro</button>
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