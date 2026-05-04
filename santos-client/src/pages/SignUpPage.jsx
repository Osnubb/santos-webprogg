import { Link } from 'react-router-dom'

const signUpFields = [
  { label: 'Full Name', type: 'text', placeholder: 'Regalado Santos Jr.' },
  { label: 'Section', type: 'text', placeholder: 'INF 233' },
  { label: 'Email Address', type: 'email', placeholder: 'regaladosnts@gmail.com' },
  { label: 'Password', type: 'password', placeholder: 'Create a password' },
]

function SignUpPage() {
  return (
    <section className="rounded-[24px] border border-slate-200 bg-white p-6 md:p-8">
      <p className="text-[11px] font-black uppercase tracking-[0.28em] text-teal-600">
        Registration
      </p>
      <h2 className="mt-3 font-serif text-3xl text-slate-950 md:text-4xl">
        Create your account
      </h2>
      <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
        Fill in the registration details to make a clean sample sign up page
        for this activity.
      </p>

      <form className="mt-8 grid gap-5 md:grid-cols-2">
        {signUpFields.map((field) => (
          <label className="grid gap-2 md:odd:col-span-1 md:even:col-span-1" key={field.label}>
            <span className="text-sm font-bold text-slate-700">{field.label}</span>
            <input
              className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 outline-none transition focus:border-teal-500 focus:bg-white"
              placeholder={field.placeholder}
              type={field.type}
            />
          </label>
        ))}

        <label className="grid gap-2 md:col-span-2">
          <span className="text-sm font-bold text-slate-700">Short Bio</span>
          <textarea
            className="min-h-28 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-teal-500 focus:bg-white"
            placeholder="Share a short introduction for your profile."
          />
        </label>

        <button
          className="md:col-span-2 min-h-12 rounded-full bg-teal-700 px-5 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-teal-800"
          type="button"
        >
          Register Account
        </button>
      </form>

      <div className="mt-6 flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <span>Already registered?</span>
        <Link className="font-bold text-teal-700 hover:text-teal-800" to="/signin">
          Go to sign in
        </Link>
      </div>
    </section>
  )
}

export default SignUpPage
