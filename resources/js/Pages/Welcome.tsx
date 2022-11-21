import { Link, Head } from '@inertiajs/inertia-react'
import route from 'ziggy-js'
import { Logo } from '@/Components/Auth/Logo'
import { DarkModeSwitch } from '@/Components/Layout/DarkModeSwitch'
import Footer from '@/Components/Layout/Footer'
import { Flex, Container, HStack, Heading, Text, Box, Button } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/system'
import { Fragment } from 'react'

export default function Welcome() {
  return (
    <Fragment>
      <Head title={'Welcome'} />
      <Flex minH="calc(100vh)" flexDirection={'column'} h="fit-content">
        <Box as="section" pb={{ base: '4', md: '6' }} minH="fit-content">
          <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
            <Container py={{ base: '4', lg: '5' }}>
              <HStack spacing="10" justify="space-between">
                <Logo />
                <HStack spacing={6}>
                  <DarkModeSwitch />
                  <HStack>
                    <Link href={route('login')}>
                      <Button variant="primary">Login</Button>
                    </Link>
                    <Link href={route('register')}>
                      <Button variant="secondary">Sign up</Button>
                    </Link>
                  </HStack>
                </HStack>
              </HStack>
            </Container>
          </Box>
        </Box>
        <Flex as={'main'} flexFlow="wrap" justify="center">
          <Flex flex="0 0 50%" justify="center" alignItems="start">
            <Heading
              as="h2"
              marginTop={{ base: '2', md: '24' }}
              paddingX={{ base: '20' }}
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="6xl"
              fontWeight="extrabold"
            >
              <Text as="span">Simple way</Text> to manage <Text as="span">your money</Text>
            </Heading>
          </Flex>
          <Flex flex="0 0 50%" justify="center" alignItems="center" flexBasis="1/2" h="full"></Flex>
        </Flex>
        <Footer />
      </Flex>
    </Fragment>
  )
}
