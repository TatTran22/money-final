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
      <Flex minH="full" flexDirection={'column'} h="calc(100vh)">
        <Box as="section" pb={{ base: '4', md: '6' }}>
          <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
            <Container py={{ base: '4', lg: '5' }}>
              <HStack spacing="10" justify="space-between">
                <Logo />
                <DarkModeSwitch />
              </HStack>
            </Container>
          </Box>
        </Box>
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
