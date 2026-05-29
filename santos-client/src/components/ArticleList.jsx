import { Link } from 'react-router-dom'

function ArticleList({ articles }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {articles.map((article) => (
        <article
          className="rounded-xl border-2 border-slate-300 bg-white p-4 shadow-sm"
          key={article.id}
        >
          <div className="grid h-32 place-items-center rounded-lg bg-slate-200">
            <img
              className="max-h-20 max-w-24 rounded-full object-cover"
              src={article.image}
              alt=""
            />
          </div>
          <p className="mt-4 text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">
            {article.tag}
          </p>
          <h2 className="mt-1 text-xl font-black text-slate-950">
            {article.title}
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            {article.excerpt}
          </p>
          <Link
            className="mt-4 inline-flex rounded-full bg-slate-950 px-4 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-white transition hover:bg-slate-800"
            to={`/articles/${article.id}`}
          >
            Read More
          </Link>
        </article>
      ))}
    </div>
  )
}

export default ArticleList
