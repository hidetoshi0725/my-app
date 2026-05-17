import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "クレオパトラノーズ（鼻糸リフト）| 渋クリ",
  description:
    "たった10分。理想の鼻筋で、洗練された横顔へ。形成外科専門医による安心のクレオパトラノーズ（鼻糸リフト）。",
};

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600&family=Noto+Sans+JP:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --cream: #FAF7F4;
          --warm-white: #FDFCFB;
          --blush: #F2E8E4;
          --rose: #C8968A;
          --rose-deep: #A67066;
          --rose-light: #E8C5BC;
          --charcoal: #2C2420;
          --mid: #6B5C57;
          --light: #A89490;
          --gold: #C4A882;
          --gold-light: #E8D9C4;
        }

        html { scroll-behavior: smooth; }

        body {
          font-family: 'Noto Sans JP', sans-serif;
          background: var(--warm-white);
          color: var(--charcoal);
          line-height: 1.7;
          font-weight: 300;
        }

        /* NAV */
        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 18px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(253,252,251,0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(200,150,138,0.15);
        }
        .nav-logo {
          font-family: 'Shippori Mincho', serif;
          font-size: 15px;
          font-weight: 500;
          color: var(--charcoal);
          letter-spacing: 0.15em;
        }
        .nav-logo span { color: var(--rose); }
        .nav-cta {
          background: var(--rose);
          color: white;
          border: none;
          padding: 10px 28px;
          font-size: 13px;
          letter-spacing: 0.1em;
          cursor: pointer;
          font-family: 'Noto Sans JP', sans-serif;
          font-weight: 400;
          transition: background 0.25s;
          text-decoration: none;
          display: inline-block;
        }
        .nav-cta:hover { background: var(--rose-deep); }

        /* HERO */
        .hero {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding-top: 70px;
        }
        .hero-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px 60px 80px 80px;
          background: var(--cream);
          position: relative;
          overflow: hidden;
        }
        .hero-left::before {
          content: '';
          position: absolute;
          top: -100px; right: -100px;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: var(--blush);
          opacity: 0.5;
        }
        .hero-badge {
          display: inline-block;
          font-size: 11px;
          letter-spacing: 0.2em;
          color: var(--rose);
          border: 1px solid var(--rose-light);
          padding: 6px 16px;
          margin-bottom: 32px;
          width: fit-content;
        }
        .hero-catch {
          font-family: 'Shippori Mincho', serif;
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 500;
          line-height: 1.6;
          color: var(--charcoal);
          margin-bottom: 24px;
          position: relative;
          z-index: 1;
        }
        .hero-catch em {
          font-style: normal;
          color: var(--rose);
        }
        .hero-sub {
          font-size: 14px;
          color: var(--mid);
          line-height: 2;
          margin-bottom: 48px;
          position: relative;
          z-index: 1;
        }
        .hero-pills {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 40px;
          position: relative;
          z-index: 1;
        }
        .hero-pill {
          background: white;
          border: 1px solid var(--rose-light);
          color: var(--rose-deep);
          font-size: 12px;
          padding: 8px 18px;
          letter-spacing: 0.05em;
        }
        .hero-btn {
          display: inline-block;
          background: var(--charcoal);
          color: white;
          padding: 18px 48px;
          font-size: 14px;
          letter-spacing: 0.15em;
          text-decoration: none;
          position: relative;
          z-index: 1;
          transition: background 0.25s;
          width: fit-content;
        }
        .hero-btn:hover { background: var(--rose-deep); }

        .hero-right {
          background: var(--blush);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .hero-right::before {
          content: '';
          position: absolute;
          bottom: -80px; left: -80px;
          width: 300px; height: 300px;
          border-radius: 50%;
          background: var(--rose-light);
          opacity: 0.4;
        }
        .hero-visual {
          text-align: center;
          position: relative;
          z-index: 1;
        }
        .hero-visual-circle {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--rose-light) 0%, var(--blush) 100%);
          margin: 0 auto 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-visual-inner {
          font-family: 'Shippori Mincho', serif;
          font-size: 15px;
          color: var(--rose-deep);
          letter-spacing: 0.1em;
          line-height: 2;
          text-align: center;
        }
        .hero-stats {
          display: flex;
          gap: 32px;
          justify-content: center;
        }
        .hero-stat {
          text-align: center;
        }
        .hero-stat-num {
          font-family: 'Shippori Mincho', serif;
          font-size: 28px;
          color: var(--rose-deep);
          display: block;
        }
        .hero-stat-label {
          font-size: 11px;
          color: var(--mid);
          letter-spacing: 0.1em;
        }

        /* SECTION COMMON */
        section { padding: 100px 0; }
        .container { max-width: 1080px; margin: 0 auto; padding: 0 40px; }
        .section-label {
          font-size: 11px;
          letter-spacing: 0.3em;
          color: var(--rose);
          margin-bottom: 16px;
          display: block;
        }
        .section-title {
          font-family: 'Shippori Mincho', serif;
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 500;
          color: var(--charcoal);
          line-height: 1.5;
          margin-bottom: 48px;
        }
        .divider {
          width: 40px;
          height: 1px;
          background: var(--rose);
          margin: 24px 0 48px;
        }

        /* FEATURES */
        .features { background: var(--cream); }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
        }
        .feature-card {
          background: white;
          padding: 48px 36px;
        }
        .feature-num {
          font-family: 'Shippori Mincho', serif;
          font-size: 40px;
          color: var(--rose-light);
          display: block;
          margin-bottom: 20px;
          line-height: 1;
        }
        .feature-title {
          font-family: 'Shippori Mincho', serif;
          font-size: 18px;
          color: var(--charcoal);
          margin-bottom: 12px;
        }
        .feature-desc {
          font-size: 13px;
          color: var(--mid);
          line-height: 2;
        }

        /* ABOUT */
        .about-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .about-img {
          background: var(--blush);
          height: 480px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .about-img-label {
          font-family: 'Shippori Mincho', serif;
          font-size: 14px;
          color: var(--rose-deep);
          letter-spacing: 0.15em;
          text-align: center;
          line-height: 2.5;
        }
        .about-points { list-style: none; }
        .about-point {
          display: flex;
          gap: 16px;
          padding: 20px 0;
          border-bottom: 1px solid var(--gold-light);
          align-items: flex-start;
        }
        .about-point:first-child { border-top: 1px solid var(--gold-light); }
        .about-point-icon {
          width: 24px;
          height: 24px;
          background: var(--rose);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .about-point-icon::after {
          content: '✓';
          color: white;
          font-size: 12px;
        }
        .about-point-text {
          font-size: 14px;
          color: var(--mid);
          line-height: 1.8;
        }
        .about-point-title {
          font-size: 15px;
          font-weight: 500;
          color: var(--charcoal);
          margin-bottom: 4px;
        }

        /* COMPARISON */
        .comparison { background: var(--cream); }
        .comparison-tables {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }
        .comp-table-wrap { }
        .comp-table-title {
          font-family: 'Shippori Mincho', serif;
          font-size: 16px;
          color: var(--charcoal);
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 2px solid var(--rose-light);
        }
        table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
        }
        th {
          background: var(--charcoal);
          color: white;
          padding: 12px 16px;
          text-align: left;
          font-weight: 400;
          letter-spacing: 0.05em;
        }
        td {
          padding: 12px 16px;
          border-bottom: 1px solid var(--gold-light);
          color: var(--mid);
          background: white;
        }
        tr:last-child td { border-bottom: none; }
        td:first-child { color: var(--charcoal); font-weight: 500; }
        td.highlight { color: var(--rose-deep); font-weight: 500; }

        /* RECOMMEND */
        .recommend-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .recommend-item {
          background: var(--cream);
          padding: 28px 24px;
          border-left: 3px solid var(--rose-light);
          font-size: 14px;
          color: var(--mid);
          line-height: 1.8;
        }
        .recommend-item::before {
          content: '✦';
          color: var(--rose);
          display: block;
          margin-bottom: 10px;
          font-size: 12px;
        }

        /* PRICE */
        .price { background: var(--charcoal); }
        .price .section-label { color: var(--rose-light); }
        .price .section-title { color: white; }
        .price-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
        }
        .price-card {
          background: rgba(255,255,255,0.05);
          padding: 48px 36px;
          border: 1px solid rgba(200,150,138,0.2);
          text-align: center;
          position: relative;
        }
        .price-card.featured {
          background: var(--rose);
          border-color: var(--rose);
        }
        .price-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--gold);
          color: white;
          font-size: 11px;
          padding: 4px 16px;
          letter-spacing: 0.1em;
          white-space: nowrap;
        }
        .price-name {
          font-family: 'Shippori Mincho', serif;
          font-size: 16px;
          color: rgba(255,255,255,0.7);
          margin-bottom: 24px;
          display: block;
        }
        .price-card.featured .price-name { color: white; }
        .price-amount {
          font-family: 'Shippori Mincho', serif;
          font-size: 36px;
          color: white;
          display: block;
          margin-bottom: 8px;
        }
        .price-tax {
          font-size: 12px;
          color: rgba(255,255,255,0.5);
        }
        .price-card.featured .price-tax { color: rgba(255,255,255,0.8); }

        /* FAQ */
        .faq-list { max-width: 720px; margin: 0 auto; }
        .faq-item {
          border-bottom: 1px solid var(--gold-light);
          padding: 28px 0;
        }
        .faq-q {
          font-family: 'Shippori Mincho', serif;
          font-size: 16px;
          color: var(--charcoal);
          margin-bottom: 16px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .faq-q::before {
          content: 'Q';
          color: var(--rose);
          font-size: 18px;
          flex-shrink: 0;
          margin-top: -2px;
        }
        .faq-a {
          font-size: 14px;
          color: var(--mid);
          line-height: 2;
          padding-left: 34px;
        }

        /* CTA */
        .cta-section {
          background: var(--blush);
          text-align: center;
          padding: 120px 40px;
        }
        .cta-section .section-label { justify-content: center; display: flex; }
        .cta-title {
          font-family: 'Shippori Mincho', serif;
          font-size: clamp(24px, 3vw, 40px);
          color: var(--charcoal);
          margin-bottom: 16px;
        }
        .cta-sub {
          font-size: 14px;
          color: var(--mid);
          margin-bottom: 48px;
        }
        .cta-price-note {
          font-size: 13px;
          color: var(--rose-deep);
          margin-bottom: 40px;
          font-family: 'Shippori Mincho', serif;
        }
        .cta-btn-wrap {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn-primary {
          background: var(--rose);
          color: white;
          padding: 20px 60px;
          font-size: 15px;
          letter-spacing: 0.15em;
          text-decoration: none;
          display: inline-block;
          transition: background 0.25s;
        }
        .btn-primary:hover { background: var(--rose-deep); }
        .btn-secondary {
          background: transparent;
          color: var(--charcoal);
          padding: 20px 60px;
          font-size: 15px;
          letter-spacing: 0.15em;
          text-decoration: none;
          display: inline-block;
          border: 1px solid var(--charcoal);
          transition: all 0.25s;
        }
        .btn-secondary:hover { background: var(--charcoal); color: white; }

        /* FORM */
        .form-section { background: var(--warm-white); }
        .form-wrap {
          max-width: 640px;
          margin: 0 auto;
        }
        .form-group {
          margin-bottom: 28px;
        }
        label {
          display: block;
          font-size: 13px;
          color: var(--mid);
          letter-spacing: 0.1em;
          margin-bottom: 10px;
        }
        label span {
          color: var(--rose);
          margin-left: 6px;
          font-size: 11px;
        }
        input, select, textarea {
          width: 100%;
          padding: 14px 18px;
          border: 1px solid var(--gold-light);
          background: var(--cream);
          font-family: 'Noto Sans JP', sans-serif;
          font-size: 14px;
          color: var(--charcoal);
          outline: none;
          transition: border-color 0.2s;
          font-weight: 300;
          appearance: none;
        }
        input:focus, select:focus, textarea:focus {
          border-color: var(--rose);
        }
        textarea { height: 120px; resize: vertical; }
        .form-submit {
          width: 100%;
          background: var(--rose);
          color: white;
          border: none;
          padding: 20px;
          font-size: 15px;
          letter-spacing: 0.2em;
          cursor: pointer;
          font-family: 'Noto Sans JP', sans-serif;
          font-weight: 400;
          transition: background 0.25s;
          margin-top: 12px;
        }
        .form-submit:hover { background: var(--rose-deep); }
        .form-note {
          font-size: 12px;
          color: var(--light);
          text-align: center;
          margin-top: 16px;
          line-height: 2;
        }

        /* FOOTER */
        footer {
          background: var(--charcoal);
          padding: 48px 40px;
          text-align: center;
        }
        .footer-logo {
          font-family: 'Shippori Mincho', serif;
          font-size: 18px;
          color: white;
          letter-spacing: 0.2em;
          margin-bottom: 16px;
        }
        .footer-logo span { color: var(--rose-light); }
        .footer-copy {
          font-size: 12px;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.1em;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          nav { padding: 16px 24px; }
          .hero { grid-template-columns: 1fr; }
          .hero-left { padding: 60px 28px; }
          .hero-right { display: none; }
          .features-grid, .comparison-tables, .recommend-grid, .price-cards {
            grid-template-columns: 1fr;
          }
          .about-inner { grid-template-columns: 1fr; }
          .about-img { height: 240px; }
          .container { padding: 0 24px; }
          section { padding: 72px 0; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <div className="nav-logo">渋<span>クリ</span> | クレオパトラノーズ</div>
        <a href="#form" className="nav-cta">無料カウンセリング予約</a>
      </nav>

      {/* HERO */}
      <section className="hero" style={{ padding: 0 }}>
        <div className="hero-left">
          <span className="hero-badge">CLEOPATRA NOSE / 鼻糸リフト</span>
          <h1 className="hero-catch">
            たった<em>10分</em>。<br />
            理想の鼻筋で、<br />
            洗練された横顔へ。
          </h1>
          <p className="hero-sub">
            鼻先・鼻筋を整え、上品で美しいフェイスラインへ。<br />
            形成外科専門医による安心のクレオパトラノーズ。
          </p>
          <div className="hero-pills">
            <span className="hero-pill">自然な鼻筋形成</span>
            <span className="hero-pill">切らずに美鼻</span>
            <span className="hero-pill">即日印象アップ</span>
          </div>
          <a href="#form" className="hero-btn">無料カウンセリングを予約する</a>
        </div>
        <div className="hero-right">
          <div className="hero-visual">
            <div className="hero-visual-circle">
              <div className="hero-visual-inner">
                切らない<br />美鼻施術<br />
                <span style={{ fontSize: '28px', fontFamily: "'Shippori Mincho', serif", color: 'var(--rose-deep)' }}>10分</span>
              </div>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-num">25年+</span>
                <span className="hero-stat-label">開院実績</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-num">40万件+</span>
                <span className="hero-stat-label">症例数</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="container">
          <span className="section-label">FEATURES</span>
          <h2 className="section-title">渋クリのクレオパトラノーズ<br />5つの特徴</h2>
          <div className="features-grid">
            {[
              { num: '01', title: '施術時間 約10分', desc: 'ランチタイムでも通える短時間施術。忙しい方でも気軽に受けていただけます。' },
              { num: '02', title: 'ダウンタイムほぼなし', desc: '軽い赤みや腫れが出る場合がありますが、ほとんどの方が翌日から通常生活可能です。' },
              { num: '03', title: '施術直後から変化を実感', desc: 'ダウンタイムを待たずに、施術直後から鼻筋の変化を感じていただけます。' },
              { num: '04', title: '自然でバレにくい仕上がり', desc: '「整形感が出ない」ナチュラルな美しさを重視。周囲に気づかれにくい自然な変化。' },
              { num: '05', title: '微調整が可能', desc: '一人ひとりの骨格や希望に合わせてデザインを設計。理想に近づく繊細な調整が可能です。' },
            ].map((f) => (
              <div key={f.num} className="feature-card">
                <span className="feature-num">{f.num}</span>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section>
        <div className="container">
          <div className="about-inner">
            <div className="about-img">
              <div className="about-img-label">
                クレオパトラノーズ<br />
                （鼻糸リフト）<br />
                <br />
                症例写真<br />
                ビフォーアフター
              </div>
            </div>
            <div>
              <span className="section-label">WHY SHIBUKURI</span>
              <h2 className="section-title">安心して任せられる<br />渋クリの理由</h2>
              <div className="divider"></div>
              <ul className="about-points">
                {[
                  { title: '開院25年以上・症例40万件以上の実績', desc: '長年にわたり多くの患者様に選ばれてきた確かな実績。鼻の繊細なデザインにも豊富な経験で対応します。' },
                  { title: '形成外科専門医が在籍', desc: '解剖学に基づいた安全かつ美しいデザインを実現。鼻は顔全体の印象を左右する重要なパーツです。' },
                  { title: 'オーダーメイドデザイン', desc: '「高すぎない自然な鼻」「横顔が綺麗に見える鼻」など、骨格や希望に合わせて設計します。' },
                  { title: '短時間施術で手軽に美鼻へ', desc: '施術時間は約10分。ダウンタイムも少なく、忙しい方にも最適な施術です。' },
                ].map((p) => (
                  <li key={p.title} className="about-point">
                    <div className="about-point-icon"></div>
                    <div>
                      <div className="about-point-title">{p.title}</div>
                      <div className="about-point-text">{p.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RECOMMEND */}
      <section style={{ background: 'var(--cream)' }}>
        <div className="container">
          <span className="section-label">FOR WHOM</span>
          <h2 className="section-title">こんな方におすすめです</h2>
          <div className="recommend-grid">
            {[
              '鼻筋を通して綺麗な横顔になりたい',
              '鼻が低く、顔にメリハリがない',
              '自然に鼻を高く見せたい',
              'ダウンタイムのある手術は避けたい',
              '周囲にバレずに印象を変えたい',
              'メイクだけでは限界を感じている',
            ].map((item) => (
              <div key={item} className="recommend-item">{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="comparison">
        <div className="container">
          <span className="section-label">COMPARISON</span>
          <h2 className="section-title">他の鼻施術との違い</h2>
          <div className="comparison-tables">
            <div className="comp-table-wrap">
              <div className="comp-table-title">クレオパトラノーズ vs ヒアルロン酸</div>
              <table>
                <thead>
                  <tr>
                    <th>項目</th>
                    <th>クレオパトラノーズ</th>
                    <th>ヒアルロン酸</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['仕組み', '糸で引き上げる', '注入で高さを出す'],
                    ['鼻先の高さ', '◎（出しやすい）', '△（限界あり）'],
                    ['鼻の細さ', '◎（シャープに）', '△（太く見えることも）'],
                    ['自然さ', '◎', '○'],
                    ['持続期間', '約6〜12ヶ月', '約6〜12ヶ月'],
                    ['ダウンタイム', '少なめ', 'ほぼなし'],
                  ].map(([item, a, b]) => (
                    <tr key={item}>
                      <td>{item}</td>
                      <td className="highlight">{a}</td>
                      <td>{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="comp-table-wrap">
              <div className="comp-table-title">クレオパトラノーズ vs 鼻中隔延長</div>
              <table>
                <thead>
                  <tr>
                    <th>項目</th>
                    <th>クレオパトラノーズ</th>
                    <th>鼻中隔延長</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['施術方法', '糸（切らない）', '外科手術（切る）'],
                    ['効果の大きさ', '○', '◎（大きく変化）'],
                    ['持続性', '△（6ヶ月〜1年）', '◎（半永久的）'],
                    ['ダウンタイム', '少ない', '長い（腫れ・固定あり）'],
                    ['リスク', '低め', '比較的高い'],
                    ['自然さ', '◎', '○（変化が大きい）'],
                  ].map(([item, a, b]) => (
                    <tr key={item}>
                      <td>{item}</td>
                      <td className="highlight">{a}</td>
                      <td>{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section className="price">
        <div className="container">
          <span className="section-label">PRICE</span>
          <h2 className="section-title">料金プラン</h2>
          <div className="price-cards">
            <div className="price-card">
              <span className="price-name">1本</span>
              <span className="price-amount">¥33,000</span>
              <span className="price-tax">税込</span>
            </div>
            <div className="price-card featured">
              <div className="price-badge">初回限定</div>
              <span className="price-name">1本 初回限定</span>
              <span className="price-amount">¥22,000</span>
              <span className="price-tax">税込</span>
            </div>
            <div className="price-card">
              <div className="price-badge">おすすめ</div>
              <span className="price-name">4本 初回限定</span>
              <span className="price-amount">¥54,780</span>
              <span className="price-tax">税込</span>
            </div>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', marginTop: '24px', textAlign: 'center', letterSpacing: '0.05em' }}>
            ※ 料金は予告なく変更になる場合がございます。カウンセリング時にご確認ください。
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="container">
          <span className="section-label">FAQ</span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>よくあるご質問</h2>
          <div className="faq-list">
            {[
              { q: '痛みはありますか？', a: '極細針を使用するため、軽いチクッとした痛み程度です。痛みが心配な方はお気軽にご相談ください。' },
              { q: 'ダウンタイムはありますか？', a: 'ほとんどありませんが、軽い赤みや腫れが出る場合があります。多くの方が翌日から通常通りの生活を送られています。' },
              { q: '周囲にバレませんか？', a: '自然な仕上がりを重視するため、周囲に気づかれにくいです。施術直後も大きな腫れや変色はほとんどありません。' },
              { q: '元に戻せますか？', a: '糸は時間の経過とともに体内に吸収され、自然に元の状態へ戻っていきます。効果の持続期間は約6〜12ヶ月（個人差あり）です。' },
            ].map((faq) => (
              <div key={faq.q} className="faq-item">
                <div className="faq-q">{faq.q}</div>
                <div className="faq-a">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="form-section" id="form">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>RESERVATION</span>
            <h2 className="section-title" style={{ marginBottom: '12px' }}>無料カウンセリング予約</h2>
            <p style={{ fontSize: '14px', color: 'var(--mid)' }}>
              まずはお気軽にカウンセリングへ。専門医がご要望をしっかりお伺いします。
            </p>
          </div>
          <div className="form-wrap">
            <div className="form-group">
              <label>お名前 <span>必須</span></label>
              <input type="text" placeholder="山田 花子" />
            </div>
            <div className="form-group">
              <label>メールアドレス <span>必須</span></label>
              <input type="email" placeholder="example@email.com" />
            </div>
            <div className="form-group">
              <label>電話番号 <span>必須</span></label>
              <input type="tel" placeholder="090-0000-0000" />
            </div>
            <div className="form-group">
              <label>ご希望の施術</label>
              <select>
                <option>クレオパトラノーズ（鼻糸リフト）</option>
                <option>その他</option>
              </select>
            </div>
            <div className="form-group">
              <label>ご希望日時・ご質問など</label>
              <textarea placeholder="ご希望の日時や、ご質問があればお気軽にどうぞ。"></textarea>
            </div>
            <button className="form-submit" type="button">カウンセリングを予約する</button>
            <p className="form-note">
              ご入力いただいた情報は、予約対応のみに使用いたします。<br />
              通常1〜2営業日以内にご連絡いたします。
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">渋<span>クリ</span></div>
        <p className="footer-copy">© 2025 渋谷美容外科クリニック All Rights Reserved.</p>
      </footer>
    </>
  );
}

