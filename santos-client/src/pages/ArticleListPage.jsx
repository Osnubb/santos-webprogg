import articles from '../assets/article-content.js'
import ArticleList from '../components/ArticleList.jsx'

function ArticleListPage() {
  return (
    <main className="px-5 py-8">
      <section className="mb-7">
        <p className="mb-3 text-[11px] font-black uppercase tracking-[0.28em] text-slate-400">
          Article List
        </p>
        <h1 className="max-w-2xl text-3xl font-black leading-tight text-slate-950 md:text-4xl">
          Project notes and short writeups
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500">
          These articles are loaded from one content file and passed into a
          reusable list component.
        </p>
      </section>

      <ArticleList articles={articles} />
    </main>
  )
}

export default ArticleListPage
