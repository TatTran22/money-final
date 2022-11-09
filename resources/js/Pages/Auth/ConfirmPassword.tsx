import React, { ChangeEventHandler, FormEventHandler, useEffect } from 'react'
import GuestLayout from '@/Layouts/GuestLayout'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import { useForm } from '@inertiajs/inertia-react'
import route from 'ziggy-js'

export default function ConfirmPassword() {
  const { data, setData, post, processing, errors, reset } = useForm({
    password: '',
  })

  useEffect(() => {
    return () => {
      reset('password')
    }
  }, [])

  const onHandleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    // @ts-ignore
    setData(event.target.name, event.target.value)
  }

  const submit: FormEventHandler = (e) => {
    e.preventDefault()
    post(route('password.confirm'))
  }

  return (
    <GuestLayout title="Confirm Password">
      <div>
        <div className="mb-4 text-sm text-gray-600">
          This is a secure area of the application. Please confirm your password before continuing.
        </div>
        <form onSubmit={submit}>
          <div className="mt-4">
            <InputLabel forInput="password" value="Password" />

            <TextInput
              type="password"
              name="password"
              value={data.password}
              className="block w-full mt-1"
              isFocused={true}
              handleChange={onHandleChange}
            />

            <InputError message={errors.password} className="mt-2" />
          </div>

          <div className="flex items-center justify-end mt-4">
            <PrimaryButton className="ml-4" processing={processing}>
              Confirm
            </PrimaryButton>
          </div>
        </form>{' '}
      </div>
    </GuestLayout>
  )
}