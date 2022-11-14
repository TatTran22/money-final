import React, { ChangeEventHandler, FormEventHandler, useEffect } from 'react'
import GuestLayout from '@/Layouts/GuestLayout'
import { useForm } from '@inertiajs/inertia-react'
import route from 'ziggy-js'
import { Box, useColorModeValue, Stack, Button, Text, Heading } from '@chakra-ui/react'
import { PasswordField } from '@/Components/Auth/PasswordField'

export default function ConfirmPassword() {
  const { data, setData, post, processing, errors, reset } = useForm({
    password: '',
  })

  useEffect(() => {
    return () => {
      reset('password')
    }
  }, [])

  const onHandleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    // @ts-ignore
    setData(event.target.name, event.target.value)
  }

  const submit: FormEventHandler = (e) => {
    e.preventDefault()
    post(route('password.confirm'))
  }

  return (
    <GuestLayout title="Confirm Password">
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
            Confirm Password
          </Heading>
          <Text>This is a secure area of the application. Please confirm your password before continuing.</Text>
          <Stack spacing="5">
            <PasswordField
              placeholder="Enter your password"
              value={data.password}
              onChange={onHandleChange}
              errormsg={errors.password}
            />
          </Stack>
          <Stack spacing="6">
            <Button variant="primary" type="submit" isLoading={processing}>
              Confirm
            </Button>
          </Stack>
        </Stack>
      </Box>
    </GuestLayout>
  )
}
