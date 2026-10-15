import { useState } from 'react';

const instagramUrl = 'https://www.instagram.com/ceeydrip/';
const whatsappUrl = 'https://wa.me/2348168561118';
const logoUrl = 'https://ugc.production.linktr.ee/zVOdgcbrTmiRXXURRLeW_Z0h4rR54cDE1a9lv';

const categories = [
  { name: 'Gold', count: '01', note: 'Everyday shine, with a little more meaning.', icon: '✳' },
  { name: 'Custom made', count: '02', note: 'Bring your idea. Make it your own.', icon: '◈' },
  { name: 'Diamonds', count: '03', note: 'The kind of sparkle that stays with you.', icon: '✧' },
  { name: 'Watches', count: '04', note: 'A good one is always worth the time.', icon: '◷' },
];

const posts = [
  { shortcode: 'DeHwUFwOP0Y', title: 'Watches', eyebrow: 'FROM THE WATCHES HIGHLIGHT', description: 'A closer look at the pieces people keep coming back for.', image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=85', alt: 'Classic wristwatch, visual placeholder' },
  { shortcode: 'Dd_CQxqOnao', title: 'Gold', eyebrow: 'FROM THE GOLD HIGHLIGHT', description: 'The small details are the whole point.', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1000&q=85', alt: 'Gold jewellery, visual placeholder' },
  { shortcode: 'Dd5_JboOrTU', title: 'Custom made', eyebrow: 'FROM THE CUSTOM MADE HIGHLIGHT', description: 'One idea, made personal.', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1000&q=85', alt: 'Gold necklace, visual placeholder' },
];

function BrandMark({ small = false }) {
  return (
    <a className={`brand-mark ${small ? 'brand-mark-small' : ''}`} href="#home" aria-label="Ceeydrip Jewelry home">
      <img src={logoUrl} alt="Ceeydrip Jewelry logo" />
      <span>CEEYDRIP<small>JEWELRY STORE</small></span>
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="header" id="home">
      <button className="menu-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      <BrandMark />
      <nav className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
        <a href="#collections" onClick={closeMenu}>Collections</a>
        <a href="#custom-made" onClick={closeMenu}>Custom made</a>
        <a href="#from-instagram" onClick={closeMenu}>From Instagram</a>
        <a className="nav-contact" href={`${whatsappUrl}?text=${encodeURIComponent('Hi Ceeydrip, I found your website and would love to make an enquiry.')}`} target="_blank" rel="noreferrer" onClick={closeMenu}>Chat with us <span>↗</span></a>
      </nav>
    </header>
  );
}

function InstagramPost({ post }) {
  const permalink = `${instagramUrl}p/${post.shortcode}/`;
  return (
    <article className="post-card">
      <a className="post-visual" href={permalink} target="_blank" rel="noreferrer" aria-label={`See Ceeydrip's ${post.title} posts on Instagram`}>
        <div className="visual-fallback" aria-hidden="true"><span className={`fallback-icon fallback-${post.title.toLowerCase().replaceAll(' ', '-')}`}>{post.title === 'Watches' ? '◷' : post.title === 'Gold' ? '✳' : '◈'}</span><span className="fallback-word">CEEYDRIP</span></div>
        <img src={post.image} alt={post.alt} loading="lazy" onError={(event) => { event.currentTarget.hidden = true; }} />
        <span className="image-placeholder-label">VISUAL PLACEHOLDER</span><span className="post-open">VIEW ON INSTAGRAM ↗</span>
      </a>
      <div className="post-details"><div><span>{post.eyebrow}</span><h3>{post.title}</h3><p>{post.description}</p></div><a href={permalink} target="_blank" rel="noreferrer" aria-label={`View ${post.title} post on Instagram`}>↗</a></div>
    </article>
  );
}

function App() {
  const [toast, setToast] = useState('');
  const sendEnquiry = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '').trim();
    const kind = String(form.get('kind') || '').trim();
    const idea = String(form.get('idea') || '').trim();
    const message = `Hi Ceeydrip, my name is ${name}. I'm interested in ${kind}. ${idea}`;
    window.open(`${whatsappUrl}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setToast('Your message is ready in WhatsApp. Send it there to reach Ceeydrip.');
    event.currentTarget.reset();
    window.setTimeout(() => setToast(''), 4500);
  };

  return (
    <>
      <div className="topline"><span>GOLD · CUSTOM MADE · DIAMONDS · WATCHES</span><span className="topline-location">LAGOS & IBADAN, NIGERIA</span></div>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow"><span className="gold-dot" /> CEEYDRIP JEWELRY</span>
            <h1>Your next<br />favourite <em>piece.</em></h1>
            <p className="hero-intro">Gold, custom-made pieces, diamonds and watches. Find something that feels like you — or bring us the idea that’s already on your mind.</p>
            <div className="hero-buttons"><a href="#collections" className="button button-gold">Explore the collections <span>↗</span></a><a className="quiet-link" href={`${whatsappUrl}?text=${encodeURIComponent('Hi Ceeydrip, I would like to ask about a custom-made piece.')}`} target="_blank" rel="noreferrer">Ask about a custom piece</a></div>
            <div className="service-note"><span className="service-star">✳</span><p>Serving clients across Nigeria & beyond<br /><small>Based in Lagos & Ibadan, Nigeria</small></p></div>
          </div>
          <div className="hero-art" aria-label="Ceeydrip Jewelry Instagram profile and brand categories">
            <div className="hero-glow" />
            <div className="hero-logo"><img src={logoUrl} alt="Ceeydrip's black and gold jewelry store emblem" /><span>THE CEEYDRIP SIGNATURE</span></div>
            <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
            <span className="floating-label label-gold">GOLD <b>✳</b></span><span className="floating-label label-custom">CUSTOM MADE <b>◈</b></span><span className="floating-label label-diamond">DIAMONDS <b>✧</b></span><span className="floating-label label-watch">WATCHES <b>◷</b></span>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="ig-badge"><span>◎</span><span>@ceeydrip<small>ON INSTAGRAM ↗</small></span></a>
            <span className="hero-coordinate">06° 27′ N &nbsp; 03° 23′ E</span>
          </div>
          <div className="hero-index"><span>01</span><i /> PIECES WITH A PERSONAL TOUCH</div>
        </section>

        <section className="proof-strip" aria-label="Ceeydrip collections"><span>PERSONAL PIECES, MADE TO STAY WITH YOU</span><i>✳</i><span>ROOTED IN NIGERIA</span><i>✳</i><span>WORN WHEREVER YOU GO</span></section>

        <section className="collections section-wrap" id="collections">
          <div className="section-heading"><div><p className="eyebrow">WHAT ARE YOU LOOKING FOR?</p><h2>A little something <em>special.</em></h2></div><a className="outline-link" href={instagramUrl} target="_blank" rel="noreferrer">See it all on Instagram <span>↗</span></a></div>
          <div className="category-grid">{categories.map((category) => <a className="category-card" key={category.name} href={`${whatsappUrl}?text=${encodeURIComponent(`Hi Ceeydrip, I'd love to see your ${category.name.toLowerCase()} collection.`)}`} target="_blank" rel="noreferrer"><span className="category-index">{category.count}</span><span className="category-icon">{category.icon}</span><span className="category-bottom"><span><strong>{category.name}</strong><small>{category.note}</small></span><span className="category-arrow">↗</span></span></a>)}</div>
          <p className="collection-footnote">Want to see the latest pieces? The Instagram highlights are the best place to start: <a href={`${instagramUrl}stories/highlights/18079390171499667/`} target="_blank" rel="noreferrer">Watches</a> · <a href={`${instagramUrl}stories/highlights/18020705002324295/`} target="_blank" rel="noreferrer">Gold</a> · <a href={`${instagramUrl}stories/highlights/17978638547939051/`} target="_blank" rel="noreferrer">Custom made</a> · <a href={`${instagramUrl}stories/highlights/17880093560402353/`} target="_blank" rel="noreferrer">Diamonds</a></p>
        </section>

        <section className="custom-section" id="custom-made"><div className="custom-inner section-wrap"><div className="custom-symbol">◈</div><div className="custom-copy"><p className="eyebrow">THE CUSTOM MADE HIGHLIGHT</p><h2>You think it.<br />We make it <em>yours.</em></h2><p>Got a design in mind, a name to set in gold, or a detail you want just right? Tell Ceeydrip what you’re imagining and start the conversation directly on WhatsApp.</p><a className="button button-light" href={`${whatsappUrl}?text=${encodeURIComponent('Hi Ceeydrip, I have an idea for a custom-made jewellery piece. Can we discuss it?')}`} target="_blank" rel="noreferrer">Start a custom enquiry <span>↗</span></a></div><div className="custom-aside"><span>ONE IDEA</span><i>✳</i><span>MADE PERSONAL</span></div></div></section>

        <section className="instagram-section section-wrap" id="from-instagram">
          <div className="section-heading instagram-heading"><div><p className="eyebrow">REAL PIECES. REAL POSTS.</p><h2>From <em>@ceeydrip.</em></h2><p className="section-subtitle">A few recent looks, straight from the Ceeydrip Instagram.</p></div><a className="outline-link" href={instagramUrl} target="_blank" rel="noreferrer">Follow on Instagram <span>↗</span></a></div>
          <div className="posts-grid">{posts.map((post) => <InstagramPost key={post.shortcode} post={post} />)}</div>
        </section>

        <section className="order-section section-wrap" id="enquire"><div className="order-copy"><p className="eyebrow">LET’S FIND YOUR PIECE</p><h2>Tell us what<br />caught your <em>eye.</em></h2><p>Pick a starting point and send a quick note. It opens a WhatsApp message to Ceeydrip so you can ask about availability, details and current pricing.</p><a href={instagramUrl} className="ig-follow" target="_blank" rel="noreferrer"><BrandMark small /><span>VISIT INSTAGRAM <b>↗</b></span></a></div><form className="order-form" onSubmit={sendEnquiry}><label>Your name<input name="name" autoComplete="name" placeholder="Name" required /></label><label>I'm asking about<select name="kind" defaultValue="" required><option value="" disabled>Select a collection</option><option>Gold jewellery</option><option>A custom-made design</option><option>Diamond jewellery</option><option>A watch</option><option>Something else</option></select></label><label>Anything else?<textarea name="idea" rows="3" placeholder="Share a detail, a reference, or a question." /></label><button className="button button-gold" type="submit">Continue to WhatsApp <span>↗</span></button><small>Your message opens in WhatsApp for you to review and send.</small></form></section>

        <section className="closing"><span className="closing-top">CEEYDRIP JEWELRY <i>✳</i> SERVING NIGERIA & BEYOND</span><h2>Gold looks good<br /><em>on your story.</em></h2><a className="button button-light" href={`${whatsappUrl}?text=${encodeURIComponent('Hi Ceeydrip, I would like to enquire about a jewellery or watch piece.')}`} target="_blank" rel="noreferrer">Find your next piece <span>↗</span></a><span className="closing-star">✳</span></section>
      </main>
      <footer className="footer"><div className="footer-top"><div><BrandMark /><p>Gold · Custom made · Diamonds · Watches</p></div><div className="footer-location">LAGOS & IBADAN<br />NIGERIA</div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} CEEYDRIP JEWELRY</span><div><a href={instagramUrl} target="_blank" rel="noreferrer">INSTAGRAM ↗</a><a href={whatsappUrl} target="_blank" rel="noreferrer">WHATSAPP ↗</a></div><span>MADE PERSONAL.</span></div></footer>
      {toast && <div className="toast" role="status">{toast}</div>}
    </>
  );
}

export default App;
