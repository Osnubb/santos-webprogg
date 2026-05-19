import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AUTH_STORAGE_KEY } from '../constants'
import { signInUser } from '../UserService'

function SignInPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('regaladosnts@gmail.com')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    try {
      const data = await signInUser({ email, password })
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(data.user))
      navigate('/dashboard')
    } catch (error) {
      setMessage(error.response?.data?.message || 'Unable to sign in right now.')
    } finally {
      setIsSubmitting(false)
    }
  }

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

      <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
        <label className="grid gap-2">
          <span className="text-sm font-bold text-slate-700">School Email</span>
          <input
            className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 outline-none transition focus:border-amber-400 focus:bg-white"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="regaladosnts@gmail.com"
            type="email"
            value={email}
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-bold text-slate-700">Password</span>
          <input
            className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 outline-none transition focus:border-amber-400 focus:bg-white"
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            type="password"
            value={password}
          />
        </label>

        <button
          className="mt-2 min-h-12 rounded-full bg-slate-950 px-5 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-slate-800 disabled:opacity-60"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? 'Signing In...' : 'Sign In'}
        </button>

        {message ? <p className="text-sm font-medium text-rose-600">{message}</p> : null}
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
