import React, { FormEventHandler } from 'react'
import GuestLayout from '@/Layouts/GuestLayout'
import { Link, useForm } from '@inertiajs/inertia-react'
import route from 'ziggy-js'
import { Box, Stack, useColorModeValue, Text, Button, Flex, Heading } from '@chakra-ui/react'

export default function VerifyEmail({ status }: { status: string }) {
  const { post, processing } = useForm()

  const submit: FormEventHandler = (e) => {
    e.preventDefault()

    post(route('verification.send'))
  }

  return (
    <GuestLayout title="Email Verification">
      <Box
        as="form"
        py={{ base: '0', sm: '8' }}
        px={{ base: '4', sm: '10' }}
        bg={{ base: 'gray.100', sm: 'bg-surface' }}
        boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
        borderRadius={{ base: 'none', sm: 'xl' }}
        onSubmit={submit}
        w={'md'}
        h="fit-content"
      >
        <Stack spacing="6">
          <Heading as="h2" size="md" textColor="brand.400">
            Email Verification
          </Heading>
          <Text>
            Thanks for signing up! Before getting started, could you verify your email address by clicking on the link
            we just emailed to you? If you didn't receive the email, we will gladly send you another.
          </Text>
          {status === 'verification-link-sent' && (
            <Text>A new verification link has been sent to the email address you provided during registration.</Text>
          )}
          <Flex flexDirection="row" alignItems="center" justify="space-between">
            <Button variant="primary" type="submit" isLoading={processing}>
              Resend Verification Email
            </Button>
            <Link href={route('logout')} method="post">
              <Button variant="link" colorScheme="blue" size="sm">
                Log Out
              </Button>
            </Link>
          </Flex>
        </Stack>
      </Box>
    </GuestLayout>
  )
}
