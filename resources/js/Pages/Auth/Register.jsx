import React, { useEffect } from 'react'
import GuestLayout from '@/Layouts/GuestLayout'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import PasswordInput from '@/Components/PasswordInput'
import { Head, Link, useForm } from '@inertiajs/inertia-react'
import AuthRedirect from '@/Components/AuthRedirect'

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation')
    }
  }, [])

  const onHandleChange = (event) => {
    setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value)
  }

  const submit = (e) => {
    e.preventDefault()

    post(route('register'))
  }

  return (
    <GuestLayout>
      <Head title="Register" />
      <form onSubmit={submit}>
        <div>
          <InputLabel forInput="name" value="Name" />
          <TextInput
            type="text"
            name="name"
            value={data.name}
            className="block w-full mt-1"
            autoComplete="name"
            isFocused={true}
            handleChange={onHandleChange}
            required
          />

          <InputError message={errors.name} className="mt-2" />
        </div>
        <div className="mt-4">
          <InputLabel forInput="email" value="Email" />
          <TextInput
            type="email"
            name="email"
            value={data.email}
            className="block w-full mt-1"
            autoComplete="username"
            handleChange={onHandleChange}
            required
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
            handleChange={onHandleChange}
            required
          />
          <InputError message={errors.password} className="mt-2" />
        </div>
        <div className="mt-4">
          <InputLabel forInput="password_confirmation" value="Confirm Password" />
          <PasswordInput
            name="password_confirmation"
            value={data.password_confirmation}
            className="block w-full mt-1"
            handleChange={onHandleChange}
            required
          />

          <InputError message={errors.password_confirmation} className="mt-2" />
        </div>
        <div className="flex items-center justify-center mt-8">
          <PrimaryButton className="ml-4" processing={processing}>
            Register
          </PrimaryButton>
        </div>
      </form>
      <AuthRedirect text="Already have an account?" hrefText="Log in" href="/login" />
    </GuestLayout>
  )
}
