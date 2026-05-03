import viteLogo from '../assets/vite.svg'

const profile = [
  { label: 'Student', value: 'Regalado Santos Jr.' },
  { label: 'Section', value: 'INF 233' },
  { label: 'Email', value: 'regaladosnts@gmail.com' },
]

const skills = [
  'React component structure',
  'Page routing with react-router-dom',
  'Responsive interface design',
  'Content planning for landing pages',
]

function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 lg:px-0">
      <section className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm">
          <img className="mb-8 size-16" src={viteLogo} alt="Vite logo" />
          <h1 className="text-4xl font-black text-slate-950">About the App</h1>
          <p className="mt-4 leading-8 text-slate-600">
            This page explains the purpose of the project and documents the
            student information required for the activity. The design focuses on
            clean navigation, readable content, and reusable page sections.
          </p>
        </div>

        <div className="grid gap-4">
          {profile.map((item) => (
            <article
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              key={item.label}
            >
              <p className="text-sm font-black uppercase tracking-[0.18em] text-teal-700">
                {item.label}
              </p>
              <p className="mt-2 break-words text-2xl font-black text-slate-950">
                {item.value}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-lg border border-slate-200 bg-white p-7 shadow-sm">
        <h2 className="text-2xl font-black text-slate-950">Project Goals</h2>
        <p className="mt-3 max-w-3xl leading-8 text-slate-600">
          Lab Activity 2 strengthens the original Vite setup by introducing a
          landing page pattern, shared components, multiple routed pages, and a
          more polished visual identity.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {skills.map((skill) => (
            <p
              className="rounded-lg bg-slate-50 p-4 font-semibold text-slate-700"
              key={skill}
            >
              {skill}
            </p>
          ))}
        </div>
      </section>
    </main>
  )
}

export default AboutPage
