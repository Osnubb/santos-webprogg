import { Link } from 'react-router-dom'

const signInFields = [
  { label: 'School Email', type: 'email', placeholder: 'regaladosnts@gmail.com' },
  { label: 'Password', type: 'password', placeholder: 'Enter your password' },
]

function SignInPage() {
  return (
    <section className="rounded-[24px] border border-slate-200 bg-white p-6 md:p-8">
      <p className="text-[11px] font-black uppercase tracking-[0.28em] text-amber-500">
        Sign In
      </p>
      <h2 className="mt-3 font-serif text-3xl text-slate-950 md:text-4xl">
        Access your account
      </h2>
      <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
        Use your student email and password to open the dashboard and continue
        exploring the project pages.
      </p>

      <form className="mt-8 grid gap-5">
        {signInFields.map((field) => (
          <label className="grid gap-2" key={field.label}>
            <span className="text-sm font-bold text-slate-700">{field.label}</span>
            <input
              className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 outline-none transition focus:border-amber-400 focus:bg-white"
              placeholder={field.placeholder}
              type={field.type}
            />
          </label>
        ))}

        <button
          className="mt-2 min-h-12 rounded-full bg-slate-950 px-5 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-slate-800"
          type="button"
        >
          Sign In
        </button>
      </form>

      <div className="mt-6 flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <span>Need an account?</span>
        <Link className="font-bold text-amber-600 hover:text-amber-700" to="/signup">
          Create one here
        </Link>
      </div>
    </section>
  )
}

export default SignInPage
