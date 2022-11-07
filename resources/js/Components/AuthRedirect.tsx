import { Link } from '@inertiajs/inertia-react'

type AuthRedirectProps = {
  text?: string
  hrefText: string
  href: string
}

const AuthRedirect: React.FC<AuthRedirectProps> = ({ text, hrefText, href }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-4 border-t border-gray-400">
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
        {text}
        <Link
          href={href}
          className="ml-2 text-sm underline text-emerald-700 dark:text-emerald-500 hover:text-emerald-800 dark:hover:text-emerald-300"
        >
          {hrefText}
        </Link>
      </div>
    </div>
  )
}

export default AuthRedirect
