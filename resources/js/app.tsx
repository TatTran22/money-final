// eslint-disable-next-line import/extensions
import './bootstrap.js'
import '@fontsource/inter/variable.css'

import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/theme'
const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel'

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
  setup({ el, App, props }) {
    const root = createRoot(el)

    root.render(
      <ChakraProvider resetCSS theme={theme}>
        <App {...props} />
      </ChakraProvider>,
    )
  },
})
  .then(() => {
    InertiaProgress.init({ color: '#4B5563' })
  })
  .catch(() => {
    console.log('Error')
  })
