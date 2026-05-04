import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import Button from '../components/Button.jsx'

const stats = [
  { value: '03', label: 'Pages' },
  { value: '06', label: 'Components' },
  { value: '24', label: 'Rubric Points' },
  { value: '01', label: 'Custom Logo' },
]

const cards = [
  {
    title: 'Page Layout',
    body: 'Clean sections, simple spacing, and a layout that is easy to follow.',
    image: reactLogo,
  },
  {
    title: 'Page Links',
    body: 'Quick access to the main pages through a clear top navigation.',
    image: viteLogo,
  },
  {
    title: 'My Content',
    body: 'Personal details, project notes, and visuals placed in one simple page.',
    image: '/santos-logo.png',
  },
]

function HomePage() {
  return (
    <main>
      <section className="grid gap-8 border-b-4 border-double border-slate-300 px-5 py-8 md:grid-cols-[1fr_0.95fr] md:items-center">
        <div>
          <p className="mb-4 text-[11px] font-black uppercase tracking-[0.28em] text-slate-400">
            Web Layout
          </p>
          <h1 className="max-w-xl text-3xl font-black leading-tight text-slate-950 md:text-4xl">
            Welcome to Santos Web Programming Layout
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">
            A component-based React landing page for Lab Activity 3. Built with
            Tailwind CSS, React Router, reusable components, and custom student
            content for Regalado Santos Jr.
          </p>
          <div className="mt-6">
            <Button href="/about">Learn More</Button>
          </div>
        </div>

        <div className="rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 p-4">
          <div className="grid min-h-48 place-items-center rounded-lg bg-slate-200">
            <div className="grid size-24 place-items-center rounded-full bg-white p-1 shadow-inner">
              <img
                className="size-full rounded-full object-cover"
                src="/santos-logo.png"
                alt="Regalado Santos Jr. logo"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-4 border-double border-slate-300 px-5 py-7">
        <p className="mb-3 text-[11px] font-black uppercase tracking-[0.28em] text-slate-400">
          KPI Section
        </p>
        <h2 className="mb-5 text-lg font-black text-slate-950">
          Quick overview blocks
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article
              className="rounded-xl border-2 border-slate-300 bg-white px-5 py-4 shadow-sm"
              key={stat.label}
            >
              <p className="text-xl font-black text-slate-950">{stat.value}</p>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-7">
        <p className="mb-3 text-[11px] font-black uppercase tracking-[0.28em] text-slate-400">
          Feature Cards
        </p>
        <h2 className="mb-5 text-lg font-black text-slate-950">
          Simple wireframe cards
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <article
              className="rounded-xl border-2 border-slate-300 bg-white p-4 shadow-sm"
              key={card.title}
            >
              <div className="grid h-36 place-items-center rounded-lg bg-slate-200">
                <img
                  className="max-h-20 max-w-20 rounded-full object-cover"
                  src={card.image}
                  alt=""
                />
              </div>
              <h3 className="mt-4 font-black text-slate-950">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default HomePage
