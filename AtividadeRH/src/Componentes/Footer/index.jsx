
export default function Footer() {
  const anoAtual = new Date().getFullYear();
  
  return (
    <footer style={{
      backgroundColor: '#ffffffff',
      color: '#64748b',
      textAlign: 'center',
      padding: '15px',
      fontSize: '0.85rem',
      borderTop: '1px solid #e2e8f0',
      marginTop: 'auto' 
    }}>
      <p>&copy; {anoAtual} Empresa S.A. Todos os direitos reservados. | Padrão de Governança v1.2</p>
    </footer>
  );
}