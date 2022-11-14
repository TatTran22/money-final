import React, { ChangeEventHandler, FormEventHandler, useEffect } from 'react'
import GuestLayout from '@/Layouts/GuestLayout'
import { useForm } from '@inertiajs/inertia-react'
import route from 'ziggy-js'
import AuthRedirect from '@/Components/AuthRedirect'
import { EmailField } from '@/Components/Auth/EmailField'
import { PasswordField } from '@/Components/Auth/PasswordField'
import { Box, useColorModeValue, Stack, Button, Heading } from '@chakra-ui/react'

export default function ResetPassword({ token, email }: { token: string; email: string }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    token: token,
    email: email,
    password: '',
    password_confirmation: '',
  })

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation')
    }
  }, [])

  const onHandleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    // @ts-ignore
    setData(event.target.name, event.target.value)
  }

  const submit: FormEventHandler = (e) => {
    e.preventDefault()
    post(route('password.update'))
  }

  return (
    <GuestLayout title="Reset Password">
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
        bgColor="gray.200"
      >
        <Stack spacing="6">
          <Heading as="h2" size="md" textColor="brand.400">
            Reset Password
          </Heading>
          <Stack spacing="5">
            <EmailField value={data.email} errormsg={errors.email} />
            <PasswordField value={data.password} onChange={onHandleChange} errormsg={errors.password} />
            <PasswordField
              id="password-confirm"
              name="password_confirmation"
              value={data.password_confirmation}
              onChange={onHandleChange}
              errormsg={errors.password_confirmation}
            />
          </Stack>

          <Stack spacing="6">
            <Button variant="primary" type="submit" isLoading={processing}>
              Reset Password
            </Button>
          </Stack>
        </Stack>
        <AuthRedirect text="" hrefText="Back to login" href="/login" />
      </Box>
    </GuestLayout>
  )
}
