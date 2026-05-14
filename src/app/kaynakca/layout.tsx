export default function KaynakcaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      maxWidth: 780,
      minHeight: '100vh',
      margin: '0 auto',
      padding: '48px 0 42px',
      background: '#f4f5fc',
    }}>
      <h1 style={{
        textAlign: 'center',
        fontWeight: 800,
        letterSpacing: '.012em',
        fontSize: '2.25rem',
        marginBottom: '28px',
        color: '#222',
        textShadow: '0 2px 8px #eaeaea44'
      }}>
        Biyoloji Kaynakça
      </h1>
      <div style={{background: '#fafbff', borderRadius: 10, boxShadow: '0 1px 10px #e4e6eb', padding: '24px 0 10px'}}>
        {children}
      </div>
    </div>
  );
}
