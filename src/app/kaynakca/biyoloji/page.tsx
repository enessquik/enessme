import biyolojiKaynakca from '@/data/biyokaynakca';

export default function BiyolojiKaynakca() {
  return (
    <div style={{ maxWidth: 800, margin: '24px auto', padding: '0 12px' }}>
      <h1 style={{ fontSize: '2rem', textAlign: 'left', fontWeight: 700, marginBottom: 24 }}>
        Biyoloji Kaynakça
      </h1>
      <ol style={{ fontSize: '1.07rem', lineHeight: '1.65', paddingLeft: 22 }}>
        {biyolojiKaynakca.map((kaynak, idx) => (
          <li key={idx} style={{ marginBottom: 12 }}>
            {kaynak.url
              ? <a href={kaynak.url} target="_blank" rel="noopener noreferrer">{kaynak.title}</a>
              : <span>{kaynak.title}</span>
            }
          </li>
        ))}
      </ol>
    </div>
  );
}
