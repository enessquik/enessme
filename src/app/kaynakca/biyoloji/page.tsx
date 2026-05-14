import biyolojiKaynakca from '@/data/biyokaynakca';

export default function BiyolojiKaynakca() {
  return (
    <div style={{maxWidth: 800, margin: '0 auto', padding: '32px 12px'}}>
      <h1 style={{ fontSize: '2rem', textAlign: 'center', fontWeight: 700, marginBottom: 28 }}>
        Biyoloji Kaynakça
      </h1>
      <ol style={{ fontSize: '1.1rem', lineHeight: '1.7', paddingLeft: 22 }}>
        {biyolojiKaynakca.map((kaynak, idx) => (
          <li key={idx} style={{ marginBottom: 14 }}>
            {kaynak.url ? (
              <a href={kaynak.url} target="_blank" rel="noopener noreferrer" style={{ color: '#194496' }}>
                {kaynak.title}
              </a>
            ) : (
              <span>{kaynak.title}</span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
