import biyolojiKaynakca from '@/data/biyokaynakca';

export default function BiyolojiKaynakcaPage() {
  return (
    <ol style={{
      paddingLeft: 22,
      margin: 0,
      maxWidth: 680,
      marginLeft: 'auto',
      marginRight: 'auto',
      background: 'white',
      borderRadius: 12,
      boxShadow: '0 2px 20px #e5e7eb',
      padding: '32px 20px',
    }}>
      {biyolojiKaynakca.map((kaynak, idx) => (
        <li
          key={idx}
          style={{
            marginBottom: 18,
            fontSize: '1.07rem',
            lineHeight: 1.7,
            borderBottom: '1px solid #ececf0',
            paddingBottom: 8
          }}
        >
          {kaynak.url ? (
            <a
              href={kaynak.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1756b8', textDecoration: 'none' }}
              onMouseOver={e => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseOut={e => (e.currentTarget.style.textDecoration = 'none')}
            >
              {kaynak.title}
            </a>
          ) : (
            <span>{kaynak.title}</span>
          )}
        </li>
      ))}
    </ol>
  );
}
