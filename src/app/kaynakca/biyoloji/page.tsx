// veya 
import biyolojiKaynakca from '@/data/biyokaynakca';

export default function BiyolojiKaynakca() {
  return (
    <div>
      <h1>Biyoloji Kaynakça</h1>
      <ul>
        {biyolojiKaynakca.map((kaynak, idx) => (
          <li key={idx}>
            <a href={kaynak.url} target="_blank" rel="noopener noreferrer">
              {kaynak.title}
            </a>
            {kaynak.description && <span> – {kaynak.description}</span>}
          </li>
        ))}
      </ul>
      <p>
        Yeni kaynak eklemek için <code>src/data/biyoloji-kaynakca.ts</code> dosyasına yeni nesne ekleyin.
      </p>
    </div>
  );
}
