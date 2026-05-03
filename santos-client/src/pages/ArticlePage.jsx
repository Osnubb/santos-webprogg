import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'

const articles = [
  {
    title: 'Why Components Matter',
    image: reactLogo,
    body: 'Components keep repeated interface patterns in one place. The navbar, button, and layout can be improved once and reused across every page.',
  },
  {
    title: 'Routing Creates Real Navigation',
    image: viteLogo,
    body: 'React Router lets the app move between Home, About, and Articles without reloading the page. It makes the project feel like a complete website.',
  },
  {
    title: 'Design Supports the Content',
    image: heroImg,
    body: 'The revised layout uses spacing, contrast, imagery, and a simple custom logo so the landing page is easier to scan on desktop and mobile screens.',
  },
]

function ArticlePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 lg:px-0">
      <section className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-teal-700">
          Articles
        </p>
        <h1 className="text-4xl font-black text-slate-950 md:text-5xl">
          Notes from the Lab Activity 2 build
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          These short writeups explain the main improvements made to the
          project: reusable components, routing, visual content, and responsive
          design.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {articles.map((article) => (
          <article
            className="flex min-h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
            key={article.title}
          >
            <div className="grid h-36 place-items-center rounded-lg bg-slate-50">
              <img
                className="max-h-24 max-w-28 object-contain"
                src={article.image}
                alt=""
              />
            </div>
            <h2 className="mt-6 text-2xl font-black text-slate-950">
              {article.title}
            </h2>
            <p className="mt-3 leading-7 text-slate-600">{article.body}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default ArticlePage
