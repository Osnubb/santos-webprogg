import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AUTH_STORAGE_KEY } from '../constants'
import { signUpUser } from '../UserService'

const initialForm = {
  fullName: 'Regalado Santos Jr.',
  section: 'INF 233',
  email: 'regaladosnts@gmail.com',
  username: '',
  contactNumber: '',
  age: '',
  password: '',
  shortBio: '',
  role: 'Editor',
  gender: 'Prefer not to say',
}

function SignUpPage() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [serverMessage, setServerMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    setSubmitted(false)
    setServerMessage('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const nextErrors = {}

    if (formData.password.length < 8) {
      nextErrors.password = 'Password must be at least 8 characters.'
    }

    if (!/^\d{11}$/.test(formData.contactNumber)) {
      nextErrors.contactNumber = 'Contact number must be exactly 11 digits.'
    }

    if (!/^\d+$/.test(formData.age)) {
      nextErrors.age = 'Age must be a number only.'
    }

    if (/\s/.test(formData.username)) {
      nextErrors.username = 'Username must not contain spaces.'
    }

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false)
      return
    }

    try {
      const data = await signUpUser(formData)
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(data.user))
      setSubmitted(true)
      setServerMessage('Account created successfully. You can now continue to sign in.')
    } catch (error) {
      setSubmitted(false)
      setServerMessage(error.response?.data?.message || 'Unable to create account right now.')
    }
  }

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

      <form className="mt-8 grid gap-5 md:grid-cols-2" onSubmit={handleSubmit}>
        <label className="grid gap-2">
          <span className="text-sm font-bold text-slate-700">Full Name</span>
          <input
            className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 outline-none transition focus:border-teal-500 focus:bg-white"
            name="fullName"
            onChange={handleChange}
            placeholder="Regalado Santos Jr."
            type="text"
            value={formData.fullName}
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-bold text-slate-700">Section</span>
          <input
            className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 outline-none transition focus:border-teal-500 focus:bg-white"
            name="section"
            onChange={handleChange}
            placeholder="INF 233"
            type="text"
            value={formData.section}
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-bold text-slate-700">Email Address</span>
          <input
            className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 outline-none transition focus:border-teal-500 focus:bg-white"
            name="email"
            onChange={handleChange}
            placeholder="regaladosnts@gmail.com"
            type="email"
            value={formData.email}
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-bold text-slate-700">Username</span>
          <input
            className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 outline-none transition focus:border-teal-500 focus:bg-white"
            name="username"
            onChange={handleChange}
            placeholder="regaladosnts"
            type="text"
            value={formData.username}
          />
          {errors.username ? (
            <span className="text-sm font-medium text-rose-600">{errors.username}</span>
          ) : null}
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-bold text-slate-700">Contact Number</span>
          <input
            className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 outline-none transition focus:border-teal-500 focus:bg-white"
            name="contactNumber"
            onChange={handleChange}
            placeholder="09123456789"
            type="text"
            value={formData.contactNumber}
          />
          {errors.contactNumber ? (
            <span className="text-sm font-medium text-rose-600">{errors.contactNumber}</span>
          ) : null}
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-bold text-slate-700">Age</span>
          <input
            className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 outline-none transition focus:border-teal-500 focus:bg-white"
            name="age"
            onChange={handleChange}
            placeholder="20"
            type="text"
            value={formData.age}
          />
          {errors.age ? (
            <span className="text-sm font-medium text-rose-600">{errors.age}</span>
          ) : null}
        </label>

        <label className="grid gap-2 md:col-span-2">
          <span className="text-sm font-bold text-slate-700">Password</span>
          <input
            className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 outline-none transition focus:border-teal-500 focus:bg-white"
            name="password"
            onChange={handleChange}
            placeholder="Create a password"
            type="password"
            value={formData.password}
          />
          {errors.password ? (
            <span className="text-sm font-medium text-rose-600">{errors.password}</span>
          ) : null}
        </label>

        <label className="grid gap-2 md:col-span-2">
          <span className="text-sm font-bold text-slate-700">Short Bio</span>
          <textarea
            className="min-h-28 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-teal-500 focus:bg-white"
            name="shortBio"
            onChange={handleChange}
            placeholder="Share a short introduction for your profile."
            value={formData.shortBio}
          />
        </label>

        <button
          className="md:col-span-2 min-h-12 rounded-full bg-teal-700 px-5 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-teal-800"
          type="submit"
        >
          Register Account
        </button>

        {submitted ? (
          <p className="md:col-span-2 text-sm font-medium text-teal-700">
            Form looks good. Your beginner-friendly validations all passed.
          </p>
        ) : null}

        {serverMessage ? (
          <p
            className={`md:col-span-2 text-sm font-medium ${
              submitted ? 'text-teal-700' : 'text-rose-600'
            }`}
          >
            {serverMessage}
          </p>
        ) : null}
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
