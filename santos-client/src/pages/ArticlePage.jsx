import { Link, useParams } from 'react-router-dom'
import articles from '../assets/article-content.js'

function ArticlePage() {
  const { articleId } = useParams()
  const article = articles.find((item) => item.id === articleId)

  if (!article) {
    return (
      <main className="px-5 py-12">
        <section className="rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-slate-400">
            Article Missing
          </p>
          <h1 className="mt-3 text-3xl font-black text-slate-950">
            This article is not available.
          </h1>
          <Link
            className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-white"
            to="/articles"
          >
            Back to Articles
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className="px-5 py-8">
      <article className="mx-auto max-w-3xl">
        <div className="grid min-h-56 place-items-center rounded-xl border-2 border-slate-300 bg-slate-200 p-6">
          <img
            className="max-h-36 max-w-40 rounded-full object-cover"
            src={article.image}
            alt=""
          />
        </div>
        <p className="mt-7 text-[11px] font-black uppercase tracking-[0.28em] text-slate-400">
          {article.tag}
        </p>
        <h1 className="mt-2 text-4xl font-black text-slate-950">
          {article.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">{article.body}</p>
        <Link
          className="mt-7 inline-flex rounded-full border border-slate-400 px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-slate-950"
          to="/articles"
        >
          Back to Articles
        </Link>
      </article>
    </main>
  )
}

export default ArticlePage
