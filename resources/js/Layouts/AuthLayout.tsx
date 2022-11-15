import React, { useEffect } from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Box, Flex } from '@chakra-ui/react'
import Footer from '@/Components/Layout/Footer'
import NavBar from '@/Components/Layout/Navbar'

interface AuthLayoutProps {
  auth: { user: User }
  errors: any
  title: string
  children?: JSX.Element
  navChild?: JSX.Element
}

export default function AuthLayout({ title, children, auth, errors, navChild }: AuthLayoutProps) {
  useEffect(() => {
    if (errors.length) console.log(errors)
  }, [errors])

  return (
    <Box bg="bg-surface">
      <Head title={title} />
      <Flex minH="calc(100vh)" flexDirection={'column'} h="fit-content" position="relative">
        <NavBar user={auth.user} navChildren={navChild} title={title} />
        <Flex bg="bg-subtle" flex={1}>
          {children}
        </Flex>
        <Footer />
      </Flex>
    </Box>
  )
}
