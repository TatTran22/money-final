import React from 'react'
import ApplicationLogo from '@/Components/ApplicationLogo'
import { Head, Link } from '@inertiajs/inertia-react'
import moneyImage from '@/assets/images/money-landing-page.png'
import ToggleDarkModeButton from '@/Components/ToggleDarkModeButton'

export default function Guest({ title, children }: { title: string; children: string | JSX.Element }) {
  return (
    <div className="flex flex-row items-center justify-center min-h-screen pt-6 bg-gray-100 dark:bg-[#30364f] sm:pt-0">
      <Head title={title} />
      <div className="flex justify-center bg-red basis-3/5 ">
        <img src={moneyImage} alt={'Money Tracker App'} className={`max-h-96 max-w-6xl`} />
      </div>
      <div className="grow flex justify-start flex-col items-center bg-[#a6d09d] dark:bg-gray-600 min-h-screen relative">
        <div className="absolute flex justify-end w-full right-16 top-5">
          <ToggleDarkModeButton />
        </div>
        <div className="m-8">
          <Link href="/">
            <ApplicationLogo className="w-20 h-20 text-gray-500 fill-current dark:text-gray-200" />
          </Link>
        </div>

        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-gray-100 shadow-md dark:bg-gray-700 shadow-teal-500/50 dark:shadow-blue-500/50 sm:max-w-md sm:rounded-lg">
          {children}
        </div>
      </div>
    </div>
  )
}
