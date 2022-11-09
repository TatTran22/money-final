import React, { useState } from 'react'
import { Head, Link } from '@inertiajs/inertia-react'
import ApplicationLogo from '@/Components/ApplicationLogo'
import Dropdown from '@/Components/Dropdown'
import NavLink from '@/Components/NavLink'
import ResponsiveNavLink from '@/Components/ResponsiveNavLink'
import ToggleDarkModeButton from '@/Components/ToggleDarkModeButton'
import route from 'ziggy-js'

interface AuthenticatedProps {
  auth: { user: User }
  header?: string | JSX.Element
  title?: string
  errors?: any
  children?: JSX.Element
}

export default function Authenticated({ auth, header, title, children }: AuthenticatedProps) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false)
  const NavItems = [
    {
      href: 'dashboard',
      title: 'Dashboard',
    },
    {
      href: 'wallets',
      title: 'Wallets',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {title && <Head title={title} />}
      <nav className="bg-white border-b border-gray-100 dark:bg-gray-700">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex items-center shrink-0">
                <Link href="/">
                  <ApplicationLogo className="block w-auto text-gray-500 fill-current h-9 dark:text-gray-200" />
                </Link>
              </div>

              <div className="hidden space-x-8 sm:ml-10 sm:flex">
                {NavItems.map((item, index) => (
                  <NavLink href={item.href} active={route().current(item.href)} key={index}>
                    {item.title}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="hidden sm:flex sm:items-center sm:ml-6">
              <ToggleDarkModeButton />
              <div className="relative ml-3">
                <Dropdown>
                  <div className="relative">
                    <Dropdown.Trigger>
                      <span className="inline-flex rounded-md">
                        <button
                          type="button"
                          className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:text-gray-100 dark:bg-gray-600 hover:text-gray-700 dark:hover:text-gray-50 focus:outline-none"
                        >
                          {`${auth.user.first_name} ${auth.user.last_name}`}
                          <svg
                            className="ml-2 -mr-0.5 h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </span>
                    </Dropdown.Trigger>

                    <Dropdown.Content>
                      <Dropdown.Link href={route('logout')} method="post" as="button">
                        Log Out
                      </Dropdown.Link>
                    </Dropdown.Content>
                  </div>
                </Dropdown>
              </div>
            </div>

            <div className="flex items-center -mr-2 sm:hidden">
              <button
                type="button"
                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
              >
                <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path
                    className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
          <div className="pt-2 pb-3 space-y-1">
            {NavItems.map((item, index) => (
              <ResponsiveNavLink href={route(item.href)} active={route().current(item.href)} key={index}>
                {item.title}
              </ResponsiveNavLink>
            ))}
          </div>

          <div className="pt-4 pb-1 border-t border-gray-200">
            <div className="px-4">
              <div className="text-base font-medium text-gray-800">{`${auth.user.first_name} ${auth.user.last_name}`}</div>
              <div className="text-sm font-medium text-gray-500">{auth.user.email}</div>
            </div>

            <div className="mt-3 space-y-1">
              <ResponsiveNavLink method="post" href={route('logout')} as="button">
                Log Out
              </ResponsiveNavLink>
            </div>
          </div>
        </div>
      </nav>

      {header && (
        <header className="bg-white shadow">
          <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">{header}</div>
        </header>
      )}

      <main>{children}</main>
    </div>
  )
}
