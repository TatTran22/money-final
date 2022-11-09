import React from 'react'
import { Link } from '@inertiajs/inertia-react'

export default function NavLink({
  href,
  active,
  children,
}: {
  href: string
  active: boolean
  children: JSX.Element | string
}) {
  return (
    <Link
      href={href}
      className={
        active
          ? 'inline-flex items-center px-1 pt-1 border-b-2 border-teal-400 text-sm font-semibold leading-5 text-emerald-600 dark:text-emerald-200 focus:outline-none focus:border-teal-700 transition duration-150 ease-in-out'
          : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-emerald-900 hover:text-emerald-700 dark:hover:text-emerald-200 hover:border-gray-300 dark:hover:border-indigo-200 focus:outline-none focus:text-emerald-700 focus:border-indigo-300 transition duration-150 ease-in-out dark:text-emerald-400'
      }
    >
      {children}
    </Link>
  )
}
