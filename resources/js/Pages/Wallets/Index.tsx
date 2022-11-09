import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import WalletMiniCard from '@/Components/WalletMiniCard'

const Header = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold leading-tight text-gray-800">Wallets</h2>
    </div>
  )
}

export default function WalletIndex({ auth, errors }: { auth: { user: User }; errors: any }) {
  const imgUrls = new URL('@/assets/images/bank.png', import.meta.url).href
  return (
    <AuthenticatedLayout auth={auth} errors={errors} header={<Header />} title="Dashboard">
      <div className="py-6">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="flex flex-row p-6 border-b">
              <div className="mr-4 bg-gray-100 rounded-lg w-72">
                <div>
                  <WalletMiniCard name="TPBank" src={imgUrls} />
                </div>
              </div>
              <div className="bg-indigo-200 grow">b</div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
