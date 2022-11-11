import React, { ChangeEventHandler, FormEventHandler, useEffect, createRef } from 'react'
import { Link, useForm } from '@inertiajs/inertia-react'
import route from 'ziggy-js'
import GuestLayout from '@/Layouts/GuestLayout'
import { EmailField } from '@/Components/Auth/EmailField'
import { PasswordField } from '@/Components/Auth/PasswordField'
import { Box, Button, Checkbox, Divider, HStack, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import AuthRedirect from '@/Components/AuthRedirect'

export default function Login({ status, canResetPassword }: { status: string; canResetPassword: boolean }) {
  const emailRef = createRef<HTMLInputElement>()
  const passwordRef = createRef<HTMLInputElement>()

  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  })
  useEffect(() => {
    return () => {
      reset('password')
    }
  }, [])

  const onHandleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    // @ts-ignore
    setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value)
  }

  const submit: FormEventHandler = (e) => {
    e.preventDefault()
    if (emailRef.current?.value && passwordRef.current?.value) {
      setData('email', emailRef.current.value)
      setData('password', passwordRef.current.value)
    }
    post(route('login'))
  }

  useEffect(() => {
    console.log(errors)
  }, [errors])

  useEffect(() => {
    console.log(status)
  }, [status])

  return (
    <GuestLayout title="Log in">
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
        {status && <Text>{status}</Text>}
        <Stack spacing="6">
          <Stack spacing="5">
            <EmailField
              placeholder="Enter your email"
              ref={emailRef}
              value={data.email}
              onChange={onHandleChange}
              errormsg={errors.email}
            />
            <PasswordField
              placeholder="Enter your password"
              ref={passwordRef}
              value={data.password}
              onChange={onHandleChange}
              errormsg={errors.password}
            />
          </Stack>
          <HStack justify="space-between">
            <Checkbox id="remember" name="remember" isChecked={data.remember} onChange={onHandleChange}>
              Remember me
            </Checkbox>
            {canResetPassword && (
              <Link href="/forgot-password">
                <Button variant="link" colorScheme="blue" size="sm">
                  Forgot password?
                </Button>
              </Link>
            )}
          </HStack>
          <Stack spacing="6">
            <Button variant="primary" type="submit" isLoading={processing}>
              Sign in
            </Button>
            <HStack hidden>
              <Divider />
              <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                or continue with
              </Text>
              <Divider />
            </HStack>
            {/* <OAuthButtonGroup /> */}
          </Stack>
        </Stack>
        <AuthRedirect text="Don't have an account yet?" hrefText={'Register'} href={'/register'} />
      </Box>
    </GuestLayout>
  )
}
