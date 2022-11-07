import React, { useEffect } from 'react'
import Checkbox from '@/Components/Checkbox'
import GuestLayout from '@/Layouts/GuestLayout'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import PasswordInput from '@/Components/PasswordInput'
import AuthRedirect from '@/Components/AuthRedirect'
import { Link, useForm } from '@inertiajs/inertia-react'

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: '',
  })

  useEffect(() => {
    return () => {
      reset('password')
    }
  }, [])

  const onHandleChange = (event) => {
    setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value)
  }

  const submit = (e) => {
    e.preventDefault()

    post(route('login'))
  }

  return (
    <GuestLayout title="Log in">
      {status && <div className="mb-4 text-sm font-medium text-gray-600 dark:text-gray-200">{status}</div>}
      <form onSubmit={submit}>
        <div>
          <InputLabel forInput="email" value="Email" />
          <TextInput
            type="text"
            name="email"
            value={data.email}
            className="block w-full mt-1"
            autoComplete="username"
            isFocused={true}
            handleChange={onHandleChange}
          />
          <InputError message={errors.email} className="mt-2" />
        </div>
        <div className="mt-4">
          <InputLabel forInput="password" value="Password" />
          <PasswordInput
            name="password"
            value={data.password}
            className="block w-full mt-1"
            autoComplete="current-password"
            handleChange={onHandleChange}
          />
          <InputError message={errors.password} className="mt-2" />
        </div>
        <div className="block mt-4">
          <label className="flex items-center">
            <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-100">Remember me</span>
          </label>
        </div>
        <div className="flex items-center justify-end mt-4">
          {canResetPassword && (
            <Link
              href={route('password.request')}
              className="text-sm underline text-emerald-600 dark:text-emerald-500 hover:text-emerald-800 dark:hover:text-emerald-300"
            >
              Forgot your password?
            </Link>
          )}

          <PrimaryButton className="ml-4" processing={processing}>
            Log in
          </PrimaryButton>
        </div>
      </form>
      <AuthRedirect text="Don't have an account yet?" hrefText={'Register'} href={'/register'} />
    </GuestLayout>
  )
}
