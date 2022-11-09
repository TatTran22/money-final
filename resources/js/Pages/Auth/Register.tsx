import { ChangeEventHandler, FormEventHandler, useEffect } from 'react'
import GuestLayout from '@/Layouts/GuestLayout'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import PasswordInput from '@/Components/PasswordInput'
import { useForm } from '@inertiajs/inertia-react'
import AuthRedirect from '@/Components/AuthRedirect'
import route from 'ziggy-js'

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    first_name: '',
    last_name: '',
    email: '',
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
    setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value)
  }

  const submit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    post(route('register'))
  }

  return (
    <GuestLayout title="Register">
      <div>
        <form onSubmit={submit}>
          <div className="flex flex-row ">
            <div className="mr-2 basis-1/2">
              <InputLabel forInput="first_name" value="First name" />
              <TextInput
                type="text"
                name="first_name"
                value={data.first_name}
                className="block w-full mt-1"
                autoComplete="given-name"
                isFocused={true}
                handleChange={onHandleChange}
                required
              />
              <InputError message={errors.first_name} className="mt-2" />
            </div>
            <div className="ml-2 basis-1/2">
              <InputLabel forInput="last_name" value="Last name" />
              <TextInput
                type="text"
                name="last_name"
                value={data.last_name}
                className="block w-full mt-1"
                autoComplete="family-name"
                isFocused={true}
                handleChange={onHandleChange}
                required
              />
              <InputError message={errors.last_name} className="mt-2" />
            </div>
          </div>
          <div className="mt-4">
            <InputLabel forInput="email" value="Email" />
            <TextInput
              type="email"
              name="email"
              value={data.email}
              className="block w-full mt-1"
              autoComplete="email"
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
      </div>
    </GuestLayout>
  )
}
