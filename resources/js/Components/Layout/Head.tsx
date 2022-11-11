import React from 'react'
import { Head, InertiaHeadProps } from '@inertiajs/inertia-react'
import siteMeta from '@/data/siteMetadata'

const absolutePath = (path?: string) => {
  return `${import.meta.env.VITE_APP_URL ? String(import.meta.env.VITE_APP_URL) : 'localhost'}${path || ''}`
}

const siteTitle = siteMeta.title
const description = siteMeta.description

const DocumentHead: React.FC<InertiaHeadProps> = ({ title }) => {
  return (
    <Head title={title ? `${title} | ${siteTitle}` : siteTitle}>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={siteTitle} />
      <meta name="viewport" content="width=device-width, initial-scale=0.65, maximum-scale=5.0, minimum-scale=0.65" />
      <meta property="og:url" content={absolutePath()} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absolutePath('/images/dollar-512x512.png')} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:site" content="@tattran22" />
      <meta name="twitter:creator" content="@tattran22" />
      <meta name="description" content={description} />
      <meta property="twitter:image" content={absolutePath('/images/dollar-512x512.png')} />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/dollar-16x16.png"></link>
      <link rel="icon" type="image/png" sizes="32x32" href="/images/dollar-32x32.png"></link>
      <link rel="icon" type="image/png" sizes="512x512" href="/images/dollar-512x512.png"></link>
    </Head>
  )
}

export default DocumentHead
