import { dinero } from 'dinero.js'
import { USD, VND } from '@dinero.js/currencies'
import { intlFormat } from '@/utils/intlFormat'

interface WalletMiniCardProps {
  name: string
  src: string
}

export default function WalletMiniCard({ name, src }: WalletMiniCardProps) {
  return (
    <div className="flex flex-row items-center w-full bg-gray-100 rounded-lg">
      <img src={src} alt={name} className="p-2 my-2 ml-2 mr-1 bg-green-200 rounded-lg w-14 h-14" />
      <div className="flex flex-row flex-wrap items-center justify-between w-full h-full p-2 my-2 ml-1 mr-2 rounded-lg">
        <div className="flex flex-col items-start pl-1 h-fit basis-1/2">
          <div className="h-6 text-sm font-bold text-md">TPBank</div>
          <div className="text-lg">{intlFormat(dinero({ amount: 5000, currency: VND }), 'vi-VN')}</div>
        </div>
        <div className="flex flex-col items-end pr-1 basis-1/2">
          <div className="text-green-500 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="text-lg">100%</div>
        </div>
      </div>
    </div>
  )
}
