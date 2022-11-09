import React, { ChangeEventHandler, FormEventHandler, useEffect } from 'react'
import GuestLayout from '@/Layouts/GuestLayout'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import { useForm } from '@inertiajs/inertia-react'
import PasswordInput from '@/Components/PasswordInput'
import route from 'ziggy-js'
import AuthRedirect from '@/Components/AuthRedirect'

export default function ResetPassword({ token, email }: { token: string; email: string }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    token: token,
    email: email,
    password: '',
    password_confirmation: '',
  })

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation')
    }
  }, [])

  const onHandleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    // @ts-ignore
    setData(event.target.name, event.target.value)
  }

  const submit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    post(route('password.update'))
  }

  return (
    <GuestLayout title="Reset Password">
      <div>
        <form onSubmit={submit}>
          <div>
            <InputLabel forInput="email" value="Email" />

            <TextInput
              type="email"
              name="email"
              value={data.email}
              className="block w-full mt-1"
              autoComplete="username"
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
              autoComplete="new-password"
              isFocused={true}
              handleChange={onHandleChange}
            />

            <InputError message={errors.password} className="mt-2" />
          </div>

          <div className="mt-4">
            <InputLabel forInput="password_confirmation" value="Confirm Password" />

            <PasswordInput
              name="password_confirmation"
              value={data.password_confirmation}
              className="block w-full mt-1"
              autoComplete="new-password"
              handleChange={onHandleChange}
            />

            <InputError message={errors.password_confirmation} className="mt-2" />
          </div>

          <div className="flex items-center justify-end mt-4">
            <PrimaryButton className="ml-4" processing={processing}>
              Reset Password
            </PrimaryButton>
          </div>
        </form>
        <AuthRedirect href="/login" hrefText="Back to login" />
      </div>
    </GuestLayout>
  )
}
