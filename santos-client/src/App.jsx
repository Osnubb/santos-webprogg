import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const studentDetails = [
    { label: 'Name', value: 'Regalado Santos Jr.' },
    { label: 'Email', value: 'regaladosnts@gmail.com' },
    { label: 'Section', value: 'INF 233' },
  ]

  return (
    <main className="page-shell">
      <section className="intro" aria-labelledby="student-name">
        <div className="hero-mark" aria-hidden="true">
          <img src={heroImg} className="hero-base" width="170" height="179" alt="" />
          <img src={reactLogo} className="hero-react" alt="" />
          <img src={viteLogo} className="hero-vite" alt="" />
        </div>

        <div className="intro-copy">
          <p className="eyebrow">Lab Activity 1</p>
          <h1 id="student-name">Regalado Santos Jr.</h1>
          <p>
            A React Vite homepage created for Web Programming, highlighting
            student information and the completed setup activity.
          </p>
        </div>
      </section>

      <section className="details" aria-label="Student details">
        {studentDetails.map((detail) => (
          <article className="detail-card" key={detail.label}>
            <span>{detail.label}</span>
            <strong>{detail.value}</strong>
          </article>
        ))}
      </section>

      <section className="summary" aria-labelledby="activity-title">
        <div>
          <h2 id="activity-title">React Vite Project Setup</h2>
          <p>
            Node.js, npm, and the React Vite project are ready, with the
            homepage customized for the submitted student profile.
          </p>
        </div>
        <div className="tech-stack" aria-label="Technology stack">
          <span>
            <img src={viteLogo} alt="" />
            Vite
          </span>
          <span>
            <img src={reactLogo} alt="" />
            React
          </span>
        </div>
      </section>
    </main>
  )
}

export default App
