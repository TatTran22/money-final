import React, { ChangeEventHandler, FormEventHandler } from 'react'
import GuestLayout from '@/Layouts/GuestLayout'
import InputError from '@/Components/InputError'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import { useForm } from '@inertiajs/inertia-react'
import AuthRedirect from '@/Components/AuthRedirect'
import route from 'ziggy-js'

export default function ForgotPassword({ status }: { status: string }) {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
  })

  const onHandleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    // @ts-ignore
    setData(event.target.name, event.target.value)
  }

  const submit: FormEventHandler = (e) => {
    e.preventDefault()

    post(route('password.email'))
  }

  return (
    <GuestLayout title="Forgot Password">
      <div>
        <div className="mb-4 text-sm leading-normal text-gray-700 dark:text-gray-100">
          Forgot your password? No problem. Just let us know your email address and we will email you a password reset
          link that will allow you to choose a new one.
        </div>

        {status && <div className="mb-4 text-sm font-medium text-emerald-600 dark:text-emerald-400">{status}</div>}

        <form onSubmit={submit}>
          <TextInput
            type="text"
            name="email"
            value={data.email}
            className="block w-full mt-1"
            isFocused={true}
            handleChange={onHandleChange}
          />

          <InputError message={errors.email} className="mt-2" />

          <div className="flex items-center justify-end mt-4">
            <PrimaryButton processing={processing}>Email Password Reset Link</PrimaryButton>
          </div>
        </form>
        <AuthRedirect href="/login" hrefText="Back to login" />
      </div>
    </GuestLayout>
  )
}
