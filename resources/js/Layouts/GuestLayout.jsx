import React from 'react'
import ApplicationLogo from '@/Components/ApplicationLogo'
import { Head, Link } from '@inertiajs/inertia-react'
import moneyImage from '@/assets/images/money-landing-page.png'

export default function Guest({ title, children }) {
  return (
    <div className="flex flex-row items-center justify-center min-h-screen pt-6 bg-white sm:pt-0">
      <div className="flex justify-center bg-red basis-3/5 ">
        <img src={moneyImage} alt={'Money Tracker App'} className={`max-h-96 max-w-6xl`} />
      </div>
      <div className="grow flex justify-start flex-col items-center bg-[#ecf0f4] min-h-screen">
        <div className="m-8">
          <Link href="/">
            <ApplicationLogo className="w-20 h-20 text-gray-500 fill-current" />
          </Link>
        </div>

        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
          <Head>
            <title>{title}</title>
          </Head>
          {children}
        </div>
      </div>
    </div>
  )
}
