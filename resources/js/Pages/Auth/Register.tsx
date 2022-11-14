import { ChangeEventHandler, FormEventHandler, useEffect } from 'react'
import { useForm } from '@inertiajs/inertia-react'
import route from 'ziggy-js'
import GuestLayout from '@/Layouts/GuestLayout'
import AuthRedirect from '@/Components/AuthRedirect'
import { EmailField } from '@/Components/Auth/EmailField'
import { PasswordField } from '@/Components/Auth/PasswordField'
import { Box, useColorModeValue, Stack, HStack, FormControl, FormLabel, Input, Button, Heading } from '@chakra-ui/react'

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    first_name: '',
    last_name: '',
    email: '',
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
    setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value)
  }

  const submit: FormEventHandler = (e) => {
    e.preventDefault()

    post(route('register'))
  }

  return (
    <GuestLayout title="Register">
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
            Sign Up
          </Heading>
          <Stack spacing="5">
            <HStack>
              <FormControl>
                <FormLabel htmlFor="first_name">First Name</FormLabel>
                <Input
                  id="first-name"
                  type="text"
                  name="first_name"
                  autoComplete="given-name"
                  value={data.first_name}
                  onChange={onHandleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="last_name">Last Name</FormLabel>
                <Input
                  id="last-name"
                  type="text"
                  name="last_name"
                  autoComplete="family-name"
                  value={data.last_name}
                  onChange={onHandleChange}
                />
              </FormControl>
            </HStack>

            <EmailField value={data.email} onChange={onHandleChange} errormsg={errors.email} />
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
              Sign up
            </Button>
          </Stack>
        </Stack>
        <AuthRedirect text="Already have an account?" hrefText="Log in" href="/login" />
      </Box>
    </GuestLayout>
  )
}
