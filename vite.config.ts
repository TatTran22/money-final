/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [
    laravel({
      input: '/resources/js/app.tsx',
      refresh: true,
    }),
    react(),
    eslint({
      failOnError: false,
    }),
  ],
  resolve: {
    alias: {
      '@': '/resources/js',
    },
  },
})
