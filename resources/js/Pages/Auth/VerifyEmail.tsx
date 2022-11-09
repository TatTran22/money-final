import React, { FormEventHandler } from 'react'
import GuestLayout from '@/Layouts/GuestLayout'
import PrimaryButton from '@/Components/PrimaryButton'
import { Link, useForm } from '@inertiajs/inertia-react'
import route from 'ziggy-js'

export default function VerifyEmail({ status }: { status: string }) {
  const { post, processing } = useForm()

  const submit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    post(route('verification.send'))
  }

  return (
    <GuestLayout title="Email Verification">
      <div>
        <div className="mb-4 text-sm leading-normal text-gray-700 dark:text-gray-100">
          Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we
          just emailed to you? If you didn't receive the email, we will gladly send you another.
        </div>

        {status === 'verification-link-sent' && (
          <div className="mb-4 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            A new verification link has been sent to the email address you provided during registration.
          </div>
        )}

        <form onSubmit={submit}>
          <div className="flex items-center justify-between mt-4">
            <PrimaryButton processing={processing}>Resend Verification Email</PrimaryButton>

            <Link
              href={route('logout')}
              method="post"
              as="button"
              className="text-sm text-gray-600 underline hover:text-gray-900 dark:text-gray-200"
            >
              Log Out
            </Link>
          </div>
        </form>
      </div>
    </GuestLayout>
  )
}
