import React, { Fragment } from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Box, Container, Flex, Heading, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import Footer from '@/Components/Layout/Footer'
import { Logo } from '@/Components/Auth/Logo'
// import { Navbar, Footer } from 'flowbite-react'
import { DarkModeSwitch } from '@/Components/Layout/DarkModeSwitch'

export default function Guest({ title, children }: { title: string; children: string | JSX.Element }) {
  return (
    <Fragment>
      <Head title={title} />
      <Flex minH="calc(100vh)" flexDirection={'column'} h="fit-content">
        <Box as="section" pb={{ base: '4', md: '6' }} minH="fit-content">
          <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
            <Container py={{ base: '4', lg: '5' }}>
              <HStack spacing="10" justify="space-between">
                <Logo />
                <DarkModeSwitch />
              </HStack>
            </Container>
          </Box>
        </Box>
        <Flex as={'main'} flexFlow="wrap" justify="center">
          <Flex flex="0 0 50%" justify="center" alignItems="start">
            <Heading as="h2" marginTop={{ base: '2', md: '24' }}>
              <Text color="brand.400">Simple way</Text> to manage <Text color="brand.400">personal finances</Text>
            </Heading>
          </Flex>
          <Flex flex="0 0 50%" justify="center" alignItems="center" flexBasis="1/2" h="full">
            {children}
          </Flex>
        </Flex>
        <Footer />
      </Flex>
    </Fragment>
  )
}
