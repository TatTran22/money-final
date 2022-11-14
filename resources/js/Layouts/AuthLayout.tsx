import React, { Fragment, useEffect } from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Flex } from '@chakra-ui/react'
import Footer from '@/Components/Layout/Footer'
import NavBar from '@/Components/Layout/Navbar'

interface AuthLayoutProps {
  auth: { user: User }
  errors: any
  title: string
  children: string | JSX.Element
}

export default function AuthLayout({ title, children, auth, errors }: AuthLayoutProps) {
  useEffect(() => {
    console.log(errors)
    return () => {}
  }, [errors])

  return (
    <Fragment>
      <Head title={title} />
      <Flex minH="full" flexDirection={'column'} h="calc(100vh)">
        <NavBar user={auth.user} navChildren={title} />

        <Flex justify="center" h="full" paddingTop="16">
          {children}
        </Flex>

        <Footer />
      </Flex>
    </Fragment>
  )
}
