import React, { ChangeEventHandler, FormEventHandler } from 'react'
import GuestLayout from '@/Layouts/GuestLayout'
import { useForm } from '@inertiajs/inertia-react'
import AuthRedirect from '@/Components/AuthRedirect'
import route from 'ziggy-js'
import { Box, Button, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { EmailField } from '@/Components/Auth/EmailField'

export default function ForgotPassword({ status }: { status: string }) {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
  })

  const textStatusColor = useColorModeValue('green.600', 'green.400')

  const onHandleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    // @ts-ignore
    setData(event.target.name, event.target.value)
  }

  const submit: FormEventHandler = (e) => {
    e.preventDefault()

    post(route('password.email'))
  }

  return (
    <GuestLayout title="Forgot Password">
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
            Forgot Password
          </Heading>
          {status && <Text color={textStatusColor}>{status}</Text>}
          <Stack spacing="5">
            <EmailField
              placeholder="Enter your email"
              value={data.email}
              onChange={onHandleChange}
              errormsg={errors.email}
            />
          </Stack>
          <Stack spacing="6">
            <Button variant="primary" type="submit" isLoading={processing}>
              Email Password Reset Link
            </Button>
          </Stack>
        </Stack>
        <AuthRedirect href="/login" hrefText="Back to login" text={''} />
      </Box>
    </GuestLayout>
  )
}
