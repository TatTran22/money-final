// eslint-disable-next-line import/extensions
import './bootstrap.js'
import '@fontsource/nunito'
import '@fontsource/nunito-sans'

import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/theme'

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Tat Tran'

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob(['./Pages/**/*.tsx', './assets/images/**'])),
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
    InertiaProgress.init()
  })
  .catch(() => {
    console.log('Error')
  })
