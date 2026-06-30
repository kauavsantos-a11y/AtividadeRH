
export default function Header() {
  return (
    <header style={{
      backgroundColor: '#1e293b',
      color: '#fff',
      padding: '15px 30px',
      display: 'flex',
      justifyContent: 'between',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>🏢 ERP Nexus Portal</div>
      <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
        👤 Chefes: Kauã & Bruno
      </div>
    </header>
  );
}