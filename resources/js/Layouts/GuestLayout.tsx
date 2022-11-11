import React, { Fragment } from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Flex, Heading, Text } from '@chakra-ui/react'
import Navbar from '@/Components/Layout/Navbar'
import Footer from '@/Components/Layout/Footer'
// import { Navbar, Footer } from 'flowbite-react'

export default function Guest({ title, children }: { title: string; children: string | JSX.Element }) {
  return (
    <Fragment>
      <Head title={title} />
      <Flex minH="full" flexDirection={'column'} h="calc(100vh)">
        <Navbar />
        <Flex as={'main'} flexGrow={1}>
          <Flex flexGrow={1} justify="center" alignItems="start">
            <Heading as="h2" marginTop="24">
              <Text color="brand.400">Simple way</Text> to manage <Text color="brand.400">personal finances</Text>
            </Heading>
          </Flex>
          <Flex justify="center" w="2xl" h="full" paddingTop="16">
            {children}
          </Flex>
        </Flex>
        <Footer />
      </Flex>
    </Fragment>
  )
}
