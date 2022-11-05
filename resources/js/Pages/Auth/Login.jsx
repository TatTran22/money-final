import React, { useEffect } from 'react'
import Checkbox from '@/Components/Checkbox'
import GuestLayout from '@/Layouts/GuestLayout'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import PasswordInput from '@/Components/PasswordInput'
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
      {status && <div className="mb-4 text-sm font-medium text-green-600">{status}</div>}
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
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
        </div>
        <div className="flex items-center justify-end mt-4">
          {canResetPassword && (
            <Link href={route('password.request')} className="text-sm text-green-600 underline hover:text-green-900">
              Forgot your password?
            </Link>
          )}

          <PrimaryButton className="ml-4" processing={processing}>
            Log in
          </PrimaryButton>
        </div>
      </form>
      <div className="flex items-center justify-center mt-8">
        <div className="text-sm text-gray-600 dark:text-gray-400">Don't have an account yet?</div>
        <Link href="/register" className="ml-2 text-sm text-green-700 underline dark:text-green-500">
          Register
        </Link>
      </div>
    </GuestLayout>
  )
}
