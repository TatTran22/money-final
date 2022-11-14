import React from 'react'
import AuthLayout from '@/Layouts/AuthLayout'
import { Box, Text } from '@chakra-ui/react'

export default function Dashboard({ auth, errors }: { auth: { user: User }; errors: any }) {
  return (
    <AuthLayout auth={auth} errors={errors} title="Dashboard">
      <Box>
        <Text>You're logged in!</Text>
      </Box>
    </AuthLayout>
  )
}
