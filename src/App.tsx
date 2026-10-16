import { useState } from 'react'
import { experiences, organizations, photos, profile, stories } from './content'
import type { Photo } from './content'

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>
}

function PhotoFigure({ photo, portrait = false }: { photo: Photo; portrait?: boolean }) {
  const [failedSource, setFailedSource] = useState<string | null>(null)
  const showPhoto = Boolean(photo.src && failedSource !== photo.src)
  if (!showPhoto && !portrait) return null
  return <figure className={portrait ? 'portrait' : 'story-photo'}>
    {showPhoto ? <img src={photo.src!} alt={photo.alt} width={photo.width} height={photo.height}
      onError={() => setFailedSource(photo.src)} loading={portrait ? 'eager' : 'lazy'} style={{ objectPosition: photo.position }} /> :
      <div className="portrait-fallback" aria-hidden="true">
        <div className="portrait-top"><span>SEBUAH PERKENALAN</span><span>01 / H</span></div>
        <span className="monogram">h<span>.</span></span>
        <div className="portrait-bottom"><span>Gizi.<br />Edukasi.<br />Masyarakat.</span><span className="portrait-mark">H</span></div>
      </div>}
    <figcaption>{photo.caption}</figcaption>
  </figure>
}

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <p className="eyebrow section-label"><span>{number}</span>{children}</p>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigation = [['Tentang', 'tentang'], ['Pengalaman', 'pengalaman'], ['Karya', 'karya'], ['Kontak', 'kontak']]
  return <>
    <a className="skip-link" href="#utama">Langsung ke isi</a>
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href="#utama" aria-label="Hawa, kembali ke awal">Hawa<span>.</span></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Tutup' : 'Menu'}<span aria-hidden="true">{menuOpen ? '−' : '+'}</span></button>
        <nav id="navigation" aria-label="Navigasi utama" className={menuOpen ? 'navigation is-open' : 'navigation'}>
          {navigation.map(([label, target]) => <a key={target} href={`#${target}`} onClick={() => setMenuOpen(false)}>{label}{target === 'kontak' && <Arrow />}</a>)}
        </nav>
      </div>
    </header>
    <main id="utama">
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="small-line" />PORTFOLIO PERSONAL</p>
          <p className="hello">Halo, saya {profile.displayName}.</p>
          <h1 id="hero-title">{profile.nameLines.map((line, index) => <span className="name-line" key={line}>{line}{index === profile.nameLines.length - 1 && <span className="name-dot">.</span>}</span>)}</h1>
          <p className="hero-description">{profile.introduction}</p>
          <div className="hero-actions"><a className="button primary" href="#pengalaman">Lihat pengalaman <Arrow /></a>{profile.cv && <a className="text-link" href={profile.cv} download>Unduh CV <span aria-hidden="true">↓</span></a>}</div>
          <div className="hero-footnote"><span>LATAR PENDIDIKAN</span><p>Gizi, Universitas Sriwijaya</p></div>
        </div>
        <PhotoFigure photo={photos.portrait} portrait />
      </section>

      <section id="tentang" className="container section about" aria-labelledby="about-title">
        <div className="section-side"><SectionLabel number="01">Tentang Hawa</SectionLabel><h2 id="about-title">Berangkat dari gizi,<br /><em>belajar dari lapangan.</em></h2></div>
        <div className="about-content">{profile.about.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          <div className="education"><span className="education-mark" aria-hidden="true">↗</span><div><p className="eyebrow">PENDIDIKAN</p><h3>{profile.education.institution}</h3><p>{profile.education.program}</p><p className="education-meta">{profile.education.period}<span>IPK {profile.education.gpa}</span></p></div></div>
        </div>
      </section>

      <section id="pengalaman" className="container section experience" aria-labelledby="experience-title">
        <div className="section-heading"><div><SectionLabel number="02">Pengalaman terpilih</SectionLabel><h2 id="experience-title">Belajar, terlibat,<br /><em>dan berkontribusi.</em></h2></div><p>Dari layanan kesehatan hingga kegiatan masyarakat. Beberapa pengalaman yang membentuk cara saya bekerja.</p></div>
        <div className="experience-list">{experiences.map(item => <article className="experience-row" key={item.institution}>
          <div className="experience-date"><span className="year">{item.year}</span><span>{item.location}</span></div>
          <div className="experience-role"><p className="eyebrow">{item.type}</p><h3>{item.institution}</h3></div>
          <ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul>
        </article>)}</div>
      </section>

      <section id="karya" className="work-section" aria-labelledby="work-title"><div className="container section">
        <div className="section-heading"><div><SectionLabel number="03">Karya & kegiatan</SectionLabel><h2 id="work-title">Cerita di balik<br /><em>setiap keterlibatan.</em></h2></div><p>Pilihan kegiatan dalam edukasi, kewirausahaan, dan komunikasi kesehatan.</p></div>
        <div className="stories">{stories.map(story => <article className="story" key={story.number}>
          <div className="story-top"><span className="story-number">{story.number}</span><span>{story.year}</span></div>
          <PhotoFigure photo={photos[story.photo]} />
          <p className="eyebrow story-category">{story.category}</p><h3>{story.title}</h3><p className="story-description">{story.description}</p><p className="story-note">{story.note}</p>
        </article>)}</div>
      </div></section>

      <section className="container section organizations" aria-labelledby="organizations-title">
        <div className="section-side"><SectionLabel number="04">Organisasi & kepemimpinan</SectionLabel><h2 id="organizations-title">Tumbuh bersama<br /><em>orang lain.</em></h2><p>Ruang untuk berkolaborasi, mengoordinasikan kegiatan, dan belajar mengambil tanggung jawab.</p></div>
        <div>{organizations.map(item => <article className="organization" key={item.name}><p className="organization-period">{item.period}</p><h3>{item.name}</h3><p className="organization-role">{item.role}</p><p>{item.description}</p></article>)}</div>
      </section>

      <section id="kontak" className="contact-section" aria-labelledby="contact-title"><div className="container contact-inner">
        <div><SectionLabel number="05">Mari terhubung</SectionLabel><h2 id="contact-title">Awal yang baik,<br /><em>dari sebuah percakapan.</em></h2><p>Saya terbuka untuk peluang kerja di bidang gizi dan kesehatan, serta kolaborasi dalam edukasi masyarakat.</p></div>
        <div className="contact-links"><a className="email-link" href={`mailto:${profile.email}`}><span className="eyebrow">KIRIM EMAIL</span><span>{profile.email} <Arrow /></span></a><div className="contact-secondary">{profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>}{profile.cv && <a href={profile.cv} download>Unduh CV <span aria-hidden="true">↓</span></a>}</div></div>
      </div></section>
    </main>
    <footer className="container footer"><a className="wordmark" href="#utama">Hawa<span>.</span></a><p>{profile.name}<span>Gizi, edukasi, dan cerita dari lapangan.</span></p><a href="#utama" className="back-top">Kembali ke atas <span aria-hidden="true">↑</span></a></footer>
  </>
}
